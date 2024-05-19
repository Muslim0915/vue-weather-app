export interface Condition {
    text: string;
    icon: string;
}

export interface CurrentDayWeather {
    last_updated: string;
    temp_c: number;
    condition: Condition;
    feelslike_c: number;
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    cloud: number;
    vis_km: number;
}

export interface ForecastDay {
    date: string;
    date_epoch: number;
    day: {
        condition: Condition;
    };
}

export interface Location {
    name: string;
    country: string;
}

export interface WeatherData {
    location: Location;
    current: CurrentDayWeather;
    forecast: {
        forecastday: ForecastDay[];
    };
}
