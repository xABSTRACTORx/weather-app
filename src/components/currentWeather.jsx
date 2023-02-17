import '../stylesheet/current-weather.css';

const CurrentWeather = ({city, day, temperature, tempDescr, highTemp, LowTemp, wind, sunrise, feelsLike, sunset, icon, iconAlt}) => {
    return (
        <div className="current-weather-main">
            <div className="city-country">
                <h2> {city} </h2> <p>{day}</p>
             </div>
            <div className="img-container">
                <img src={`/assets/animated/${icon}.svg`} className="img" alt={iconAlt} />
            </div>
            <div className="temperature-description"> 
                <h1>{temperature}°C</h1> <p>{tempDescr}</p>
            </div>
            <div className="full-description">
                <div className="high-temp"> <h2>{highTemp}°c</h2> High</div>
                <div className="wind"><h2>{wind}km</h2>  Wind</div>
                <div className="sunrise"><h3>{sunrise}</h3>  Sunrise</div>
                <div className="low-temp"><h2>{LowTemp}°c</h2>Low</div>
                <div className="rain"><h2>{feelsLike}°c</h2>  Feels like</div>
                <div className="sunset"><h3>{sunset}</h3>  Sunset</div>
            </div>
        </div>
    );
}

export default CurrentWeather;

