import React from 'react';
import './weather.css';
import clear from './weather-icons/clear.svg';
function WeatherForecast() {
    return (
        <section id="weather-forecast">
            {
                <div className="city-forecast">
                    <div className="result-city">
                        <h2>Result for city</h2>
                        <button> </button>
                    </div>
                    <div className="forecast-details">
                        <p><span className="date">September 5, 2023</span></p>
                        <p><span className="condition">Sunny</span></p>
                        <div className="current-weather">
                            <img src={clear} alt="icon-condition" />
                            <p className="current-temperature">25°C</p>
                        </div>
                        <div id="properties">
                            <span className="temperature">Temperature</span>
                            <span className="precipitation">Precipitation</span>
                            <span className="wind">Wind</span>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}

export default WeatherForecast;
