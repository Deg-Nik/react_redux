import { WeatherData } from "lessons/WeatherProject/types";

export interface WeatherInitialState {
  isLoading: any;
  error: string,
  currentWeather?: WeatherData,
  weatherData: WeatherData [],
}