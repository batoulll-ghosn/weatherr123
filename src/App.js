import React, { useState } from 'react';
import WeatherForecast from './WeatherForecast';
import FutureWeather from './FutureWeather';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [cityName2, setCityName2] = useState('');
  let cityName = '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    cityName = e.target[0].value;
    setCityName2(cityName);
    const apiKey = '5b6af831ac48b7b26262ac5fe047fbd4';

    try {
      // Fetch current weather and forecast data together as this same API provides both (optimization of performance)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
      );
      const data = await response.json();
      setCurrentWeather(data);
      setForecastData(data.list);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    let result = document.getElementById('result');
    result.innerHTML = cityName;
    result.style.fontSize = "40px";
    result.style.textTransform = "capitalize";
  };

  return (
    <div>
      <header>
        <h1>Tech Chuckle-Trek</h1>
      </header>

      <section id="search-section">
        <form id="city-search-form" className="search-container" onSubmit={handleSubmit}>
          <input type="text" id="cityName" placeholder="Type your city here" />
          <button type="submit" id="search-button">Search</button>
        </form>
      </section>

      <section id="weather-forecast">
        <div className="city-forecast">
          <div className="result-city">
            <h2 id="wanted-script">Results for <span id="result"></span></h2>
            <button id="pop-up"> </button>
          </div>
          <div>
            {currentWeather && <WeatherForecast cityName={cityName2} currentWeather={currentWeather} />}</div>
        </div>
      </section>

      {forecastData.length > 0 && <FutureWeather forecastData={forecastData} />}
    </div>
  );
};

export default App;