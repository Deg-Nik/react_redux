import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "lessons/WeatherProject/input_button/Button/Button"
import Input from "lessons/WeatherProject/input_button/Input/Input"

import { HOME_FORM_VALUES } from "./types"
import {
  APIError,
  ButtonsContainer,
  City,
  HomeFormContainer,
  HomePageContainer,
  InfoContainer,
  InputsContainer,
  RedText,
  ResultDiv,
  Temp,
  TempContainer,
  Weather,
  WhiteText,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/redux/weatherSlice/weatherSlice"
import { WeatherData } from "lessons/WeatherProject/types"
import { v4 } from "uuid"
import { resolve } from "path"

const validationShema = Yup.object().shape({
  [HOME_FORM_VALUES.CITY]: Yup.string()
    .required("City field is required")
    .min(2, "minimum 2 simbols")
    .max(50, "maximum 50 simbols"),
})

function HomePage() {
  const dispatch = useAppDispatch()
  const weatherData = useAppSelector(weatherSliceSelectors.currentWeather)
  const hasApiError = useAppSelector(weatherSliceSelectors.hasError)
  const isLoading = useAppSelector(weatherSliceSelectors.isLoading)

  const API_KEY = "f09be79d24a66e5c14c0f50d0b27fe28"

  const Delete = () => {
    if (!weatherData) return
    dispatch(weatherSliceAction.deleteCard(weatherData?.id))
    dispatch(weatherSliceAction.clearCurrentWeather())
  }

  const Save = () => {
    if (!weatherData) return
    dispatch(weatherSliceAction.saveCard(weatherData))
  }

  const formik = useFormik({
    initialValues: {
      [HOME_FORM_VALUES.CITY]: "",
    },
    validationSchema: validationShema,
    validateOnChange: false,
    // Это функция, которая срабатывает при отправке формы
    onSubmit: async values => {
      const city = values[HOME_FORM_VALUES.CITY]
      dispatch(weatherSliceAction.startLoading())
      try {
        await new Promise(resolve => setTimeout(resolve, 3000))
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        )
        if (!response.ok) {
          throw new Error("API error")
        }
        const data = await response.json()
        const newCity: WeatherData = {
          id: v4(),
          city: city,
          temp: data.main.temp,
          weather: data.weather,
          icon: data.weather[0].icon,
        }
        dispatch(weatherSliceAction.weatherCard(newCity)) // передаем данные введенные пользователем с values
      } catch (error) {
        console.error(error)
      } finally{
        dispatch(weatherSliceAction.finishLoading())
      }
    },
  })
  return (
    <HomePageContainer>
      <HomeFormContainer onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <Input
            id="city-id"
            name={HOME_FORM_VALUES.CITY}
            placeholder="Enter city"
            value={formik.values[HOME_FORM_VALUES.CITY]}
            onChange={formik.handleChange}
            error={formik.errors[HOME_FORM_VALUES.CITY]}
          />
        </InputsContainer>
        <Button name="Search" type="submit" isDisabled={isLoading}/>
      </HomeFormContainer>

      {weatherData && (
        <ResultDiv>
          {/* {isLoading && <WhiteText>Loading...</WhiteText>} */}
          <InfoContainer>
            <TempContainer>
              <Temp>{Math.round(weatherData?.temp)}°C</Temp>
              <City>{weatherData?.city}</City>
            </TempContainer>

            <Weather>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
              />
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
              />
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
              />
            </Weather>
          </InfoContainer>

          {weatherData && (
            <ButtonsContainer>
              <Button
                name="Save"
                variant="delete" // ← визуально как delete
                isDisabled={!weatherData}
                onClick={Save}
              ></Button>
              <Button
                name="Delete"
                variant="delete" // ← визуально как delete
                isDisabled={!weatherData}
                onClick={Delete}
              ></Button>
            </ButtonsContainer>
          )}

          {hasApiError && (
            <APIError>
              <RedText>API Error</RedText>
              <WhiteText>Something went wrong with API data</WhiteText>
              <Button
                name="Delete"
                variant="delete" // ← визуально как delete
                isDisabled={!hasApiError}
              ></Button>
            </APIError>
          )}
        </ResultDiv>
      )}
    </HomePageContainer>
  )
}
export default HomePage
