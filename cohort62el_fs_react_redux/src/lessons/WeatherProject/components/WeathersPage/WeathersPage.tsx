import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/redux/weatherSlice/weatherSlice"

import { CardsWrapper } from "./styles"
import Button from "lessons/WeatherProject/input_button/Button/Button"
import HomeCard from "../HomePage/HomeCard/HomeCard"
import { WeatherData } from "lessons/WeatherProject/types"

function WeathersPage() {
  const dispatch = useAppDispatch()
  const savedWeathers = useAppSelector(weatherSliceSelectors.weatherData)

  const handleDelete = (id: string) => {
    dispatch(weatherSliceAction.deleteCard(id))
    setTimeout(() => alert("Card deleted"), 0)
  }

  const handleDeleteAll = () => {
    dispatch(weatherSliceAction.deleteAllCards())
    setTimeout(() => alert("All cards deleted"), 0)
  }

  return (
    <CardsWrapper>
      {savedWeathers.map((item: WeatherData) => (
        <HomeCard
          key={item.id}
          weather={item}
          showSave={false}
          showDelete={true}
          onDelete={handleDelete}
        />
      ))}

      {savedWeathers.length > 0 && (
        <Button name="Delete all Cards" onClick={handleDeleteAll} $fullWidth />
      )}
    </CardsWrapper>
  )
}

export default WeathersPage
