import humidityIcon from "../../assets/icons/humidity.svg";
import feelsLikeIcon from "../../assets/icons/feels-like.svg";
import windIcon from "../../assets/icons/wind.svg";
import { kelvinToCelsius } from "../../utils/temperature";
import { MetricItem } from "./MetricItem";

export function WeatherMetrics({ wind, humidity, feelsLike }) {
    return (
        <div className="weather-card__additional">
            <div className="weather-card__additional-box weather-card__additional-box--large">
                <MetricItem 
                    icon={windIcon} 
                    value={`${Math.round(wind.speed)} m/s`} 
                    label="wind" 
                    className="wind" 
                />
                
                <hr className="divider" />
                
                <MetricItem 
                    icon={humidityIcon} 
                    value={`${humidity}%`} 
                    label="humidity" 
                    className="humidity" 
                />
                
                <hr className="divider" />
                
                <MetricItem 
                    icon={feelsLikeIcon} 
                    value={`${kelvinToCelsius(feelsLike)}°C`} 
                    label="feels like" 
                    className="feels" 
                />
            </div>
        </div>
    );
}
