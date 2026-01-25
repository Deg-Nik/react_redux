import { createAppSlice } from "store/createAppSlice"
import { WeatherInitialState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherData } from "lessons/WeatherProject/types"

const weatherInitialState: WeatherInitialState = {
  error: false,
  currentWeather: undefined,
  weatherData: [],
}

export const weatherSlice = createAppSlice({
  name: "WEATHER_CARD",
  initialState: weatherInitialState,
  reducers: {
    weatherCard: (state, action: PayloadAction<WeatherData>) => {
      state.currentWeather = action.payload
    },

    saveCard: (state, action: PayloadAction<WeatherData>) => {
      state.weatherData.push(action.payload)
    },

    deleteCard: (
      state: WeatherInitialState,
      action: PayloadAction<string | undefined>,
    ) => {
      state.weatherData = state.weatherData.filter(
        data => data.id !== action.payload,
      )
    },

    clearCurrentWeather: state => {
      state.currentWeather = undefined
    },

    deleteAllCards: (state: WeatherInitialState) => {
      state.weatherData = []
    },
  },
  selectors: {
    weatherData: (state: WeatherInitialState) => state.weatherData,
    currentWeather: (state: WeatherInitialState) => state.currentWeather,
    hasError: (state: WeatherInitialState) => state.error,
  },
})

export const weatherSliceAction = weatherSlice.actions

export const weatherSliceSelectors = weatherSlice.selectors
