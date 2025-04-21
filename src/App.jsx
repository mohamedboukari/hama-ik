import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = 'ef7c08d7b8e2dda11bad4e33a36e5919' // Free OpenWeatherMap API key
  
  const fetchWeather = async (searchCity) => {
    if (!searchCity) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error('City not found')
      }
      
      const data = await response.json()
      setWeatherData(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleSearch = (searchCity) => {
    setCity(searchCity)
    fetchWeather(searchCity)
  }

  // Get user's location weather on initial load
  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        setLoading(true)
        
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          )
          
          if (!response.ok) {
            throw new Error('Failed to fetch local weather')
          }
          
          const data = await response.json()
          setWeatherData(data)
          setCity(data.name)
          setLoading(false)
        } catch (err) {
          setError('Failed to get local weather. Please search for a city.')
          setLoading(false)
        }
      },
      () => {
        // If user denies location access
        setError('Location access denied. Please search for a city.')
      }
    )
  }, [])

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
  )
}

export default App