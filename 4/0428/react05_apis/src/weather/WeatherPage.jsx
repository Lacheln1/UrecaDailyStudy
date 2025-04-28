import React from "react";
import css from "./WeatherPage.module.css";

const WeatherPage = () => {
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
