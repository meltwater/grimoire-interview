<template>
  <div>
    <select v-model="selectedLocation" @change="fetchWeather">
      <option v-for="loc in locations" :key="loc" :value="loc">
        {{ loc }}
      </option>
    </select>

    <wis-weather-card
      v-if="weather"
      :location="weather.location"
      :temperature="weather.temperature"
      :condition="weather.weatherType"
      :image="weather.image"
    />

    <pre>{{ weather }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const locations = ref(['New Hampshire', 'New York', 'California', 'Texas'])
const selectedLocation = ref(locations.value[0])

type WeatherData = {
  temperature: number
  location: string
  image: string
  weatherType: string
}

const weather = ref<WeatherData | null>(null)

const GET_WEATHER = gql`
  query GetWeather($location: String!) {
    getWeather(location: $location) {
      temperature
      location
      image
      weatherType
    }
  }
`
const { refetch } = useQuery(GET_WEATHER, {
  location: selectedLocation.value
})

const fetchWeather = async () => {
  const result = await refetch({ location: selectedLocation.value })

  if (result && result.data && result.data.getWeather) {
    weather.value = result.data.getWeather
  }

  console.log('Weather', weather.value)
}

fetchWeather()
</script>
