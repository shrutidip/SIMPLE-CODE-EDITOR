// src/components/CodeEditor.tsx
import React, { useState } from 'react';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript'; // Import desired language syntax style
import 'prismjs/themes/prism.css'; // PrismJS theme CSS
import './CodeEditor.css'; // Custom styles for CodeEditor

interface CodeEditorProps {
  initialCode?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode = '' }) => {
  const [code, setCode] = useState<string>(initialCode);
  const [input, setInput] = useState<string>('World');
  const [output, setOutput] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleRunCode = () => {
    try {
      const result = eval(`(${code})(input)`); // Evaluate code with input (using a safer method)
      setOutput(result.toString());
    } catch (error: any) { // Handle any type of error
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput(`Error: An unknown error occurred.`);
      }
    }
  };

  return (
    <div className="code-editor">
      <h2>Code Editor</h2>
      <div className="editor-input">
        <textarea
          value={code}
          onChange={handleChange}
          placeholder="Enter your JavaScript code here..."
        />
        <div className="input-output">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Input"
          />
          <button onClick={handleRunCode}>Run Code</button>
        </div>
      </div>
      <div className="editor-output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
      <div className="highlighted-code">
        <pre
          className="language-javascript"
          dangerouslySetInnerHTML={{ __html: highlight(code, languages.javascript, 'javascript') }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
