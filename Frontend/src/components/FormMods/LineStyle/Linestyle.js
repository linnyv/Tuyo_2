import React from 'react';
import "../LineStyle/Linestyle.css";

const LineStyleSelector = ({ lineStyle, setLineStyle }) => {
  return (
    <div>
      <label htmlFor="lineStyle">Line Style:</label>
      <select
        id="lineStyle"
        value={lineStyle}
        onChange={(e) => setLineStyle(e.target.value)}
      >
        <option value="">Select a line style</option>
        <option value="dotted-line">Dotted Line</option>
        <option value="college-rule">College Rule</option>
        <option value="graph-lines">Graph Lines</option>
      </select>
    </div>
  );
};

export default LineStyleSelector;