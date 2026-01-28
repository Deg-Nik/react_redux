import {
  ButtonsContainer,
  City,
  Img,
  InfoContainer,
  ResultDiv,
  Sunrise,
  Temp,
  TempContainer,
  Weather,
  WhiteText,
} from "../styles"

import Button from "lessons/WeatherProject/input_button/Button/Button"
import { useAppDispatch } from "store/hooks"
import { weatherSliceAction } from "store/redux/weatherSlice/weatherSlice"
import { Props } from "./types"

export default function HomeCard({
  weather,
  showSave = true,
  showDelete = true,
  onDelete,
}: Props) {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    if (onDelete) return onDelete(weather.id)
    dispatch(weatherSliceAction.deleteCard(weather.id))
    dispatch(weatherSliceAction.clearCurrentWeather())
  }

  const handleSave = () => {
    dispatch(weatherSliceAction.saveCard(weather))
    dispatch(weatherSliceAction.clearCurrentWeather())
    setTimeout(() => alert("City saved"), 0)
  }

  return (
    <ResultDiv>
      <InfoContainer>
        <TempContainer>
          <Temp>{Math.round(weather.temp)}°</Temp>
          <City>{weather.city}</City>
        </TempContainer>

        <Weather>
          <Img src={`https://openweathermap.org/img/w/${weather.icon}.png`} />
          <Img src={`https://openweathermap.org/img/w/${weather.icon}.png`} />
          <Img src={`https://openweathermap.org/img/w/${weather.icon}.png`} />
        </Weather>

        <Sunrise>
          <p>Sunrise: {new Date(weather.details.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(weather.details.sunset * 1000).toLocaleTimeString()}</p>
        </Sunrise>
      </InfoContainer>

      <InfoContainer>
        <WhiteText>Feels like: {Math.round(weather.details.feelsLike)}°C</WhiteText>
        <p>Min: {Math.round(weather.details.tempMin)}°C / Max: {Math.round(weather.details.tempMax)}°C</p>
        <p>Pressure: {weather.details.pressure} hPa</p>
        <p>Visibility: {weather.details.visibility / 1000} km</p>
        <p>Wind: {weather.details.windSpeed} m/s, {weather.details.windDeg}°</p>
        <p>Humidity: {weather.details.humidity}%</p>
      </InfoContainer>

      <ButtonsContainer>
        {showSave && <Button name="Save" variant="delete" onClick={handleSave} />}
        {showDelete && <Button name="Delete" variant="delete" onClick={handleDelete} />}
      </ButtonsContainer>
    </ResultDiv>
  )
}
