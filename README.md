# Hama-ik Weather App

A modern weather application that provides real-time weather information for any location around the world. The app features a clean, responsive design and uses the OpenWeatherMap API to fetch weather data.

![Hama-ik Weather App](https://raw.githubusercontent.com/mohamedboukari/hama-ik/main/screenshot.png)

## Features

- **Current Weather Data**: Get real-time weather information including temperature, feels-like temperature, humidity, wind speed, and more
- **Geolocation Support**: Automatically fetches weather for user's current location (with permission)
- **City Search**: Search for weather in any city worldwide
- **Responsive Design**: Works on desktop and mobile devices
- **Intuitive UI**: Clean, modern interface with weather icons and detailed information

## Live Demo

Check out the live demo: [Hama-ik Weather App](https://mohamedboukari.github.io/hama-ik)

## Technology Stack

- **Frontend**: React.js with Hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **API**: OpenWeatherMap API for weather data
- **Styling**: Custom CSS with responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/mohamedboukari/hama-ik.git
   cd hama-ik
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the project root (optional - for API key security)
   ```
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```
npm run build
# or
yarn build
```

The build files will be output to the `dist` directory.

## API Information

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) for weather data. The free tier allows up to 1,000 API calls per day.

## License

MIT License

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for the weather data API
- [React](https://reactjs.org/) for the frontend library
- [Vite](https://vitejs.dev/) for the build tool