import axios from 'axios';

export const getTodosData = async () => {
  try {
    const res = await axios.get(`/api/todos`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    // throw new Error('Failed to fetch todos data')
  }
};
