import React, { useState } from 'react';
import axios from 'axios';
import "../FormMods/Font";
import "../FormMods/FontColor";
import "../FormMods/FontSize";
import "../FormMods/LineStyle/Linestyle";
import "../FormMods/SaveOption/SaveOptions";

const CornellForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    course: '',
    date: '',
    questionsYcues: [''], 
    notes: [''], 
    summary: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuestionsYcuesChange = (e, index) => {
    const updatedQuestionsYcues = [...formData.questionsYcues];
    updatedQuestionsYcues[index] = e.target.value;
    setFormData({
      ...formData,
      questionsYcues: updatedQuestionsYcues,
    });
  };

  const handleNotesChange = (e, index) => {
    const updatedNotes = [...formData.notes];
    updatedNotes[index] = e.target.value;
    setFormData({
      ...formData,
      notes: updatedNotes,
    });
  };

  const addQuestionsYcuesField = () => {
    setFormData({
      ...formData,
      questionsYcues: [...formData.questionsYcues, ''],
    });
  };

  const removeQuestionsYcuesField = (index) => {
    const updatedQuestionsYcues = [...formData.questionsYcues];
    updatedQuestionsYcues.splice(index, 1);
    setFormData({
      ...formData,
      questionsYcues: updatedQuestionsYcues,
    });
  };

  const addNotesField = () => {
    setFormData({
      ...formData,
      notes: [...formData.notes, ''],
    });
  };

  const removeNotesField = (index) => {
    const updatedNotes = [...formData.notes];
    updatedNotes.splice(index, 1);
    setFormData({
      ...formData,
      notes: updatedNotes,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cornellnotas', formData);
      console.log(response.data); 
      
      setFormData({
        topic: '',
        course: '',
        date: '',
        questionsYcues: [''],
        notes: [''],
        summary: '',
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
        <label>Questions and Cues:</label>
        {formData.questionsYcues.map((question, index) => (
          <div key={index}>
            <input
              type="text"
              value={question}
              onChange={(e) => handleQuestionsYcuesChange(e, index)}
            />
            <button type="button" onClick={() => removeQuestionsYcuesField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addQuestionsYcuesField}>
          Add Questions and Cues
        </button>
      </div>
      <div>
        <label>Notes:</label>
        {formData.notes.map((note, index) => (
          <div key={index}>
            <input
              type="text"
              value={note}
              onChange={(e) => handleNotesChange(e, index)}
            />
            <button type="button" onClick={() => removeNotesField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addNotesField}>
          Add Notes
        </button>
      </div>
      <div>
        <label>Summary:</label>
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CornellForm;