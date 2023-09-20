import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const GradeChart = () => {
  const [gradeData, setGradeData] = useState({});

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <div>
      <h2>Grade Chart</h2>
      <Bar data={gradeData} />
    </div>
  );
};

export default GradeChart;