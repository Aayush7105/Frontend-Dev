// Hardcoded coordinates for cities
const CITY_COORDS = {
  london: { name: "London", lat: 51.5074, lon: 0.1278 },
  newyork: { name: "New York", lat: 40.7128, lon: -74.006 },
  delhi: { name: "Delhi", lat: 28.6139, lon: 77.209 },
};

document.addEventListener("DOMContentLoaded", function () {
  const selectEl = document.getElementById("city-select");
  const buttonEl = document.getElementById("get-weather-btn");
  const container = document.getElementById("weather-container");

  buttonEl.addEventListener("click", function () {
    const selectedKey = selectEl.value;

    // Clear previous result
    clearContainer(container);

    if (!selectedKey) {
      showMessage(container, "Please select a city first.");
      return;
    }

    const city = CITY_COORDS[selectedKey];

    // Show loading message
    showMessage(container, "Loading weather data...");

    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}` +
      `&longitude=${city.lon}&current_weather=true`;

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        if (!data.current_weather) {
          throw new Error("Weather data not available.");
        }

        // Clear loading message and render card
        clearContainer(container);
        renderWeatherCard(container, city.name, data.current_weather);
      })
      .catch(function () {
        clearContainer(container);
        showMessage(
          container,
          "Sorry, could not fetch weather data. Please try again."
        );
      });
  });
});

// Remove all children without using innerHTML for generation
function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function showMessage(container, text) {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = text;
  container.appendChild(msg);
}

function renderWeatherCard(container, cityName, currentWeather) {
  const card = document.createElement("div");
  card.className = "weather-card";

  const cityTitle = document.createElement("div");
  cityTitle.className = "weather-city";
  cityTitle.textContent = cityName;

  const tempLine = document.createElement("p");
  tempLine.className = "weather-line";
  tempLine.textContent = "Temperature: " + currentWeather.temperature + " °C";

  const windLine = document.createElement("p");
  windLine.className = "weather-line";
  windLine.textContent = "Wind Speed: " + currentWeather.windspeed + " km/h";

  const codeLine = document.createElement("p");
  codeLine.className = "weather-line";
  codeLine.textContent = "Weather Code: " + currentWeather.weathercode;

  card.appendChild(cityTitle);
  card.appendChild(tempLine);
  card.appendChild(windLine);
  card.appendChild(codeLine);

  container.appendChild(card);
}
