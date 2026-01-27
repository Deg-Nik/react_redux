import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/redux/weatherSlice/weatherSlice"
import {
  ButtonContainer,
  CardsWrapper,
  City,
  Img,
  InfoContainer,
  ResultDiv,
  Temp,
  TempContainer,
  Weather,
} from "./styles"
import Button from "lessons/WeatherProject/input_button/Button/Button"
import { WeatherData } from "lessons/WeatherProject/types"

function WeathersPage() {
  const dispatch = useAppDispatch()
  const savedWeathers = useAppSelector(weatherSliceSelectors.weatherData)

  const handleDelete = (id: string) => {
    dispatch(weatherSliceAction.deleteCard(id))
    setTimeout(() => {
      alert("Card deleted")
    }, 0)
  }

  const handleDeleteAll = () => {
    dispatch(weatherSliceAction.deleteAllCards())
    setTimeout(() => {
      alert("All cards deleted")
    }, 0)
  }

  return (
    <CardsWrapper>
      {savedWeathers.map((item: WeatherData) => (
        <ResultDiv key={item.id}>
          <InfoContainer>
            <TempContainer>
              <Temp>{Math.round(item.temp)}°</Temp>
              <City>{item.city}</City>
            </TempContainer>

            <Weather>
              <Img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt="weather icon"
              />
              <Img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt="weather icon"
              />
              <Img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt="weather icon"
              />
            </Weather>
          </InfoContainer>
          <ButtonContainer>
            <Button
              name="Delete"
              variant="delete"
              onClick={() => handleDelete(item.id)}
            />
          </ButtonContainer>
        </ResultDiv>
      ))}
      {savedWeathers.length > 0 && (
        <Button name="Delete all Cards" onClick={handleDeleteAll} $fullWidth />
      )}
    </CardsWrapper>
  )
}

export default WeathersPage
