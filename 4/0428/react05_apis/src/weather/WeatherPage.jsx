import React, { useEffect, useState } from "react";
import css from "./WeatherPage.module.css";
import { getCountryData, getCurrentData, useWeather } from "./useWeatherApi";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";

const WeatherPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city"); //버튼을 눌렀을때 city를 변경

  const cityButtons = [
    { id: "current", label: "현재위치" },
    { id: "seoul", label: "서울" },
    { id: "japan", label: "일본" },
    { id: "paris", label: "파리" },
  ];

  const { data: weatherData, isLoading, isError } = useWeather(city);

  const handleChangeCity = (city) => {
    console.log("버튼클릭", city);
    if (city === "current") {
      setSearchParams({});
    } else {
      setSearchParams({ city });
    }
  };

  isLoading && <p>로딩중..</p>;
  isError && <p>에러</p>;
  return (
    <main className={css.main}>
      <h2>weatherPage</h2>
      <div className={css.weatherInfo}>
        <p className={css.location}>
          {/* ?붙이는 이유는 데이터를 가져올때까지 기다리는정도로 알아두면됨  */}
          {weatherData?.sys.country} / {weatherData?.name}
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
          <Button
            key={button.id}
            city={button.id}
            label={button.label}
            onClick={handleChangeCity}
          />
        ))}
      </div>
    </main>
  );
};

export default WeatherPage;
