import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchWeatherData(); 
    }
  };

  const fetchWeatherData = async () => {
    if (city) {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; // Replace with your API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          console.log('Weather Data:', data);
        } else {
          console.error('Error fetching weather data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          onKeyDown={handleEnterKeyPress}
          placeholder="Enter city name and press Enter"
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>


      {weatherData && (
        <div>
          <h2>Weather Data for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Feels Like: {weatherData.main.feels_like}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Wind Speed: {weatherData.wind.speed}</p>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
