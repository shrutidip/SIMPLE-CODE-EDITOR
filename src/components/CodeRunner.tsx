import React from 'react';

interface CodeRunnerProps {
  language: string;
  code: string;
  onRun: (output: string) => void;
}

const CodeRunner: React.FC<CodeRunnerProps> = ({ language, code, onRun }) => {
  const runCode = () => {
    if (language !== 'javascript') {
      onRun('Running code is only supported for JavaScript.');
      return;
    }
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      onRun(String(result));
    } catch (error) {
      onRun(String(error));
    }
  };

  return (
    <button onClick={runCode} style={{ marginTop: '10px' }}>
      Run Code
    </button>
  );
};

export default CodeRunner;
