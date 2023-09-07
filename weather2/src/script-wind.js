document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("city-search-form");
    const cityNameInput = document.getElementById("city-name");
    const wind = document.querySelector('.wind');
    const currentTemperatureElement = document.querySelector('.current-temperature');

    searchForm.addEventListener("submit", function (e) {
        wind.addEventListener('click', function (e) {
            e.preventDefault();
            const cityName = cityNameInput.value;
            const apiKey = "5b6af831ac48b7b26262ac5fe047fbd4";
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    const windValue = (data.list[0].wind.speed)*10;
                    currentTemperatureElement.textContent = windValue + " km/h";
                });
        });
    });
});