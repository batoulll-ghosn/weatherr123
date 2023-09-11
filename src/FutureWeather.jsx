import React from "react";
import cloudy from "./weather-icons/cloudy.svg";
import clear from "./weather-icons/clear.svg";
import rain from "./weather-icons/rain.svg";
import snow from "./weather-icons/snow.svg";

const FutureWeather = ({ forecastData }) => {
  return (
    <section id="future-weather">
      <hr className="forecast-line" />
      <div className="future-hours">
        {forecastData.map((forecast, index) => {
          if (index < 7) {
            return (
              <div key={index} className="weather-slot">
                <p className="next-hours">
                  {new Date(forecast.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="next-temperature">
                  {Math.round(forecast.main.temp - 273.15)}°C
                </p>
                <img
                  alt="icon-condition"
                  className="icon-condition"
                  src={getWeatherIcon(forecast.weather[0].main)}
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

function getWeatherIcon(weatherMain) {
  switch (weatherMain) {
    case "Clouds":
      return cloudy;
    case "Clear":
      return clear;
    case "Rain":
      return rain;
    default:
      return cloudy;
  }
}

export default FutureWeather;