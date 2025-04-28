//https://api.openweathermap.org/data/2.5/weather?lat=44&lon=10&appid=bcd8d4f55126e2e478ac4efd6462ead2&lang=kr&units=metric

import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
export const getCurrentData = async () => {
  const res = await axios.get(
    `${BASE_URL}?lat=44&lon=10&appid=${API_KEY}&lang=kr&units=metric`
  );
  console.log(res);
  return res.data;
};
