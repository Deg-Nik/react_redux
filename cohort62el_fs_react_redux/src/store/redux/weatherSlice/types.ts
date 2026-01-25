import { WeatherData } from "lessons/WeatherProject/types";

export interface WeatherInitialState {
  error: boolean,
  currentWeather?: WeatherData,
  weatherData: WeatherData [],
}