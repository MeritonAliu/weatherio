import './App.css';
import React, { useState, useEffect } from 'react';
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (city) {
      // Define your OpenWeather API key and API endpoint here
      const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Replace with your API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      // Fetch weather data
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          console.log('Weather Data:', data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        onKeyDown={handleEnterKeyPress}
        placeholder="Enter city name"
      />

    {weatherData && (
        <div>
          <h2>Weather Data for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Feels Like: {weatherData.main.feels_like}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
        </div>
      )}
    </div>
  );
}

export default App;
