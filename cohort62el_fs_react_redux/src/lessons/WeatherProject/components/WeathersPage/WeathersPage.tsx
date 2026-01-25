import { PageWrapper } from "lessons/WeatherProject/Home/styles"
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
  Nav,
  NavLink,
  Temp,
  Title,
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
    <PageWrapper>
      <Title></Title>
      <Nav>
        <NavLink></NavLink>
        <NavLink></NavLink>
      </Nav>
      <CardsWrapper>
        {savedWeathers.map((item: WeatherData) => (
          <Card key={item.id}>
            <Left>
              <Temp>{Math.round(item.temp)}°</Temp>
              <City>{item.city}</City>
            </Left>

            <Icons>
              {item.weather.map((w, index) => (
                <img
                key={index}
                src={`http://openweathermap.org/img/w/${w.icon}.png`}
                alt="weather icon"
                />
              ))}
            </Icons>

            <DeleteButton onClick={() => handleDelete(item.id)}>
              Delete
            </DeleteButton>
          </Card>
        ))}
      </CardsWrapper>
      {savedWeathers.length > 0 && (
        <DeleteAllButton onClick={handleDeleteAll}>
          Delete All Weathers
        </DeleteAllButton>
      )}
    </PageWrapper>
  )
}

export default WeathersPage
