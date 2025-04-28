import React, { useEffect, useState } from "react";
import css from "./WeatherPage.module.css";
import { getCurrentData } from "./useWeatherApi";
import { useSearchParams } from "react-router-dom";

const WeatherPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city"); //버튼을 눌렀을때 city를 변경
  const [weatherData, setWeatherData] = useState(null);
  const cityButtons = [
    { id: "현재위치", label: "현재위치" },
    { id: "seoul", label: "서울" },
    { id: "japan", label: "일본" },
    { id: "paris", label: "파리" },
  ];
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getCurrentData();
        console.log("날씨 데이터", data);
        setWeatherData(data);
      } catch (error) {
        console.error("날씨 데이터 가져오기 실패", error);
      }
    };
    fetchWeatherData();
  }, []);
  console.log("날시데이터", weatherData?.cod);
  return (
    <main className={css.main}>
      <h2>weatherPage</h2>
      <div className={css.weatherInfo}>
        <p className={css.location}>
          {/* ?붙이는 이유는 데이터를 가져올때까지 기다리는정도로 알아두면됨  */}
          {weatherData?.sys.country} / {weatherData?.name}{" "}
        </p>
        <p className={css.temperature}>{weatherData?.main.temp} &#8451;</p>
        <p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
            alt=""
          />
        </p>
      </div>
      <div className={css.btnList}>
        {cityButtons.map((button) => (
          <button>{button.label}</button>
        ))}
      </div>
    </main>
  );
};

export default WeatherPage;
