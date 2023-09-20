import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../components/FormMods/LineStyle/Linestyle";
import "../components/FormMods/SaveOption/SaveOptions";
import "../components/FormMods/Font";
import "../components/FormMods/FontColor";
import "../components/FormMods/FontSize";

const GradeTrackerForm = () => {
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');
  const [year, setYear] = useState('');
  const [period, setPeriod] = useState('');
  const [gradeData, setGradeData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/gradetrackers');

      const gradeTrackers = response.data;

      const updatedGradeData = {
        labels: gradeTrackers.map((tracker) => {
          const { course, year, period } = tracker;
          return `${course} ${year} ${period}`;
        }),

        datasets: [
          {
            label: 'Grade',
            data: gradeTrackers.map((tracker) => tracker.grade),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      };
      setGradeData(updatedGradeData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/gradetrackers', {
        course,
        grade,
        year,
        period,
      });
      setCourse('');
      setGrade('');
      setYear('');
      setPeriod('');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="period">Period:</label>
        <select
          id="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="First Quarter">First Quarter</option>
          <option value="Second Quarter">Second Quarter</option>
          <option value="Third Quarter">Third Quarter</option>
          <option value="Fourth Quarter">Fourth Quarter</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      <GradeChart gradeData={gradeData} />
    </form>
  );
};

export default GradeTrackerForm;