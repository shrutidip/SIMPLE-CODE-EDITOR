import React from 'react';

interface LanguageSelectorProps {
  language: string;
  languageOptions: { [key: string]: string };
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, languageOptions, onChange }) => {
  return (
    <label>
      Language:
      <select value={language} onChange={onChange}>
        {Object.keys(languageOptions).map((lang) => (
          <option key={lang} value={lang}>
            {languageOptions[lang]}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;
