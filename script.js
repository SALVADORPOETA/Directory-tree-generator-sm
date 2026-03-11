const input = document.getElementById('folderInput')
const output = document.getElementById('outputText')
const copyBtn = document.getElementById('copyBtn')
const clearBtn = document.getElementById('clearBtn')

// Folders to exclude from the tree
const IGNORE_LIST = [
  '.git',
  'node_modules',
  'session',
  'ShaderCache',
  'GrShaderCache',
  'GraphiteDawnCache',
  'Default',
  'hooks',
  '.vscode',
  '__pycache__',
  'venv',
]

// Event Listeners
input.addEventListener('change', handleFolderSelect)
copyBtn.addEventListener('click', copyToClipboard)
clearBtn.addEventListener('click', () => location.reload())

function handleFolderSelect(e) {
  const files = Array.from(e.target.files)
  if (files.length === 0) return

  const root = buildFilteredTree(files)
  const visualTree = generateTextTree(root)

  output.textContent = visualTree || 'No files found to display.'
}

function buildFilteredTree(files) {
  const root = {}

  files.forEach((file) => {
    const pathParts = file.webkitRelativePath.split('/')
    const isIgnored = pathParts.some((part) => IGNORE_LIST.includes(part))

    if (!isIgnored) {
      let current = root
      pathParts.forEach((part) => {
        if (!current[part]) current[part] = {}
        current = current[part]
      })
    }
  })
  return root
}

function generateTextTree(node, prefix = '') {
  let result = ''
  const keys = Object.keys(node)

  keys.forEach((key, index) => {
    const isLast = index === keys.length - 1
    const connector = isLast ? '└── ' : '├── '
    result += prefix + connector + key + '\n'

    if (Object.keys(node[key]).length > 0) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ')
      result += generateTextTree(node[key], newPrefix)
    }
  })
  return result
}

async function copyToClipboard() {
  const text = output.textContent
  if (text.includes('Your project structure')) return

  try {
    await navigator.clipboard.writeText(text)
    const originalText = copyBtn.textContent
    copyBtn.textContent = 'Copied!'
    setTimeout(() => (copyBtn.textContent = originalText), 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
    alert('Error copying to clipboard.')
  }
}
