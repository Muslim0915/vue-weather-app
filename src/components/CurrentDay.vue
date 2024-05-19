<script lang="ts" setup>

import { computed } from 'vue';
import { useWeatherStore } from '@/store';

import WeatherDetails from '@/components/WeatherDetails.vue';
import type { WeatherData } from "@/types/weather.ts";

interface IProps{
    weathers: WeatherData
}

defineProps<IProps>();

const store = useWeatherStore();

const getCurrentDate = computed(() => {
  const date = new Date(store.state.weathers.current?.last_updated ?? 0);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(store.state.currentLanguage, options);
});
</script>

<template>

  <div class="flex justify-between max-md:flex-col max-md:gap-4">
    <div class="flex max-md:self-center flex-col gap-4">
      <h1 class="text-white text-5xl max-lg:text-3xl font-bold">{{ weathers.location?.name }}, {{ weathers.location?.country }}</h1>
      <h2 class="text-white text-3xl max-lg:text-xl font-bold capitalize">{{ getCurrentDate }}</h2>
      <div class="flex items-center gap-4">
        <img
            :src="weathers.current?.condition?.icon"
            alt="weather-icon"
            height="150"
            width="150"
            class="max-lg:w-24 max-lg:h-24"
        >
        <div class="flex flex-col gap-4">
          <h2 class="text-white text-7xl max-lg:text-5xl max-md:text-4xl font-bold">{{ weathers.current?.temp_c }}°C</h2>
          <p class="text-white text-3xl max-lg:text-xl font-bold">{{ weathers.current?.condition?.text }}</p>
        </div>
      </div>
    </div>
    <WeatherDetails :weatherData="weathers.current" />
  </div>
</template>
