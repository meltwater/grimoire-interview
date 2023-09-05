const fetchWeatherData = (location) => {
    return new Promise((resolve) => {
        resolve({
            location: location,
            temperature: '20°C'
        })
    })
}

module.exports = {
    fetchWeatherData
}