import { createAppSlice } from "store/createAppSlice"
import { WeatherInitialState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherData } from "lessons/WeatherProject/types"

const weatherInitialState: WeatherInitialState = {
  error: undefined,
  currentWeather: undefined,
  weatherData: [],
}


export const weatherSlice = createAppSlice({
  name: "WEATHER_CARD",
  initialState: weatherInitialState,
  reducers: {
    weatherCard: (
      state: WeatherInitialState,
      action: PayloadAction<WeatherData>,
    ) => {
      state.weatherData.push(action.payload)
    },
    deleteCard: (state: WeatherInitialState, action: PayloadAction<string>) => {
      state.weatherData = state.weatherData.filter(
        data => data.id !== action.payload,
      )
    },
  },
  selectors: {
    weatherData: (state: WeatherInitialState) => state.weatherData,
  },
})

export const weatherSliceAction = weatherSlice.actions

export const weatherSliceSelectors = weatherSlice.selectors