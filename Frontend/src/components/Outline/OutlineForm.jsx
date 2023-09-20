import React, { useState } from 'react';
import axios from 'axios';

const OutlineForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    course: '',
    date: '',
    padreId: [''],
    cipotesId: [''],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCipotesId = () => {
    setFormData({
      ...formData,
      cipotesId: [...formData.cipotesId, ''],
    });
  };

  const handleRemoveCipotesId = (index) => {
    const updatedCipotesId = [...formData.cipotesId];
    updatedCipotesId.splice(index, 1);
    setFormData({
      ...formData,
      cipotesId: updatedCipotesId,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API endpoint using Axios
      const response = await axios.post('/api/outline-notas', formData);
      console.log(response.data); // Handle the successful response as needed

      // Reset the form data
      setFormData({
        topic: '',
        course: '',
        date: '',
        padreId: '',
        cipotesId: [],
      });
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
        <label>Padre ID:</label>
        <input
          type="text"
          name="padreId"
          value={formData.padreId}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Cipotes IDs:</label>
        {formData.cipotesId.map((cipotesId, index) => (
          <div key={index}>
            <input
              type="text"
              value={cipotesId}
              onChange={(e) => {
                const updatedCipotesId = [...formData.cipotesId];
                updatedCipotesId[index] = e.target.value;
                setFormData({
                  ...formData,
                  cipotesId: updatedCipotesId,
                });
              }}
            />
            <button type="button" onClick={() => handleRemoveCipotesId(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddCipotesId}>
          Add Cipotes ID
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OutlineForm;