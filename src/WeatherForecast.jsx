import React, { useState, useEffect } from 'react';
import cloudy from './weather-icons/cloudy.svg';
import clear from './weather-icons/clear.svg';
import rain from './weather-icons/rain.svg';

const WeatherForecast = ({ currentWeather, cityName }) => {
  const [activeTab, setActiveTab] = useState('temperature');
  const [value, setValue] = useState('');

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'Clouds':
        return cloudy;
      case 'Clear':
        return clear;
      case 'Rain':
        return rain;
      default:
        return cloudy;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'temperature':
        setValue(temperatureValue);
        break;
      case 'humidity':
        setValue(humidityValue);
        break;
      case 'wind':
        setValue(windValue);
        break;
      default:
        break;
    }
  };

  let humidityValue = "";
  let windValue = "";
  let temperatureValue = "";

  useEffect(() => {
    if (currentWeather && currentWeather.list.length > 0) {
      humidityValue = currentWeather.list[0].main.humidity + " %";
      windValue = (currentWeather.list[0].wind.speed * 10) + " km/h";
      temperatureValue = Math.round(currentWeather.list[0].main.temp - 273.15) + " °C";
      if (activeTab === 'temperature') {
        setValue(temperatureValue);
      } else if (activeTab === 'humidity') {
        setValue(humidityValue);
      } else if (activeTab === 'wind') {
        setValue(windValue);
      }
    }
  }, [currentWeather, activeTab]);

  return (
    <div className="forecast-details">
      <p><span className="date">{currentWeather && new Date(currentWeather.list[0].dt * 1000).toDateString()}</span></p>
      <div className="current-weather">
        <p className="condition" style={{ textTransform: 'capitalize' }}>{currentWeather && currentWeather.list[0].weather.description}</p>
        <img alt="icon-condition" src={currentWeather && getWeatherIcon(currentWeather.list[0].weather.main)} />
        <p className="current-temperature">{value}</p>
      </div>
      <div id="properties">
        <span className={`temperature ${activeTab === 'temperature' ? 'active' : ''}`} onClick={() => handleTabClick('temperature')}>Temperature</span>
        <span className={`humidity ${activeTab === 'humidity' ? 'active' : ''}`} onClick={() => handleTabClick('humidity')}>Humidity</span>
        <span className={`wind ${activeTab === 'wind' ? 'active' : ''}`} onClick={() => handleTabClick('wind')}>Wind</span>
      </div>
    </div>
  );
};

export default WeatherForecast;