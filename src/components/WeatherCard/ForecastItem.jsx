import { getWeatherIcon } from "../../lib/api/weather";
import { kelvinToCelsius } from "../../utils/temperature";

export function ForecastItem({ forecast }) {
    const forecastTime = new Date(forecast.dt * 1000);
    const hourString = forecastTime.getHours().toString().padStart(2, '0') + ':00';
    const tempC = kelvinToCelsius(forecast.main.temp);
    const iconUrl = getWeatherIcon(forecast.weather[0].icon);

    return (
        <div className="weather-card__forecasts-item">
            <p className="weather-card__forecasts-time">{hourString}</p>
            <img
                src={iconUrl}
                alt={forecast.weather[0].description}
                className="weather-card__forecasts-icon"
            />
            <p className="weather-card__forecasts-temp">{tempC}°C</p>
        </div>
    );
}
