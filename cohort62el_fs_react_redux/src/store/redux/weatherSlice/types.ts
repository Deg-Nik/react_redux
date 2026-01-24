import { WeatherData } from "lessons/WeatherProject/types";

export interface WeatherInitialState {
  error:string | undefined,
  currentWeather:string | undefined,
  weatherData: WeatherData [],
}