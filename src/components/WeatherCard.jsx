import "../styles/WeatherCard.css";

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  const { main, weather, wind, name, sys, clouds, visibility } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  // Format date
  const today = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", dateOptions);

  // Format sunrise and sunset
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>
          {name}, {sys.country}
        </h2>
        <p className="date">{formattedDate}</p>
      </div>

      <div className="weather-body">
        <div className="weather-icon">
          <img src={iconUrl} alt={weather[0].description} />
          <p className="weather-description">{weather[0].description}</p>
          <p className="weather-main">Condition: {weather[0].main}</p>
          <p className="weather-id">ID: {weather[0].id}</p>
        </div>

        <div className="weather-temps">
          <h2 className="temperature">{Math.round(main.temp)}°C</h2>
          <p className="feels-like">
            Feels like: {Math.round(main.feels_like)}°C
          </p>
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
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{main.pressure} hPa</span>
        </div>
        <div className="detail">
          <span className="detail-label">Visibility</span>
          <span className="detail-value">
            {(visibility / 1000).toFixed(1)} km
          </span>
        </div>
        <div className="detail">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{Math.round(wind.speed)} m/s</span>
        </div>
        <div className="detail">
          <span className="detail-label">Wind Direction</span>
          <span className="detail-value">{wind.deg}°</span>
        </div>
        <div className="detail">
          <span className="detail-label">Cloudiness</span>
          <span className="detail-value">{clouds.all}%</span>
        </div>
        <div className="detail">
          <span className="detail-label">Sunrise</span>
          <span className="detail-value">{formatTime(sys.sunrise)}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Sunset</span>
          <span className="detail-value">{formatTime(sys.sunset)}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
