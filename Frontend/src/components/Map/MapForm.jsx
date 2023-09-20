import React, { useState } from 'react';
import axios from 'axios';

const MapNotaForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    course: '',
    date: '',
    parentId: [''],
    cipotesId: [''],
  });

  const handleInputChange = (e, index, field) => {
    const updatedValues = [...formData[field]];
    updatedValues[index] = e.target.value;

    setFormData({
      ...formData,
      [field]: updatedValues,
    });
  };

  const handleAddField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ''],
    });
  };

  const handleRemoveField = (index, field) => {
    const updatedValues = [...formData[field]];
    updatedValues.splice(index, 1);

    setFormData({
      ...formData,
      [field]: updatedValues,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API endpoint using Axios
      const response = await axios.post('/api/map-notas', formData);
      console.log(response.data); // Handle the successful response as needed
    } catch (error) {
      console.error('Error:', error); // Handle any network or other errors
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
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div>
        <label>Parent IDs:</label>
        {formData.parentId.map((parentId, index) => (
          <div key={index}>
            <input
              type="text"
              value={parentId}
              onChange={(e) => handleInputChange(e, index, 'parentId')}
            />
            <button type="button" onClick={() => handleRemoveField(index, 'parentId')}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddField('parentId')}>
          Add Parent ID
        </button>
      </div>
      <div>
        <label>Cipotes IDs:</label>
        {formData.cipotesId.map((cipotesId, index) => (
          <div key={index}>
            <input
              type="text"
              value={cipotesId}
              onChange={(e) => handleInputChange(e, index, 'cipotesId')}
            />
            <button type="button" onClick={() => handleRemoveField(index, 'cipotesId')}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddField('cipotesId')}>
          Add Cipotes ID
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MapNotaForm;