// src/App.tsx
import React from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';

const App: React.FC = () => {
  // Initial JavaScript code to display in the editor
  const initialCode = `// Enter your JavaScript code here
function greet(name) {
  return "Hello, " + name + "!";
}`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Code Editor</h1>
      </header>
      <div className="editor-container">
        <CodeEditor initialCode={initialCode} />
      </div>
      <div className="sample-input">
        <h2>Sample Input</h2>
        <p>Enter a name below and click "Run Code" to see the greeting:</p>
        <input type="text" placeholder="Enter your name" />
      </div>
    </div>
  );
};

export default App;
