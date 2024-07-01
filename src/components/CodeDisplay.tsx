// src/components/CodeDisplay.tsx
import React from 'react';

interface CodeDisplayProps {
  output: string | null;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ output }) => {
  return (
    <div style={{ backgroundColor: '#fff', marginTop: '20px', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', flex: 1 }}>
      <h2 style={{ color: '#333' }}>Output:</h2>
      <div style={{ color: '#333', whiteSpace: 'pre-wrap' }}>{output}</div>
    </div>
  );
};

export default CodeDisplay;
