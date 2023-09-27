const BASE_ASSET_URL = "http://localhost:4000/assets";
let generatedImages = {};

const fetchWeatherData = (location) => {
  return Promise.resolve({
    location: location,
    temperature: "20°C",
  });
};

const fetchWeatherImage = (location) => {
  const predefinedImages = {
    Paris: `${BASE_ASSET_URL}/thunder.jpeg`,
    London: `${BASE_ASSET_URL}/rain.jpeg`,
    Berlin: `${BASE_ASSET_URL}/sunny.jpeg`,
  };

  if (predefinedImages[location]) {
    return Promise.resolve(predefinedImages[location]);
  }

  if (generatedImages[location]) {
    return Promise.resolve(generatedImages[location]);
  }

  const imagePool = [
    `${BASE_ASSET_URL}/rainy.jpeg`,
    `${BASE_ASSET_URL}/sunny.jpeg`,
    `${BASE_ASSET_URL}/cloudy.jpeg`,
    `${BASE_ASSET_URL}/thunder.jpeg`,
  ];

  const randomImage = imagePool[Math.floor(Math.random() * imagePool.length)];
  generatedImages[location] = randomImage;

  return Promise.resolve(randomImage);
};

module.exports = {
  fetchWeatherData,
  fetchWeatherImage,
};
