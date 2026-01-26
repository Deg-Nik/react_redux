import { WeatherData } from "lessons/WeatherProject/types";

export interface WeatherInitialState {
  isLoading: any;
  error: undefined,
  currentWeather?: WeatherData,
  weatherData: WeatherData [],
}