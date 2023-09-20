import axios from 'axios';

const API_KEY = process.env.Plagly_llave;

const plaglyService = {
  checkingForPlagiarism: async (text) => {
    try {
      const response = await axios.post(
        'https://api.plagly.com/v1/check/plagiarism',
        {
          documentContent: text,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('We ran into an error when checking for plagiarism:', error);
      throw error;
    }
  },
};

export default plaglyService;