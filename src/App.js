import './App.css';
import Search from './components/search';
import { WEATHER_API_URL, API_key } from "./api";
import { useState } from 'react';
import CurrentWeather from './components/currentWeather';
import Forecast from './components/forecast';
import * as tool from './extraTools.js';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  // to create 11 forecast components already defined
  const forecastRender = () => {
    return forecast.list.slice(0, 9).map((item, index) => {
      let nextDay = true;
      if (tool.getOnlyDay(item.dt_txt) % 2 === 0) {
        nextDay = false;
      }
      return <Forecast key={index} day={tool.getDay(item.dt_txt)} time={tool.getTime(item.dt_txt)} 
      temperature={Math.round(item.main.temp)} icon={item.weather[0].icon} 
      iconAlt={item.weather[0].description} nextDay={nextDay}
      />
    })
  }


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  console.log(currentWeather);
  console.log(forecast);

  const applyCurrentWeather = (currentWeather) => {
    if (currentWeather) {

      const description = currentWeather.weather[0].description

      return (
        <div className='current-weather'>
          <CurrentWeather
            city={currentWeather.city}
            day={tool.CreateTime()}
            temperature={Math.round(currentWeather.main.temp)}
            tempDescr={description}
            highTemp={Math.round(currentWeather.main.temp_max)}
            LowTemp={Math.round(currentWeather.main.temp_min)}
            wind={tool.changeUnit(currentWeather.wind.speed)}
            sunrise={tool.transformTime(currentWeather.sys.sunrise)}
            sunset={tool.transformTime(currentWeather.sys.sunset)}
            feelsLike={Math.round(currentWeather.main.feels_like)}
            icon={currentWeather.weather[0].icon}
            iconAlt={description}
          />
          <div className='forecast-weather'>
            {forecastRender()}
          </div>
        </div>

      )
    }
  }
  return (
    <div className="main-container">
      <Search
        onSearchChange={handleOnSearchChange}
      />
      {applyCurrentWeather(currentWeather)}
    </div>
  );
}

export default App;
