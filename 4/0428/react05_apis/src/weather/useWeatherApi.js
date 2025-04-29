//https://api.openweathermap.org/data/2.5/weather?lat=44&lon=10&appid=bcd8d4f55126e2e478ac4efd6462ead2&lang=kr&units=metric
import { useQuery } from "@tanstack/react-query";
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
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await getWeatherByCurrentLocation(latitude, longitude);
          resolve(res);
        } catch (error) {
          console.log("좌표로 날씨정보 가져오기 실패", error);
        }
      },
      (err) => {
        console.log("좌표가져오기실패", err);
        reject(err);
      }
    );
  });
};

//도시명으로 날씨정보 가져오기
export const getCountryData = async (city) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&lang=kr&units=metric`
    );
    return res.data;
  } catch (error) {
    console.log("좌표로 날씨정보 가져오기 실패", error);
  }
};

//리액트 쿼리로 데이터 가져오는 형태 만들어보기
export const useWeather = (city) => {
  return useQuery({
    queryKey: ["weather", city], //데이터를 관리 할 고유한 id
    //함수
    queryFn: async () => {
      try {
        const data = city ? await getCountryData(city) : await getCurrentData();
        return data;
      } catch (error) {
        console.log("", error);
      }
    },
    //데이터가 retry하지 않는 시간 (예를 들어 영화 상영 정보는 1주 혹은 하루에 한번만 업데이트 해도 되지많 주식정보와 같은건 실시간으로 업데이트해야함)
    staleTime: 1000 * 60 * 5,
    //
    retry: 1,
  });
};
