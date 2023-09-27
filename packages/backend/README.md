# Weather Info System API

This project provides a GraphQL API for retrieving weather information.

## Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. **Install Dependencies**
   Run the following command to install all the necessary dependencies:

   ```bash
   npm i
   ```

2. **Start the GraphQL Server**
   Start the server using the command:

   ```bash
   npm run start
   ```

   After executing the command, you should see a message indicating the server is running, for example:

   ```bash
   🚀  Server ready at http://localhost:4000/
   ```

3. **Testing the API**

   Navigate to the given URL (typically http://localhost:4000/graphql) in your browser. This will open Apollo Server's built-in GraphQL Playground, where you can test and run your GraphQL queries.

   If you're unfamiliar with GraphQL, here's a basic example to get you started:

   ```graphql
   query GetWeather($location: String!) {
     getWeather(location: $location) {
       location
       temperature
     }
   }
   ```

## GraphQL API Documentation

## Enumerations

### WeatherType

Defines the type of weather conditions.

- **RAIN**: Conditions with rain or drizzle
- **SUNNY**: Clear or mostly clear sky
- **THUNDERSTORM**: Conditions with thunderstorms or lightning
- **SNOW**: Conditions with snow or sleet
- **WINDY**: Windy or blustery conditions

## Scalars

### Temperature

Represents the temperature value. Although this is a scalar type, its precise data format (like String, Int, etc.) isn't explicitly defined here. You'll need to decide on a format that suits your application.

## Object Types

### Weather

Represents weather data.

- **temperature** (Temperature!): The current temperature of the location.
- **location** (String!): The name or identifier of the location.
- **image** (String!): A URL pointing to an image representing the current weather conditions.
- **weatherType** (WeatherType!): The type of weather conditions, as defined by the `WeatherType` enum.

## Queries

### getWeather(location: String!)

Fetches weather data for a specific location.

- **location** (String!): The name or identifier of the location.

Returns: **Weather**

### getWatchList

Fetches weather data for all locations in the watch list.

Returns: **[Weather!]!**

## Mutations

### addToWatchList(locations: [String!]!)

Adds locations to the watch list.

- **locations** ([String!]!): A list of location names or identifiers to add to the watch list.

Returns: **Boolean!** (true on success)
