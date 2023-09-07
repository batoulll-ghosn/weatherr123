document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("city-search-form");
    const cityNameInput = document.getElementById("city-name");
    const humidity = document.querySelector('.humidity');
    const currentTemperatureElement = document.querySelector('.current-temperature');

    console.log(humidity);

        humidity.addEventListener('click', function (e) {
            e.preventDefault();
            const cityName = cityNameInput.value;
            const apiKey = "5b6af831ac48b7b26262ac5fe047fbd4";
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    const humidityValue = data.list[0].main.humidity;
                    console.log(data);
                    console.log(humidityValue);
                    currentTemperatureElement.textContent = humidityValue + "%";
                });
        });
    });