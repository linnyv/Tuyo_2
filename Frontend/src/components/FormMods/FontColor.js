import React from 'react';

const FontColorSelector = ({ fontColor, setFontColor }) => {
  return (
    <div>
      <label htmlFor="fontColor">Font Color:</label>
      <input
        type="color"
        id="fontColor"
        value={fontColor}
        onChange={(e) => setFontColor(e.target.value)}
      />
    </div>
  );
};

export default FontColorSelector;