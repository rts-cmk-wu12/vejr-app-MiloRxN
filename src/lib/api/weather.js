const APIKEY = import.meta.env.VITE_API_KEY;
const BASEURL = import.meta.env.VITE_BASE_URL;
const ICONURL = import.meta.env.VITE_ICON_URL;


/**
 * getGeolocation is used to retrieve the latitude and longitude of a location from OWM's geolocation api.
 * @async
 * @function getGeolocation
 * @param {string} query - The desired location (city name, state code, country code).
 * @param {number} limit - Number of locations in api response.
 * @returns 
 */
export async function getGeolocation(query, limit = 1) {
    const response = await fetch(`${BASEURL}/geo/1.0/direct?q=${query}&limit=${limit}&appid=${APIKEY}`);
    if (!response.ok) {
        return { error: response.statusText };
    }
    const data = await response.json();
    return data;
}


/**
 * getCurrentWeather takes in coords of the location, and returns the weather,
 * from OWM's current weather api.
 * If you dont have the geolocation lat & lon use getGeolocation
 * @async
 * @function getCurrentWeather
 * @param {number} latitude - Latitude of the Geolocation.
 * @param {number} longitude - Longitude of the Geolocation.
 * @returns 
 */
export async function getCurrentWeather(latitude, longitude) {
    const response = await fetch(`${BASEURL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`)
    if (!response.ok) {
        return { error: response.statusText };
    }
    const data = await response.json();
    return data;
}

/**
 * getWeatherIcon returns a weather icon matching the code
 * @function getWeatherIcon
 * @param {string} code - OWM's Current weather api's icon code.
 * @returns 
 */
export function getWeatherIcon(code) {
    return `${ICONURL}/img/wn/${code}@2x.png`
}

/**
 * getTodaysForecast fetches forecast data and filters it to only return today's forecasts
 * @async
 * @function getTodaysForecast
 * @param {number} latitude - Latitude of the Geolocation.
 * @param {number} longitude - Longitude of the Geolocation.
 * @returns {Object} Object containing filtered list of today's forecasts
 */
export async function getTodaysForecast(latitude, longitude) {
    const response = await fetch(`${BASEURL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=8&appid=${APIKEY}`)
    if (!response.ok) {
        return { error: response.statusText };
    }

    const data = await response.json();

    if (data && data.list) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const todaysForecasts = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt * 1000);
            return forecastDate >= today && forecastDate < tomorrow;
        });

        return {
            ...data,
            list: todaysForecasts
        };
    }

    return data;
}