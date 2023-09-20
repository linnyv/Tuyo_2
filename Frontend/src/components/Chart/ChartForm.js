import React, { useState } from 'react';
import axios from 'axios';
import "../FormMods/Font";
import "../FormMods/FontColor";
import "../FormMods/FontSize";
import "../FormMods/LineStyle/Linestyle";
import "../FormMods/SaveOption/SaveOptions";


const ChartForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    course: '',
    date: '',
    columns: [],
    rows: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddColumn = () => {
    setFormData({
      ...formData,
      columns: [...formData.columns, ''],
    });
  };

  const handleDeleteColumn = (index) => {
    const updatedColumns = [...formData.columns];
    updatedColumns.splice(index, 1); 
    setFormData({
      ...formData,
      columns: updatedColumns,
    });
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      rows: [...formData.rows, ''],
    });
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...formData.rows];
    updatedRows.splice(index, 1);
    setFormData({
      ...formData,
      rows: updatedRows,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/chartnotas', formData);
      console.log(response.data);

      setFormData({
        topic: '',
        course: '',
        date: '',
        columns: [],
        rows: [],
      });
    } catch (error) {
      console.error(error.response.data); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Topic:</label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Columns:</label>
        {formData.columns.map((column, index) => (
          <div key={index}>
            <input
              type="text"
              value={column}
              onChange={(e) => {
                const updatedColumns = [...formData.columns];
                updatedColumns[index] = e.target.value;
                setFormData({
                  ...formData,
                  columns: updatedColumns,
                });
              }}
            />
            <button type="button" onClick={() => handleDeleteColumn(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddColumn}>
          Add Column
        </button>
      </div>
      <div>
        <label>Rows:</label>
        {formData.rows.map((row, index) => (
          <div key={index}>
            <input
              type="text"
              value={row}
              onChange={(e) => {
                const updatedRows = [...formData.rows];
                updatedRows[index] = e.target.value;
                setFormData({
                  ...formData,
                  rows: updatedRows,
                });
              }}
            />
            <button type="button" onClick={() => handleDeleteRow(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddRow}>
          Add Row
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ChartForm;