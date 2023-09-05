import React from 'react';
import Header from './header';
import SearchSection from './searchSection';
import WeatherForecast from './WeatherForecast';
import PopUp from './PopUp';
import FutureWeather from './FutureWeather';
import './weather.css';
function App() {
  return (
    <div>
      <Header />
      <SearchSection />
      <WeatherForecast />
      <PopUp />
      <FutureWeather />
    </div>
  );
}
export default App;

