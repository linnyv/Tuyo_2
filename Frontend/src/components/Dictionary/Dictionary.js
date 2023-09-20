// DictionaryComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const apiKey = process.env.OxfordDictionaries_llave;
const language = 'en';

const DictionaryComponent = () => {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [pronunciations, setPronunciations] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [antonyms, setAntonyms] = useState([]);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://joughtred-oxford-dictionaries-v1.p.rapidapi.com/entries/${language}/${word.toLowerCase()}`,
        {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'joughtred-oxford-dictionaries-v1.p.rapidapi.com',
          },
        }
      );

      const data = response.data;

      const wordDefinitions = data.results[0].lexicalEntries[0].entries[0].senses.map(
        (sense) => sense.definitions[0]
      );
      setDefinitions(wordDefinitions);

      const wordPronunciations = data.results[0].lexicalEntries[0].entries[0].pronunciations.map(
        (pronunciation) => pronunciation.phoneticSpelling
      );
      setPronunciations(wordPronunciations);

      const wordSynonyms = data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms.map(
        (synonym) => synonym.text
      );
      setSynonyms(wordSynonyms);

      const wordAntonyms = data.results[0].lexicalEntries[0].entries[0].senses[0].antonyms.map(
        (antonym) => antonym.text
      );
      setAntonyms(wordAntonyms);

      setError('');
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={fetchData}>Search</button>

      {error && <p>Error: {error}</p>}

      <h2>Definitions:</h2>
      <ul>
        {definitions.map((definition, index) => (
          <li key={index}>{definition}</li>
        ))}
      </ul>

      <h2>Pronunciations:</h2>
      <ul>
        {pronunciations.map((pronunciation, index) => (
          <li key={index}>{pronunciation}</li>
        ))}
      </ul>

      <h2>Synonyms:</h2>
      <ul>
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>

      <h2>Antonyms:</h2>
      <ul>
        {antonyms.map((antonym, index) => (
          <li key={index}>{antonym}</li>
        ))}
      </ul>
    </div>
  );
};

export default DictionaryComponent;