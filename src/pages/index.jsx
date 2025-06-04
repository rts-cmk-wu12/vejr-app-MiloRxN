import { useState } from "react"
import { getGeolocation, getCurrentWeather, getTodaysForecast } from "../lib/api/weather"
import WeatherCard from "../components/WeatherCard"
import SearchForm from "../components/SearchForm"

export default function Index() {

    const [Query, setQuery] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleGetWeather = async () => {
        setError(null)
        setWeatherData(null)

        if (!Query.trim()) {
            setError("Please enter a city name")
            return
        }

        setLoading(true)

        // console.log("Fetching geolocation for:", Query)
        const geoData = await getGeolocation(Query)

        if (geoData.error) {
            setError(`Geolocation error: ${geoData.error}`)
            setLoading(false)
            return
        }

        if (!geoData || geoData.length === 0) {
            setError("City not found")
            setLoading(false)
            return
        }

        // console.log(`Geolocation returned:`, geoData[0].lat, "and", geoData[0].lon)

        const { lat: latitude, lon: longitude, name: cityName, country } = geoData[0]
        // console.log("Getting weather for coordinates:", latitude, longitude)

        const weather = await getCurrentWeather(latitude, longitude)
        // console.log("Weather response:", weather)

        if (weather.error) {
            setError(`Weather error: ${weather.error}`)
            return
        }

        const forecasts = await getTodaysForecast(latitude, longitude)
        // console.log("Forecast Data:", forecasts)

        setWeatherData({
            ...weather,
            cityName: cityName,
            country: country,
            forecasts: forecasts.list
        })

        setLoading(false);
    }

    return (
        <>
            <header className="header">
                <h1 className="header__heading">Weather App</h1>
                <SearchForm
                    query={Query}
                    onQueryChange={setQuery}
                    onSubmit={handleGetWeather}
                    loading={loading}
                />
            </header>

            <main className="main">
                {!weatherData && !error && !loading && (
                    <p className="placeholder">Weather data will be displayed here.</p>
                )}

                {weatherData && <WeatherCard weatherData={weatherData} />}

                {error && (
                    <p className="error">{error}</p>
                )}
            </main>
        </>
    )
}

