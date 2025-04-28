import React, { useEffect } from "react";
import css from "./WeatherPage.module.css";
import { getCurrentData } from "./useWeatherApi";

const WeatherPage = () => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getCurrentData();
        console.log("날씨 데이터", data);
      } catch (error) {
        console.error("날씨 데이터 가져오기 실패", error);
      }
    };
    fetchWeatherData();
  }, []);
  return (
    <main className={css.main}>
      <h2>weatherPage</h2>
      <div className={css.weatherInfo}>
        <p className={css.location}>국가 / 도시 </p>
        <p className={css.temperature}>온도 / icon</p>
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
