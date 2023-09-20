import React, { useState } from 'react';
import axios from 'axios';

const CreateSentenceForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    course: '',
    date: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API endpoint using Axios
      const response = await axios.post('/api/sentence-notas', formData);
      console.log(response.data); // Handle the successful response as needed

      // Reset the form data
      setFormData({
        topic: '',
        course: '',
        date: '',
        notes: '',
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
        <label>Notes:</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateSentenceForm;