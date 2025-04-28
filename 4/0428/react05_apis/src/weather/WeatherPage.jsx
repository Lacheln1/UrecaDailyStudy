import React, { useEffect, useState } from "react";
import css from "./WeatherPage.module.css";
import { getCurrentData } from "./useWeatherApi";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
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
          {weatherData?.sys.country} / {weatherData?.name}{" "}
        </p>
        <p className={css.temperature}>
          {weatherData?.main.temp} &#8451; /{" "}
          {weatherData?.weather[0].description}
        </p>
      </div>
      <div className={css.btnList}>
        <button>리스트</button>
        <button>리스트</button>
        <button>리스트</button>
        <button>리스트</button>
      </div>
    </main>
  );
};

export default WeatherPage;
