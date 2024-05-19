<script setup lang="ts">

import { onMounted, computed } from "vue";
import { useWeatherStore } from "@/store";

import CurrentDay from "@/components/CurrentDay.vue";
import ForecastDays from "@/components/ForecastDays.vue";
import SearchForm from "@/components/UI/SearchForm.vue";

const getForecastDays = computed(() => {
  return store.state.weathers.forecast?.forecastday || [];
});

const store = useWeatherStore();
onMounted( async () => {
    await store.fetchWeather();
});

</script>

<template>

  <div class="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-gray-900 opacity-75" v-if="store.state.isLoading">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw text-9xl"></i>
  </div>

  <div class="flex flex-col items-center justify-center bg-main-bg h-screen w-screen bg-cover bg-no-repeat bg-center">
      <div class="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-gray-900 opacity-30"></div>
      <div class="container p-12 max-lg:p-6 max-lg:max-w-full flex flex-col gap-12 max-lg:gap-4 backdrop-blur-md rounded-3xl shadow-2xl">
        <SearchForm />
        <CurrentDay :weathers="store.state.weathers" />
        <div class="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          <ForecastDays
              v-for="(day, index) in getForecastDays"
              :key="index"
              :day="day as object"
          /></div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
</style>