import React, { useState, useEffect } from 'react';

const FontPicker = ({ onFontChange }) => {
  const [fonts, setFonts] = useState([]);
  const [selectedFont, setSelectedFont] = useState('');

  useEffect(() => {
    fetch('/api/fonts')
      .then((response) => response.json())
      .then((data) => {
        setFonts(data);
      })
      .catch((error) => {
        console.log('Error fetching fonts:', error);
      });
  }, []);

  const handleFontChange = (event) => {
    const font = event.target.value;
    setSelectedFont(font);
    onFontChange(font);
  };

  return (
    <div>
      <select onChange={handleFontChange}>
        <option value="">Select a font</option>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
      {selectedFont && (
        <p style={{ fontFamily: selectedFont }}>
          This is a preview of the selected font.
        </p>
      )}
    </div>
  );
};

export default FontPicker;