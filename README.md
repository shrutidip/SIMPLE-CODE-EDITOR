# Simple Code Editor with React and Prism.js

This project is a simple code editor built with React and Prism.js for syntax highlighting.

## Usage

**Description:**

This project allows users to write and execute JavaScript code snippets using a code editor with syntax highlighting.

**Features:**

- Syntax highlighting for JavaScript, JSX, Python, and more using Prism.js.
- Theme selection (light and dark) for the code editor.
- Live preview of executed JavaScript code with output displayed below the editor.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/simple-code-editor.git
   cd simple-code-editor
   
2. **Install dependencies:**
npm install

3. **Start the application:**
npm start

4. **Getting Started:**
1. Open the project in your code editor.
2. Modify `src/components/CodeEditor.tsx` or other relevant files to customize the code editor.
3. Run `npm start` to start the development server and view the project in your web browser.

**Sample Input:**
Enter JavaScript code in the code editor and click "Run Code" to execute it. See the output displayed below the editor.

**Sample Output:**
Open the project in your web browser:
Open http://localhost:3000 to view it in the browser.

# Project Directory Structure
node_modules/: Dependencies installed by npm.
public/: Public assets and index.html.
src/: Source code directory.
components/: React components.
CodeEditor.tsx: Main code editor component.
CodeEditor.css: Styles for CodeEditor component.
LanguageSelector.tsx: Component for selecting programming language.
ThemeSelector.tsx: Component for selecting editor theme.
CodeRunner.tsx: Component for executing code.
CodeDisplay.tsx: Component for displaying code output.
App.css: Global styles for the application.
App.tsx: Main application component.
index.css: Global styles for index.html.
index.tsx: Entry point for the application.
react-app-env.d.ts: TypeScript definitions for React.
reportWebVitals.ts: Utility for reporting performance metrics.
package.json: Project configuration and dependencies.
tsconfig.json: TypeScript configuration.
README.md: This file, project documentation.
