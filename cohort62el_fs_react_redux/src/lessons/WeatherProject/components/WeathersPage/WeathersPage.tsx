import { PageWrapper } from "lessons/WeatherProject/Home/styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { weatherSliceAction, weatherSliceSelectors } from "store/redux/weatherSlice/weatherSlice"
import {
  Card,
  CardsWrapper,
  DeleteAllButton,
  DeleteButton,
  Nav,
  NavLink,
  Title,
} from "./styles"


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
      <Title>Weather app</Title>
      <Nav>
        <NavLink>Home</NavLink>
        <NavLink>Weathers</NavLink>
      </Nav>
      <CardsWrapper>
        {savedWeathers.map(item => (
          <Card key={item.id}>
            <h3>{item.city}</h3>
            <p>Temperature: {item.temp}°C</p>

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
