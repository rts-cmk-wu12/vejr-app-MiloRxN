import { WeatherHeader } from './WeatherHeader';
import { WeatherMetrics } from './WeatherMetrics';
import { WeatherForecasts } from './WeatherForecasts';

export default function WeatherCard({ weatherData }) {
    return (
        <section className="weather-card">
            <WeatherHeader 
                cityName={weatherData.cityName}
                country={weatherData.country}
                weather={weatherData.weather[0]}
                temperature={weatherData.main}
            />
            
            <WeatherMetrics 
                wind={weatherData.wind}
                humidity={weatherData.main.humidity}
                feelsLike={weatherData.main.feels_like}
            />
            
            <WeatherForecasts 
                forecasts={weatherData.forecasts}
            />
        </section>
    );
}
