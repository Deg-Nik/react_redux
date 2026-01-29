import { type ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export interface WeatherData {
  id: string
  city: string
  temp: number
  weather: {
    icon: string
  }[]
  icon: string
  details: {
    feelsLike: number
    tempMin: number
    tempMax: number
    pressure: number
    visibility: number
    windSpeed: number
    windDeg: number
    sunrise: number
    sunset: number
    humidity: number
  }
}

export enum HOME_FORM_VALUES {
  CITY = "city",
}

export type CardProps = {
  weather: WeatherData
  showSave?: boolean
  showDelete?: boolean
  onDelete?: (id: string) => void
  
}

export type ApiProps = {
  error: string | boolean
}