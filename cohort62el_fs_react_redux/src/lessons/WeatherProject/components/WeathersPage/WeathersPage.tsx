import { useAppDispatch, useAppSelector } from "store/hooks"
import { weatherSliceAction, weatherSliceSelectors } from "store/redux/weatherSlice/weatherSlice"
import {
  Card,
  CardsWrapper,
  City,
  DeleteAllButton,
  DeleteButton,
  Icons,
  Left,
  Temp,
} from "./styles"
import { WeatherData } from "lessons/WeatherProject/types"


function WeathersPage() {
  const dispatch = useAppDispatch()
  const savedWeathers = useAppSelector(
    weatherSliceSelectors.weatherData,
  )

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
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="weather icon"
              />
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="weather icon"
              />
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="weather icon"
              />
            </Icons>

            <DeleteButton onClick={() => handleDelete(item.id)}>
              Delete
            </DeleteButton>
          </Card>
        ))}
        {savedWeathers.length > 2 && (
        <DeleteAllButton onClick={handleDeleteAll}>
          Delete All Weathers
        </DeleteAllButton>
        )}
      </CardsWrapper>
      )
    }
    
   
  
export default WeathersPage
