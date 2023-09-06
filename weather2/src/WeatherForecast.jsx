import React from 'react';
import cloudy from './weather-icons/cloudy.svg';
import clear from './weather-icons/clear.svg';
import rain from './weather-icons/rain.svg';
import snow from './weather-icons/snow.svg';
const WeatherForecast = ({ currentWeather }) => {
    return (
        <div className="forecast-details">
            <p><span className="date">{new Date(currentWeather.dt * 1000).toDateString()}</span></p>
            <div className="current-weather">
                <img alt="icon-condition" src={getWeatherIcon(currentWeather.weather[0].main)} />
                <p className="current-temperature">{Math.round(currentWeather.main.temp - 273.15)}°C</p>
            </div>
            <div id="properties">
                <span className="temperature"><a href="weather.html">Temperature</a></span>
                <span className="precipitation">Precipitation</span>
                <span className="wind">Wind</span>
            </div>
        </div>
    );
};

function getWeatherIcon(weatherMain) {
    switch (weatherMain) {
        case 'Clouds':
            return cloudy;
        case 'Clear':
            return clear;
        case 'Rain':
            return rain;
        default:
            return snow;
    }
}

export default WeatherForecast;
