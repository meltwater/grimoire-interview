const {
  fetchWeatherData,
  fetchWeatherImage,
} = require("../../infrastructure/weatherAPI");

let watchList = [];
let locationWeatherTypeMap = {};

const getRandomWeatherType = () => {
  const weatherTypes = ["RAIN", "SUNNY", "THUNDERSTORM", "SNOW", "WINDY"];
  return weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
};

const resolvers = {
  Query: {
    getWeather: async (_, { location }) => {
      const weatherData = await fetchWeatherData(location);
      const weatherImage = await fetchWeatherImage(location);
      const weatherType =
        locationWeatherTypeMap[location] || getRandomWeatherType();

      // Cache the weather type for the location
      locationWeatherTypeMap[location] = weatherType;

      return {
        ...weatherData,
        image: weatherImage,
        weatherType: weatherType,
      };
    },
    getWatchList: async () => {
      const results = [];
      for (const location of watchList) {
        const weatherData = await fetchWeatherData(location);
        const weatherImage = await fetchWeatherImage(location);
        const weatherType =
          locationWeatherTypeMap[location] || getRandomWeatherType();

        // Cache the weather type for the location
        locationWeatherTypeMap[location] = weatherType;

        results.push({
          location: location,
          temperature: weatherData.temperature,
          image: weatherImage,
          weatherType: weatherType,
        });
      }
      return results;
    },
  },
  Mutation: {
    addToWatchList: (_, { locations }) => {
      const lowerCaseWatchListSet = new Set(
        watchList.map((item) => item.toLowerCase())
      );

      for (const location of locations) {
        if (!lowerCaseWatchListSet.has(location.toLowerCase())) {
          watchList.push(location);
          lowerCaseWatchListSet.add(location.toLowerCase());
        }
      }

      return true;
    },
  },
};

module.exports = resolvers;
