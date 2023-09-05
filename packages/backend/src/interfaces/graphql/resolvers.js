const { fetchWeatherData } = require('../../infrastructure/weatherAPI')

const resolvers = {
    Query: {
        getWeather: async (_, { location }) => {
            const weatherData = await fetchWeatherData(location)
            return weatherData
        }
    }
}

module.exports = resolvers