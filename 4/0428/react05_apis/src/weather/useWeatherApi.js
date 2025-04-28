//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const testUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d7bf29a51b222bb8ddfd1b62b05c21f4";

import axios from "axios";

export const getCurrentData = async () => {
  const res = await axios.get(testUrl);
  console.log(res);
  return res.data;
};
