import React, { useState } from 'react'; // Import useState here
import cloudy from './weather-icons/cloudy.svg';
import clear from './weather-icons/clear.svg';
import rain from './weather-icons/rain.svg';
import snow from './weather-icons/snow.svg';

const WeatherForecast = ({ currentWeather, cityName }) => {
const [humidityValue, setHumidity] = useState(null);
const [windValue, setWind] = useState(null);
const [currentTemperature, setCurrentTemperature] = useState('');
const [value, setValue] = useState(Math.round(currentWeather.main.temp - 273.15)+ " °C");
const apiKey = "5b6af831ac48b7b26262ac5fe047fbd4";
const handleFormSubmit = (e)=>{
    e.preventDefault();
    fetchHumidity();
    fetchWind();
};
const getTemperature = () => {
    setValue(Math.round(currentWeather.main.temp - 273.15)+ " °C")
}

const fetchHumidity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const humidityValue = data && data.list[0].main.humidity;
                    //currentTemperature.textContent = humidityValue + "%";
                    setValue(humidityValue + " %");
                });
};

const fetchWind = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    .then((response) => response.json())
                .then((data) => {
                    const windValue = (data.list[0].wind.speed)*10;
                    setValue(windValue + " km/h");
                });
}
const getWeatherIcon = (weatherMain)=> {
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
    return (
    <div className="forecast-details">
        <p><span className="date">{new Date(currentWeather.dt * 1000).toDateString()}</span></p>
        <div className="current-weather">
            <img alt="icon-condition" src={getWeatherIcon(currentWeather.weather[0].main)} />
                <p className="current-temperature">{value}</p>
        </div>
        <div id="properties">
            <span className="temperature" onClick={getTemperature}>Temperature</span>
            <span className="humidity" onClick={fetchHumidity}>Humidity</span>
            <span className="wind" onClick={fetchWind}>Wind</span>
        </div>
    </div>
);
};

export default WeatherForecast;
