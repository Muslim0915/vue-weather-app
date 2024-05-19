<script lang="ts" setup>
import {computed} from "vue";
import {useWeatherStore} from "@/store";

const props = defineProps({
  day: {
    type: Object,
    required: true
  },
});

const store = useWeatherStore();

const getCurrentDate = computed(() => {
  const date = new Date(props.day.date);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric' };
  return date.toLocaleDateString(store.state.currentLanguage, options);
});

</script>
<template>
  <div class="flex gap-4 items-center border border-white rounded-3xl py-4">
    <div class="h-full flex flex-col justify-center">
    <img
        :src="day.day.condition.icon"
        alt="weather-icon"
        class="w-full h-full max-lg:w-24 max-lg:h-24"
    >
    </div>
    <div class="flex flex-1 flex-col gap-4 max-lg:gap-2">
      <p class="text-white text-2xl max-lg:text-lg capitalize font-bold">{{ getCurrentDate }}</p>
      <p class="text-white text-2xl max-lg:text-lg font-bold">
        {{ day.day.maxtemp_c }}°C

      </p>
      <p class="text-white text-2xl max-lg:text-lg font-bold">
        {{day.day.condition.text}}

      </p>
    </div>
  </div>
</template>