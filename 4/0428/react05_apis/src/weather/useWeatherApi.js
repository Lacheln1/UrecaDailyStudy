//https://api.openweathermap.org/data/2.5/weather?lat=44&lon=10&appid=bcd8d4f55126e2e478ac4efd6462ead2&lang=kr&units=metric
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

//좌표로 날씨정보 가져오기
export const getWeatherByCurrentLocation = async (lat, lon) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//현재 위치 날씨 정보 가져오기
//현재 좌표 가져오기
//getWeatherByCurrentLocation(위도,경도) 할 예정
export const getCurrentData = async () => {
  const res = await axios.get(
    `${BASE_URL}?lat=44&lon=10&appid=${API_KEY}&lang=kr&units=metric`
  );
  console.log(res.data);
  return res.data;
};
