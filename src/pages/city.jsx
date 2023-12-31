import React, { useState } from "react";
import "../styles/main.scss";

export default function City() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchWeatherData();
    }
  };

  const fetchWeatherData = async () => {
    setError(null);
    setWeatherData(null);
    if (city) {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          console.log("Weather Data:", data);
        } else {
          console.error("Error fetching weather data:", response.statusText);
          setError("Error, city not found.");
        }
      } catch (error) {
        setError("An error occurred while fetching weather data.");
        console.error("Error fetching weather data:", error);
      }
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="citypage">
        <div className="search">
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            onKeyDown={handleEnterKeyPress}
            placeholder="Enter city name"
          />
          <button onClick={fetchWeatherData}>Get Weather</button>
        </div>

        {weatherData && (
          <div className="dataCard">
            <div>
              <h1>Weather Data for {weatherData.name}</h1>
              <p>Temperature: {weatherData.main.temp}</p>
              <p>Feels Like: {weatherData.main.feels_like}</p>
              <p>Humidity: {weatherData.main.humidity}</p>
              <p>Wind Speed: {weatherData.wind.speed}</p>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
              <p>{weatherData.weather[0].description}</p>
            </div>
          </div>
        )}
        {error && (
          <div className="errorCard">
            <p>{error}</p>
          </div>
        )}
    </div>
  );
}
