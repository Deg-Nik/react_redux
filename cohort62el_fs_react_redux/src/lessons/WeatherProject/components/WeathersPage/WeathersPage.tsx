import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/redux/weatherSlice/weatherSlice"
import {
  ButtonContainer,
  Card,
  CardsWrapper,
  City,
  Icons,
  Img,
  Left,
  Temp,
} from "./styles"
import Button from "lessons/WeatherProject/input_button/Button/Button"
import { WeatherData } from "lessons/WeatherProject/types"

function WeathersPage() {
  const dispatch = useAppDispatch()
  const savedWeathers = useAppSelector(weatherSliceSelectors.weatherData)

  const handleDelete = (id: string) => {
    dispatch(weatherSliceAction.deleteCard(id))
    alert("Weather deleted")
  }

  const handleDeleteAll = () => {
    dispatch(weatherSliceAction.deleteAllCards())
    alert("All weathers deleted")
  }

  return (
    <CardsWrapper>
      {savedWeathers.map((item: WeatherData) => (
        <Card key={item.id}>
          <Left>
            <Temp>{Math.round(item.temp)}°</Temp>
            <City>{item.city}</City>
          </Left>

          <Icons>
            <Img
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt="weather icon"
            />
            <Img
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt="weather icon"
            />
            <Img
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt="weather icon"
            />
          </Icons>
          <ButtonContainer>
            <Button name= "Delete" variant= "delete" onClick={() => handleDelete(item.id)}/>              
          </ButtonContainer>
        </Card>
      ))}
      {savedWeathers.length > 1 && (
       
        <Button name="Delete All Weathers" onClick={handleDeleteAll}/>
       
      )}
    </CardsWrapper>
  )
}

export default WeathersPage
