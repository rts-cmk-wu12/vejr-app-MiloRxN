import { getWeatherIcon } from "../lib/api/weather"
import humidityIcon from "../assets/icons/humidity.svg";
import feelsLikeIcon from "../assets/icons/feels-like.svg";
import windIcon from "../assets/icons/wind.svg";

export default function WeatherCard({ weatherData }) {
    console.log(weatherData)
    const weatherIcon = getWeatherIcon(weatherData.weather[0].icon);
    const weatherDescription = weatherData.weather[0].description;
    return (
        <section className="weather-card">
            <h2 className="weather-card__title">{weatherData.cityName}, {weatherData.country}</h2>

            <div className="weather-card__description">
                <img className="weather-card__description-icon" src={weatherIcon} alt={weatherDescription} />
                <div className="weather-card__description-container">
                    <p className="weather-card__description-temp">
                        {Math.round(weatherData.main.temp - 273.15)}°C
                    </p>
                    <div>
                        <p className="weather-card__temp-min">Min: {Math.round(weatherData.main.temp_min - 273.15)}°C</p>
                        <p className="weather-card__temp-max">Max: {Math.round(weatherData.main.temp_max - 273.15)}°C</p>
                    </div>
                </div>
                <p className="weather-card__description-weather">{weatherDescription}</p>
            </div>

            <div className="weather-card__additional">
                <div className="weather-card__additional-box weather-card__additional-box--large">
                    <div>
                        <img src={windIcon} className="weather-card__wind-icon"/>
                        <p className="weather-card__wind-data">{Math.round(weatherData.wind.speed)} m/s</p>
                        <p className="weather-card__wind-type">wind</p>
                    </div>

                    <hr className="divider" />

                    <div>
                        <img src={humidityIcon} className="weather-card__humidity-icon" />
                        <p className="weather-card__humidity-data">{weatherData.main.humidity}%</p>
                        <p className="weather-card__humidity-type">humidity</p>
                    </div>

                    <hr className="divider" />

                    <div>
                        <img src={feelsLikeIcon} className="weather-card__feels-icon" />
                        <p className="weather-card__feels-data">{Math.round(weatherData.main.feels_like - 273.15)}°C</p>
                        <p className="weather-card__feels-type">feels like</p>
                    </div>
                </div>
            
            </div>

            <section className="weather-card__forecasts">
                <h2 className="weather-card__forecasts-title">Forecasts</h2>
                <div className="weather-card__forecasts-date">
                    <p>Today</p>
                    <p>
                        {weatherData.forecasts && weatherData.forecasts.length > 0 &&
                            new Date(weatherData.forecasts[0].dt * 1000).toLocaleDateString('da-DK', {
                                day: 'numeric',
                                month: 'short'
                            })}
                    </p>
                </div>

                {weatherData.forecasts && weatherData.forecasts.length > 0 && (
                    <div className="weather-card__forecasts-slider">
                        {weatherData.forecasts.map((forecast, index) => {
                            const forecastTime = new Date(forecast.dt * 1000);
                            const hourString = forecastTime.getHours().toString().padStart(2, '0') + ':00';
                            const tempC = Math.round(forecast.main.temp - 273.15);
                            const iconUrl = getWeatherIcon(forecast.weather[0].icon);

                            return (
                                <div key={index} className="weather-card__forecasts-item">
                                    <p className="weather-card__forecasts-time">{hourString}</p>
                                    <img
                                        src={iconUrl}
                                        alt={forecast.weather[0].description}
                                        className="weather-card__forecasts-icon"
                                    />
                                    <p className="weather-card__forecasts-temp">{tempC}°C</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>

        </section>
    )
}