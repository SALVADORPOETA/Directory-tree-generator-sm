# Directory Tree Generator

This is an **ORIGINAL** project built with **Vanilla JavaScript, HTML5, and CSS3**. It is a specialized tool designed to visualize and document local file systems by generating a clean, structured directory tree (ASCII art). Unlike traditional tools, it operates entirely on the client side, ensuring that file metadata is processed locally without ever uploading data to a server. Its design prioritizes privacy, speed, and simplicity, making it an essential utility for developers, technical writers, and researchers who need to provide clear project context for documentation or AI-assisted development.

The application leverages the `webkitdirectory` API to read folder structures and a recursive tree-building algorithm to map nested directories. To ensure high-quality, relevant output, the logic includes a built-in **Filtering Engine** that automatically excludes "noise" such as system files, dependency artifacts (`node_modules`), and heavy cache directories (`ShaderCache`, `session`). This results in a professional-grade visualization suitable for README files, technical wikis, and architectural overviews.

## 🚀 Features

* **Zero-Server Architecture**: 100% client-side processing for total privacy.
* **Intelligent Filtering**: Automatically ignores `.git`, `node_modules`, `venv`, and browser cache folders.
* **ASCII Tree Generation**: Produces standard `├──` and `└──` connectors for universal compatibility.
* **One-Click Clipboard**: Instant export of the generated structure.
* **Professional UI**: Modern, responsive interface with a dedicated code-viewer area.
* **Performance Optimized**: Handles large project folders by processing metadata only.

## 📂 Project Structure

```text
root/
├── index.html         # Main application structure and UI layout
├── style.css          # Professional UI/UX styling and responsive design
└── script.js         # Core logic: Filtering engine and recursive tree algorithm

```

## ⚙️ Core Logic & Filtering

The engine utilizes a sophisticated filtering strategy to ensure the output remains clean and focused on the source code.

**Excluded Patterns:**

* **Version Control**: `.git`, `hooks`
* **Dependencies**: `node_modules`, `venv`, `__pycache__`
* **Environment**: `.env`, `.vscode`
* **System/Cache**: `session`, `ShaderCache`, `Default`, `GraphiteDawnCache`

This approach ensures that even complex projects like scrapers or full-stack apps are represented by their true architecture, not their temporary files.

## 🔧 Installation & Local Development

Since this is a frontend-only utility, no complex setup is required.

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/directory-tree-generator.git
cd directory-tree-generator-sm

```


2. **Run the application**
Simply open `index.html` in any modern web browser (Chrome, Edge, or Firefox).
3. **Deployment**
This project is production-ready for platforms like **Vercel**, **GitHub Pages**, or **Netlify**. Just upload the root folder.

## 📊 Data Flow

1. **Input**: User selects a folder via `webkitdirectory`.
2. **Filter**: The script iterates through the file list, discarding any path containing an entry from the `IGNORE_LIST`.
3. **Map**: A hierarchical object is built by splitting path strings.
4. **Render**: A recursive function traverses the object, appending the correct ASCII connectors based on the item's position.

## 🎯 Design Principles

* **Privacy First**: No data ever leaves the user's machine.
* **Minimalism**: No external libraries or heavy frameworks.
* **Scannability**: Output is formatted for immediate readability.
* **Extensibility**: Easy to add new filters or styling themes.

## 💡 Use Cases

* **Documentation**: Generating "Project Structure" sections for READMEs.
* **AI Context**: Providing a clean map of a codebase to LLMs.
* **Project Auditing**: Quick visualization of complex nested architectures.
* **Development**: Verifying build outputs and folder organization.

## 👨🏽‍💻 Author

**Salvador Martínez** *Full-Stack Developer*

[GitHub](https://github.com/SALVADORPOETA) | [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/YOUR_LINKEDIN)

## ⚖️ License

© 2026 Salvador Martinez. All rights reserved.
This is a completely original project. For any use, reproduction, or distribution inquiries, please contact the author.

*Made by Salvador Martinez*

