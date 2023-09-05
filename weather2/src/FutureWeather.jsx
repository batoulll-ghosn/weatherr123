import React from 'react';
import './weather.css';
function FutureWeather() {
    return (
        <section id="future-weather">
            {<div>
                <hr className="forecast-line"></hr>
                <div className="future-hours">
                    <div className="weather-slot">
                        <p className="next-hours">01:00pm</p>
                        <p className="next-temperature">25°C</p>
                        <p>Sunny</p>
                    </div>
                    <div className="weather-slot">
                        <p className="next-hours">04:00pm</p>
                        <p className="next-temperature">22°C</p>
                        <p>Cloudy</p>
                    </div>
                    <div className="weather-slot">
                        <p className="next-hours">07:00pm</p>
                        <p className="next-temperature">20°C</p>
                        <p>Rainy</p>
                    </div>
                    <div className="weather-slot">
                        <p className="next-hours">11:00pm</p>
                        <p className="next-temperature">28°C</p>
                        <p>Sunny</p>
                    </div>
                    <div className="weather-slot">
                        <p className="next-hours">02:00am</p>
                        <p className="next-temperature">18°C</p>
                        <p>Foggy</p>
                    </div>
                    <div className="weather-slot">
                        <p className="next-hours">05:00am</p>
                        <p className="next-temperature">23°C</p>
                        <p>Partly Cloudy</p>
                    </div>
                </div>
            </div>}
        </section>
    );
}

export default FutureWeather;
