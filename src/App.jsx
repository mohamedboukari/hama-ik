import { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use environment variable with fallback
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = async (searchCity) => {
    if (!searchCity) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          searchCity
        )}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            `City "${searchCity}" not found. Please check the spelling and try again.`
          );
        } else if (response.status === 401) {
          throw new Error(
            "API key is invalid. Please check your configuration."
          );
        } else {
          throw new Error(
            `Error fetching weather data: ${response.statusText}`
          );
        }
      }

      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error("Weather API error:", err);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  // Get user's location weather on initial load
  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLoading(true);

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          if (!response.ok) {
            if (response.status === 401) {
              throw new Error(
                "API key is invalid. Please check your configuration."
              );
            } else {
              throw new Error(
                `Failed to fetch local weather: ${response.statusText}`
              );
            }
          }

          const data = await response.json();
          setWeatherData(data);
          setCity(data.name);
          setLoading(false);
        } catch (err) {
          setError("Failed to get local weather. Please search for a city.");
          setLoading(false);
          console.error("Location weather error:", err);
        }
      },
      () => {
        // If user denies location access
        setError("Location access denied. Please search for a city.");
      }
    );
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Hama-ik Weather</h1>
        <p>Get accurate weather forecasts for any location</p>
      </header>

      <main className="main">
        <SearchBar onSearch={handleSearch} />

        {loading && <p className="loading">Loading weather data...</p>}

        {error && <p className="error">{error}</p>}

        {weatherData && !loading && !error && (
          <WeatherCard weatherData={weatherData} />
        )}
      </main>

      <footer className="footer">
        <p>Powered by OpenWeatherMap API | Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
