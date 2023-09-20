import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setText(value);

    // Call the TextGears API for spelling and grammar check
    checkSpellingAndGrammar(value);
  };

  const checkSpellingAndGrammar = async (text) => {
    const apiKey = process.env.TestGears_llave;

    try {
      const grammarResponse = await axios.get('https://textgears-textgears-v1.p.rapidapi.com/grammar', {
        params: {
          text: text,
        },
        headers: {
          'x-rapidapi-host': 'textgears-textgears-v1.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      });

      const spellingResponse = await axios.get('https://textgears-textgears-v1.p.rapidapi.com/spelling', {
        params: {
          text: text,
        },
        headers: {
          'x-rapidapi-host': 'textgears-textgears-v1.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      });

      console.log('Grammar Check:', grammarResponse.data);
      console.log('Spelling Check:', spellingResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <textarea value={text} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default FormComponent;