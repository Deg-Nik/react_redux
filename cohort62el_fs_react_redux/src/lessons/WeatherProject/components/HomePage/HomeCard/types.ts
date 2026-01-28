import { WeatherData } from "lessons/WeatherProject/types"

export type Props = {
  weather: WeatherData
  showSave?: boolean
  showDelete?: boolean
  onDelete?: (id: string) => void
}
