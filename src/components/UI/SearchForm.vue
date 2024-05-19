<script setup lang="ts">
import {ref} from "vue";

import {useWeatherStore} from "@/store";
import AppButton from "@/components/UI/AppButton.vue";
import {fetchWeatherByLocation} from "@/utils/fetchWeatherByLocation.ts";

const searchInputValue = ref('');
const store = useWeatherStore();

const searchCity = async () => {
  store.state.isLoading = true;
  await fetchWeatherByLocation(searchInputValue.value);
  searchInputValue.value = '';
  store.state.isLoading = false;
};
</script>

<template>
  <form action="#" class="flex px-3 py-2 self-center gap-4 items-center rounded-2xl bg-white w-1/3 max-md:w-full overflow-hidden" @submit.prevent="searchCity">
    <AppButton type="submit"><i class="fa fa-search"></i></AppButton>
    <input
        v-model="searchInputValue"
        class="outline-none capitalize w-full bg-transparent placeholder:uppercase placeholder:text-gray-500 placeholder:tracking-widest text-lg flex-1"
        name="search" placeholder="search city"
        type="text"/>
    <AppButton type="button" @click="searchInputValue = ''"><i class="fa fa-times"></i></AppButton>
  </form>
</template>

<style scoped lang="scss">

</style>