import React from 'react';

const FontSizeSelector = ({ fontSize, setFontSize }) => {
  const handleFontSizeChange = (e) => {
    const value = e.target.value;
    // Validate the entered font size
    if (value === '' || (parseInt(value) >= 8 && parseInt(value) <= 24)) {
      setFontSize(value);
    }
  };

  return (
    <div>
      <label htmlFor="fontSize">Font Size:</label>
      <input
        type="text"
        id="fontSize"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
};

export default FontSizeSelector;