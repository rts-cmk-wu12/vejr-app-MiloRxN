import { getWeatherIcon } from "../../lib/api/weather";
import { kelvinToCelsius } from "../../utils/temperature";

export function WeatherHeader({ cityName, country, weather, temperature }) {
    const weatherIcon = getWeatherIcon(weather.icon);
    const weatherDescription = weather.description;
    
    return (
        <>
            <h2 className="weather-card__title">{cityName}, {country}</h2>

            <div className="weather-card__description">
                <img 
                    className="weather-card__description-icon" 
                    src={weatherIcon} 
                    alt={weatherDescription} 
                />
                <div className="weather-card__description-container">
                    <p className="weather-card__description-temp">
                        {kelvinToCelsius(temperature.temp)}°C
                    </p>
                    <div>
                        <p className="weather-card__temp-min">Min: {kelvinToCelsius(temperature.temp_min)}°C</p>
                        <p className="weather-card__temp-max">Max: {kelvinToCelsius(temperature.temp_max)}°C</p>
                    </div>
                </div>
                <p className="weather-card__description-weather">{weatherDescription}</p>
            </div>
        </>
    );
}
