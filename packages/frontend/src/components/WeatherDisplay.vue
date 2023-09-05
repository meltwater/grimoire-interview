<template>
  <div>
    <select v-model="selectedLocation" @change="fetchWeather">
      <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
    </select>

    <div v-if="weather">
      Weather for {{ weather.location }}: {{ weather.temperature }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  name: 'WeatherDisplay',
  setup() {
    const locations = ref(['New Hampshire', 'New York', 'California', 'Texas']); 
    const selectedLocation = ref(locations.value[0]);
    const weather = ref(null);

    const GET_WEATHER = gql`
      query GetWeather($location: String!) {
        getWeather(location: $location) {
          temperature
          location
        }
      }
    `;

    const { refetch } = useQuery(GET_WEATHER, {
      variables: { location: selectedLocation.value },
      skip: true 
    });

    const fetchWeather = async () => {
      const { data } = await refetch({ location: selectedLocation.value });
      if (data && data.getWeather) {
        weather.value = data.getWeather;
      }
    };

    fetchWeather();

    return { locations, selectedLocation, weather, fetchWeather };
  }
};
</script>
