export function MetricItem({ icon, value, label, className }) {
    return (
        <div>
            <img src={icon} className={`weather-card__${className}-icon`} alt={label} />
            <p className={`weather-card__${className}-data`}>{value}</p>
            <p className={`weather-card__${className}-type`}>{label}</p>
        </div>
    );
}
