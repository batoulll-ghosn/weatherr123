import React, { useState, useEffect } from 'react';
import cloudy from './weather-icons/cloudy.svg';
import clear from './weather-icons/clear.svg';
import rain from './weather-icons/rain.svg';

const WeatherForecast = ({ currentWeather, cityName }) => {
    const [humidityValue, setHumidity] = useState(null);
    const [windValue, setWind] = useState(null);
    const [currentTemperature, setCurrentTemperature] = useState('');
    const [activeTab, setActiveTab] = useState('temperature');
    const [value, setValue] = useState('');
    const apiKey = "5b6af831ac48b7b26262ac5fe047fbd4";

    // Fetch data when the component mounts or when the cityName prop changes
    useEffect(() => {
        fetchWeatherData();
    }, [cityName]);

    const fetchWeatherData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const humidityValue = data && data.list[0].main.humidity;
                const windValue = (data.list[0].wind.speed) * 10;
                const temperatureValue = Math.round(data.list[0].main.temp - 273.15) + " °C";

                setHumidity(humidityValue + " %");
                setWind(windValue + " km/h");
                setCurrentTemperature(temperatureValue);
                setValue(temperatureValue);
            });
    };

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

    const handleTemperatureClick = () => {
        setValue(currentTemperature);
        setActiveTab('temperature');
    };

    const handleHumidityClick = () => {
        setValue(humidityValue);
        setActiveTab('humidity');
    };

    const handleWindClick = () => {
        setValue(windValue);
        setActiveTab('wind');
    };

    return (
        <div className="forecast-details">
            <p><span className="date">{new Date(currentWeather.dt * 1000).toDateString()}</span></p>
            <div className="current-weather">
                <p className="condition" style={{ textTransform: 'capitalize' }}>{currentWeather.weather[0].description}</p>
                <img alt="icon-condition" src={getWeatherIcon(currentWeather.weather[0].main)} />
                <p className="current-temperature">{value}</p>
            </div>
            <div id="properties">
                <span className={`temperature ${activeTab === 'temperature' ? 'active' : ''}`} onClick={handleTemperatureClick}>Temperature</span>
                <span className={`humidity ${activeTab === 'humidity' ? 'active' : ''}`} onClick={handleHumidityClick}>Humidity</span>
                <span className={`wind ${activeTab === 'wind' ? 'active' : ''}`} onClick={handleWindClick}>Wind</span>
            </div>
        </div>
    );
};

export default WeatherForecast;