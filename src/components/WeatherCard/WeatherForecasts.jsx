import { getWeatherIcon } from "../../lib/api/weather";
import { kelvinToCelsius } from "../../utils/temperature";
import { ForecastItem } from "./ForecastItem";

export function WeatherForecasts({ forecasts }) {
    // Check if forecasts exist
    const hasForecasts = forecasts && forecasts.length > 0;
    
    // Format date once instead of in the JSX
    const formattedDate = hasForecasts 
        ? new Date(forecasts[0].dt * 1000).toLocaleDateString('da-DK', {
            day: 'numeric',
            month: 'short'
        }) 
        : '';
        
    return (
        <section className="weather-card__forecasts">
            <h2 className="weather-card__forecasts-title">Forecasts</h2>
            <div className="weather-card__forecasts-date">
                <p>Today</p>
                <p>{hasForecasts && formattedDate}</p>
            </div>

            {hasForecasts && (
                <div className="weather-card__forecasts-slider">
                    {forecasts.map((forecast, index) => (
                        <ForecastItem key={index} forecast={forecast} />
                    ))}
                </div>
            )}
        </section>
    );
}
