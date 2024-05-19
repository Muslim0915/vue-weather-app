import { useToast } from "vue-toastification";
import { useWeatherStore } from "@/store";

const toast = useToast();
export const fetchWeatherByLocation = async (location: string) => {
    try {
        const API_URL = import.meta.env.VITE_APP_API_URL as string;
        const response = await fetch(API_URL.replace('{{location}}', location));
        useWeatherStore().state.weathers = await response.json();
        if (!response.ok) {
            toast.error('Please enter a valid location');
        }
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
    }
};