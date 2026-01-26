import { WeatherData } from "lessons/WeatherProject/types";

export interface WeatherInitialState {
  isLoading: any;
  error: boolean,
  currentWeather?: WeatherData,
  weatherData: WeatherData [],
}