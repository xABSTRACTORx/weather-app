import "../stylesheet/forecast.css";

const Forecast = ({day, time, temperature, icon, iconAlt, nextDay}) => {
    return (
        <div className={`${nextDay ? 'time-main-1' : 'time-main-2'}`}>
            <div className="day">{day}</div>
            <div className="time">{time}</div>
            <div className="time-img-container">
                <img className= "img" src={`/assets/animated/${icon}.svg`} alt={iconAlt} />
            </div>
            <div className="temperature">{temperature}°C</div>
        </div>
    )
}

export default Forecast;