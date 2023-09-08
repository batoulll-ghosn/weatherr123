document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("city-search-form");
    const cityNameInput = document.getElementById("city-name");
    const firstheader = document.getElementById("wanted-script");
    const searchButton = document.getElementById("search-button");
    const dateElement = document.querySelector(".date");
    const conditionElement = document.querySelector(".condition");
    const currentTemperatureElement = document.querySelector(".current-temperature");
    const futureWeatherElement = document.querySelector(".future-hours");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const cityName = cityNameInput.value;
        const apiKey = "5b6af831ac48b7b26262ac5fe047fbd4";

        // Make API request to OpenWeatherMap
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                // Update current weather
                const currentWeather = data.list[0];
                dateElement.textContent = new Date(currentWeather.dt * 1000).toDateString();
                currentTemperatureElement.textContent = Math.round(currentWeather.main.temp - 273.15) + "°C";

                // Set the image source based on forecast.weather[0].main
                const weatherIcon = document.querySelector(".current-weather img");
                const weatherMain = currentWeather.weather[0].main;

                switch (weatherMain) {
                    case 'Clouds':
                        weatherIcon.setAttribute('src', './weather-icons/partlycloudy.svg');
                        break;
                    case 'Clear':
                        weatherIcon.setAttribute('src', './weather-icons/clear.svg');
                        break;
                    case 'Rain':
                        weatherIcon.setAttribute('src', './weather-icons/rain.svg');
                        break;
                    default:
                        weatherIcon.setAttribute('src', './weather-icons/snow.svg');
                }

                // Update future weather every 3 hours
                futureWeatherElement.innerHTML = "";
                for (let i = 0; i < data.list.length; i += 3) { // Change the interval to 3 (every 3 hours)
                    const forecast = data.list[i];
                    const forecastTime = new Date(forecast.dt * 1000);
                    const formattedForecastTime = forecastTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                    const forecastTemperature = Math.round(forecast.main.temp - 273.15) + "°C";
                    forecastTemperature.class = "next-temperature";
                    // const forecastDescription = forecast.weather[0].description;
                    const forecastMain = forecast.weather[0].main;

                    const weatherSlot = document.createElement("div");
                    weatherSlot.classList.add("weather-slot");

                    const forecastIcon = document.createElement('img');
                    switch (forecastMain) {
                        case 'Clouds':
                            forecastIcon.setAttribute('src', 'weather-icons/cloudy.svg');
                            break;
                        case 'Clear':
                            forecastIcon.setAttribute('src', 'weather-icons/clear.svg');
                            break;
                        case 'Rain':
                            forecastIcon.setAttribute('src', 'weather-icons/rain.svg');
                            break;
                        default:
                            forecastIcon.setAttribute('src', 'weather-icons/snow.svg');
                    }

                    weatherSlot.innerHTML = `
                        <p class="next-hours">${formattedForecastTime}</p>
                        <p class="next-temperature">${forecastTemperature}</p>
                    `;
                    weatherSlot.appendChild(forecastIcon); // Append the weather icon
                    futureWeatherElement.appendChild(weatherSlot);
                }
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    });
});
