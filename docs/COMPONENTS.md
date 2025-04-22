# Component Documentation

## WeatherCard Component

The `WeatherCard` component is responsible for displaying weather data fetched from the OpenWeatherMap API.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `weatherData` | Object | Weather data object from OpenWeatherMap API |

### API Data Usage

The component uses the following data from the API response:

- `weatherData.name` - City name
- `weatherData.sys.country` - Country code
- `weatherData.weather[0].icon` - Weather icon code
- `weatherData.weather[0].description` - Weather condition description
- `weatherData.main.temp` - Current temperature
- `weatherData.main.feels_like` - "Feels like" temperature
- `weatherData.main.temp_min` - Minimum temperature
- `weatherData.main.temp_max` - Maximum temperature
- `weatherData.main.humidity` - Humidity percentage
- `weatherData.wind.speed` - Wind speed

### Example

```jsx
import WeatherCard from './components/WeatherCard';

// After fetching data from the API
{weatherData && !loading && !error && (
  <WeatherCard weatherData={weatherData} />
)}
```

### Component Structure

The component is structured into three main sections:

1. **Weather Header** - Displays the location name and current date
2. **Weather Body** - Shows the weather icon, description, and temperature
3. **Weather Details** - Displays additional weather information (min/max temp, humidity, wind speed)

### API Relationship

The WeatherCard component's structure directly maps to the OpenWeatherMap API response:

```
WeatherCard
├── weather-header
│   ├── City Name + Country Code (from weatherData.name and weatherData.sys.country)
│   └── Date (created locally)
├── weather-body
│   ├── Weather Icon (from weatherData.weather[0].icon)
│   ├── Weather Description (from weatherData.weather[0].description)
│   ├── Temperature (from weatherData.main.temp)
│   └── Feels Like Temperature (from weatherData.main.feels_like)
└── weather-details
    ├── Min Temperature (from weatherData.main.temp_min)
    ├── Max Temperature (from weatherData.main.temp_max)
    ├── Humidity (from weatherData.main.humidity)
    └── Wind Speed (from weatherData.wind.speed)
```

See [API_DETAILS.md](./API_DETAILS.md) for complete information about the OpenWeatherMap API integration. 