// src/store/index.ts
import { defineStore } from 'pinia';
import {  reactive } from 'vue';
import type { WeatherData } from '@/types/weather';
import { getUserLanguage } from "@/utils/getUserLanguage.ts";
import { getCurrentLocation } from "@/utils/getCurrentLocation.ts";
import { fetchWeatherByLocation } from "@/utils/fetchWeatherByLocation.ts";


export const useWeatherStore = defineStore('weather', () => {
    const state = reactive({
        weathers: {} as WeatherData,
        currentLanguage: getUserLanguage(),
        currentLocation: '',
        selectedDayIndex: 0,
        isLoading: false,
    });
    const fetchWeather = async () => {
        state.isLoading = true;
        try {
            const location: string = await getCurrentLocation();
            state.currentLocation = location;
            await fetchWeatherByLocation(location);
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
        }
            state.isLoading = false;
    };
    return {
        state,
        fetchWeather,
    };
});
