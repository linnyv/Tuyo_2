import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const GPAChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/gpatrackers');
        const gpaTrackers = response.data;

        const gpaData = {
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

        setChartData(gpaData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>GPA Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default GPAChart;