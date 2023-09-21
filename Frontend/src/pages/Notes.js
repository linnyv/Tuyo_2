import React, { useState } from 'react';
import SentenceForm from '../components/Sentence/SentenceForm';
import OutlineForm from '../components/Outline/OutlineForm';
import MapForm from '../components/Map/MapForm';
import CornellForm from '../components/Cornell/CornellForm';
import ChartForm from '../components/Chart/ChartForm';

const FormSelector = () => {
  const [selectedForm, setSelectedForm] = useState('');

  const handleFormSelect = (form) => {
    setSelectedForm(form);
  };

  const renderForm = () => {
    switch (selectedForm) {
      case 'sentence':
        return <SentenceForm />;
      case 'outline':
        return <OutlineForm />;
      case 'map':
        return <MapForm />;
      case 'cornell':
        return <CornellForm />;
      case 'chart':
        return <ChartForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Select a Form:</h2>
      <select value={selectedForm} onChange={(e) => handleFormSelect(e.target.value)}>
        <option value="">Select a form</option>
        <option value="sentence">Sentence</option>
        <option value="outline">Outline</option>
        <option value="map">Map</option>
        <option value="cornell">Cornell</option>
        <option value="chart">Chart</option>
      </select>
      {renderForm()}
    </div>
  );
};

export default FormSelector;