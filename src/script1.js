// Function to initialize and display the map
function initMap(coordinates) {
    const mapContainer = document.getElementById('map');

    // Initialize the map
    const map = L.map(mapContainer).setView(coordinates, 13); // Set initial coordinates and zoom level

    // Add a tile layer (you can replace this with your desired map provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// Function to handle form submission and map display
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the city name entered by the user
    const cityNameInput = document.getElementById('city-name');
    const cityName = cityNameInput.value;

    // Use a geocoding service to fetch the coordinates for the entered city
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoiYmF0b3VsLWdob3NuIiwiYSI6ImNsbTdwd2xwZDAzamgzZHBoZHY2NXdrdDAifQ.MXHlDkjc8HhQJPWU3qdGzw`)
        .then(response => response.json())
        .then(data => {
            if (data.features.length > 0) {
                // Get the coordinates (longitude and latitude) from the geocoding response
                const coordinates = data.features[0].center;
                // Initialize and display the map with the coordinates
                initMap(coordinates);

                // Show the pop-up by setting its display property to "block"
                popUpContainer.style.display = "block";
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(error => {
            console.error('Error fetching city coordinates:', error);
        });
}

// Add an event listener to the form for submission when the document is ready
document.addEventListener("DOMContentLoaded", function () {
    const citySearchForm = document.getElementById('city-search-form');
    const popUpContainer = document.getElementById('pop-up-container');
    const popUpButton = document.getElementById('pop-up');
    const closePopUpButton = document.querySelector('.close-button');

    // Add an event listener to the form for submission
    citySearchForm.addEventListener("submit", handleFormSubmission);

    // Add a click event listener to the pop-up button
    popUpButton.addEventListener("click", () => {
        // Show the pop-up by setting its display property to "block"
        popUpContainer.style.display = "block";
    });

    // Add a click event listener to the close button to hide the pop-up
    closePopUpButton.addEventListener("click", () => {
        // Hide the pop-up by setting its display property to "none"
        popUpContainer.style.display = "none";
    });
});
