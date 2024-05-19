<script lang="ts" setup>
import { defineProps } from 'vue';
import type { CurrentDayWeather } from '@/types/weather';
interface IProps{
    weatherData: CurrentDayWeather | undefined;
}

defineProps<IProps>();
</script>

<template>
  <div class="grid grid-cols-3 max-md:grid-cols-2 gap-2">
    <div class="flex items-center flex-col gap-2 max-md:gap-0.5">
      <p class="text-blue-500 text-3xl max-md:text-xl font-bold">Wind <i class="fa fa-wind"></i></p>
      <p class="text-white text-3xl max-md:text-xl font-bold">{{ weatherData?.wind_kph }} km/h</p>
    </div>
    <div class="flex items-center flex-col gap-2 max-md:gap-0.5">
      <p class="text-yellow-500 text-3xl max-md:text-xl font-bold">Pressure <i class="fas fa-tachometer-alt"></i></p>
      <p class="text-white text-3xl max-md:text-xl font-bold">{{ weatherData?.pressure_mb }} mb </p>
    </div>
    <div class="flex items-center flex-col gap-2 max-md:gap-0.5">
      <p class="text-red-500 text-3xl max-md:text-xl font-bold">Humidity <i class="fas fa-droplet"></i></p>
      <p class="text-white text-3xl max-md:text-xl font-bold">{{ weatherData?.humidity }} %</p>
    </div>
    <div class="flex items-center flex-col gap-2 max-md:gap-0.5">
      <p class="text-green-500 text-3xl max-md:text-xl font-bold">Cloud <i class="fas fa-cloud"></i></p>
      <p class="text-white text-3xl max-md:text-xl font-bold">{{ weatherData?.cloud }} %</p>
    </div>
    <div class="flex items-center flex-col gap-2 max-md:gap-0.5">
      <p class="text-purple-500 text-3xl max-md:text-xl font-bold">Feels like <i class="fas fa-temperature-low"></i></p>
      <p class="text-white text-3xl max-md:text-xl font-bold">{{ weatherData?.feelslike_c }}°C</p>
    </div>
    <div class="flex items-center flex-col gap-2 max-md:gap-0.5">
      <p class="text-orange-500 text-3xl max-md:text-xl font-bold">Visibility <i class="fas fa-eye"></i></p>
      <p class="text-white text-3xl max-md:text-xl font-bold">{{ weatherData?.vis_km }} km</p>
    </div>
  </div>
</template>

