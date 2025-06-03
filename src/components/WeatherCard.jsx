import { getWeatherIcon } from "../lib/api/weather"

export default function WeatherCard({ weatherData }) {
    console.log(weatherData)

    const weatherIcon = getWeatherIcon(weatherData.weather[0].icon);
    const weatherDescription = weatherData.weather[0].description;
    return (
        <section className="weather-card">
            <h2 className="weather-card__title">{weatherData.cityName}, {weatherData.country}</h2>
            
            <div className="weather-card__info">
                <p className="weather-card__temperature">
                    {Math.round(weatherData.main.temp - 273.15)}°C
                </p>
                
                <div className="weather-card__description">
                    <p>{weatherDescription}</p>
                    <img src={weatherIcon} alt={weatherDescription} />
                </div>

                <div className="weather-card__additional">
                    <p className="weather-card__feels-like">Feels like: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
                    <p className="weather-card__humidity">Humidity: {weatherData.main.humidity}%</p>
                </div>
            </div>
        </section>
    )
}