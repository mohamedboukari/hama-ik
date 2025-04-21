import '../styles/WeatherCard.css'

function WeatherCard({ weatherData }) {
  if (!weatherData) return null

  const { main, weather, wind, name, sys } = weatherData
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  // Format date
  const today = new Date()
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = today.toLocaleDateString('en-US', dateOptions)

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}, {sys.country}</h2>
        <p className="date">{formattedDate}</p>
      </div>
      
      <div className="weather-body">
        <div className="weather-icon">
          <img src={iconUrl} alt={weather[0].description} />
          <p className="weather-description">{weather[0].description}</p>
        </div>
        
        <div className="weather-temps">
          <h2 className="temperature">{Math.round(main.temp)}°C</h2>
          <p className="feels-like">Feels like: {Math.round(main.feels_like)}°C</p>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail">
          <span className="detail-label">Min</span>
          <span className="detail-value">{Math.round(main.temp_min)}°C</span>
        </div>
        <div className="detail">
          <span className="detail-label">Max</span>
          <span className="detail-value">{Math.round(main.temp_max)}°C</span>
        </div>
        <div className="detail">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{Math.round(wind.speed)} m/s</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard