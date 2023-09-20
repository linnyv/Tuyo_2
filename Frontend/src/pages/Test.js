import React, { useState } from 'react';
import axios from 'axios';

const TestTrackerForm = () => {
  const [score, setScore] = useState('');
  const [year, setYear] = useState('');
  const [test, setTest] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/test-trackers', {
        score,
        year,
        test,
      });
      console.log(response.data); // Handle success case
    } catch (error) {
      console.error(error); // Handle error case
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="score">Score:</label>
        <input
          type="text"
          id="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
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
        <label htmlFor="test">Test:</label>
        <select id="test" value={test} onChange={(e) => setTest(e.target.value)}>
          <option value="">Select a test</option>
          <option value="DAT: Dental Admissions Test">DAT: Dental Admissions Test</option>
          <option value="GMAT: Graduate Management Admission Test">
            GMAT: Graduate Management Admission Test
          </option>
          <option value="GRE: Graduate Record Examination">GRE: Graduate Record Examination</option>
          <option value="LSAT: Law School Admission Test">LSAT: Law School Admission Test</option>
          <option value="MAT: Miller Analogies Test">MAT: Miller Analogies Test</option>
          <option value="MCAT:Medical College Admissions Test">
            MCAT:Medical College Admissions Test
          </option>
          <option value="OAT: Optometry Admission Test">OAT: Optometry Admission Test</option>
          <option value="PCAT: Pharmacy College Admission Test">
            PCAT: Pharmacy College Admission Test
          </option>
          <option value="CBEST: California Basic Educational Skills Test">
            CBEST: California Basic Educational Skills Test
          </option>
          <option value="WTMA: Wiesen Test of Mechanical Aptitude">
            WTMA: Wiesen Test of Mechanical Aptitude
          </option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestTrackerForm;