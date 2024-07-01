import React from 'react';

interface ThemeSelectorProps {
  theme: 'light' | 'dark';
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ theme, onChange }) => {
  return (
    <label>
      Theme:
      <select value={theme} onChange={onChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
};

export default ThemeSelector;
