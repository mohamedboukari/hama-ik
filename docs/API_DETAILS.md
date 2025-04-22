# OpenWeatherMap API Documentation

## API Overview
The Hama-ik Weather application uses the OpenWeatherMap API to retrieve current weather data for locations worldwide.

## API Endpoints Used

### Current Weather Data
`GET https://api.openweathermap.org/data/2.5/weather`

This endpoint provides current weather data for a specific location.

#### Query Parameters:
- `q` - City name (e.g., "London,UK")
- `lat` & `lon` - Latitude and longitude coordinates
- `appid` - Your API key
- `units` - Units of measurement (metric, imperial, or standard)

#### Example Requests:
```javascript
// Search by city name
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

// Search by coordinates
https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&appid=YOUR_API_KEY&units=metric
```

## Response Structure
The API response contains the following key data:

```javascript
{
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 20.5,         // Current temperature in °C (if units=metric)
    "feels_like": 19.8,    // "Feels like" temperature in °C
    "temp_min": 18.9,      // Minimum temperature in °C
    "temp_max": 22.1,      // Maximum temperature in °C
    "pressure": 1012,      // Atmospheric pressure in hPa
    "humidity": 65        // Humidity percentage
  },
  "wind": {
    "speed": 3.5,         // Wind speed in m/s (if units=metric)
    "deg": 120            // Wind direction in degrees
  },
  "sys": {
    "country": "GB",      // Country code
    "sunrise": 1650255615, // Sunrise time (Unix UTC)
    "sunset": 1650304315   // Sunset time (Unix UTC)
  },
  "name": "London",       // City name
  "id": 2643743,          // City ID
  "cod": 200              // Response code (200 = success)
}
```

## Weather Icons
Weather icons are available through the URL:
`https://openweathermap.org/img/wn/{icon_id}@2x.png`

Where `{icon_id}` is the icon code from the weather array (e.g., "01d", "02n").

## API Key Management
The application uses an environment variable to store the API key:

```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

For local development, create a `.env` file in the project root with:
```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

## Error Handling
The API may return these common errors:
- 401: Invalid API key
- 404: City not found
- 429: Too many requests (exceeded plan limit)

## Rate Limits
The free OpenWeatherMap plan includes:
- 60 calls per minute
- 1,000,000 calls per month

## For More Information
Visit the [OpenWeatherMap API documentation](https://openweathermap.org/api) for more details. 