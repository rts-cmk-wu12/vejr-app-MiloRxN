/**
 * Converts temperature from Kelvin to Celsius and rounds to nearest integer
 * @param {number} kelvin - Temperature in Kelvin
 * @returns {number} - Temperature in Celsius, rounded
 */
export const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);
