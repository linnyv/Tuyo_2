import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GPAChart from '../components/GPA/GPAChartSetup';
import "../components/FormMods/LineStyle/Linestyle";
import "../components/FormMods/SaveOption/SaveOptions";
import "../components/FormMods/Font";
import "../components/FormMods/FontColor";
import "../components/FormMods/FontSize";

const GPATrackerForm = () => {
  const [semesterQuarter, setSemesterQuarter] = useState('');
  const [gpa, setGpa] = useState('');
  const [year, setYear] = useState('');
  const [period, setPeriod] = useState('');
  const [chartData, setChartData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/gpatrackers');
      const gpaTrackers = response.data;

      const updatedChartData = {
        labels: gpaTrackers.map((tracker) => {
          const { semester_quarter, year, period } = tracker;
          return `${semester_quarter} ${year} ${period}`;
        }),
        datasets: [
          {
            label: 'GPA',
            data: gpaTrackers.map((tracker) => tracker.gpa),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      };

      setChartData(updatedChartData);
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
      await axios.post('/api/gpatrackers', {
        semester_quarter: semesterQuarter,
        gpa,
        year,
        period,
      });
      setSemesterQuarter('');
      setGpa('');
      setYear('');
      setPeriod('');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="semesterQuarter">Semester Quarter:</label>
          <input
            type="text"
            id="semesterQuarter"
            value={semesterQuarter}
            onChange={(e) => setSemesterQuarter(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="gpa">GPA:</label>
          <input
            type="text"
            id="gpa"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="period">Period:</label>
          <input
            type="text"
            id="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <GPAChart chartData={chartData} />
    </div>
  );
};

export default GPATrackerForm;