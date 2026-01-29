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
import { CardProps } from "lessons/WeatherProject/types"
import { useAppDispatch } from "store/hooks"
import { weatherSliceAction } from "store/redux/weatherSlice/weatherSlice"


export default function HomeCard({
  weather,
  showSave = true,
  showDelete = true,
  onDelete,
}: CardProps) {
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
          <WhiteText>Sunrise: {new Date(weather.details.sunrise * 1000).toLocaleTimeString()}</WhiteText>
          <WhiteText>Sunset: {new Date(weather.details.sunset * 1000).toLocaleTimeString()}</WhiteText>
        </Sunrise>
      </InfoContainer>

      <InfoContainer>
        <WhiteText>Feels like: {Math.round(weather.details.feelsLike)}°C</WhiteText>
        <WhiteText>Min: {Math.round(weather.details.tempMin)}°C / Max: {Math.round(weather.details.tempMax)}°C</WhiteText>
        <WhiteText>Pressure: {weather.details.pressure} hPa</WhiteText>
        <WhiteText>Visibility: {weather.details.visibility / 1000} km</WhiteText>
        <WhiteText>Wind: {weather.details.windSpeed} m/s, {weather.details.windDeg}°</WhiteText>
        <WhiteText>Humidity: {weather.details.humidity}%</WhiteText>
      </InfoContainer>

      <ButtonsContainer>
        {showSave && <Button name="Save" variant="delete" onClick={handleSave} />}
        {showDelete && <Button name="Delete" variant="delete" onClick={handleDelete} />}
      </ButtonsContainer>
    </ResultDiv>
  )
}
