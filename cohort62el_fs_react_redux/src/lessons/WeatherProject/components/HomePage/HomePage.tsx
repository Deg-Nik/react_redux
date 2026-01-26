import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

import Button from "lessons/WeatherProject/input_button/Button/Button"
import Input from "lessons/WeatherProject/input_button/Input/Input"

import { HOME_FORM_VALUES } from "./types"
import {
  APIError,
  ButtonsContainer,
  City,
  HomeFormContainer,
  HomePageContainer,
  Img,
  ImgSpinner,
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

const validationShema = Yup.object().shape({
  [HOME_FORM_VALUES.CITY]: Yup.string()
    .required("City field is required")
    .min(2, "minimum 2 simbols")
    .max(50, "maximum 50 simbols"),
})

function HomePage() {
  const dispatch = useAppDispatch()
  const weatherData = useAppSelector(weatherSliceSelectors.currentWeather)
  const error = useAppSelector(weatherSliceSelectors.error)
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
    dispatch(weatherSliceAction.clearCurrentWeather())
    // удаление карты перед alert с помощью setTimeout. (обновление DOM далее alert)
    setTimeout(() => {
      alert("Sity saved")
    }, 0)
  }

  const formik = useFormik({
    initialValues: {
      [HOME_FORM_VALUES.CITY]: "",
    },

    validateOnChange: false,
    // Это функция, которая срабатывает при отправке формы
    onSubmit: async values => {
      try {
        await validationShema.validate(values)

        const city = values[HOME_FORM_VALUES.CITY]

        dispatch(weatherSliceAction.clearCurrentWeather())
        dispatch(weatherSliceAction.startLoading())

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        )

        const data = response.data
        const newCity: WeatherData = {
          id: v4(),
          city,
          temp: data.main.temp,
          weather: data.weather,
          icon: data.weather[0].icon,
        }

        dispatch(weatherSliceAction.weatherCard(newCity))
      } catch (err: any) {
        if (err.name === "ValidationError") {
          alert(err.message)
          return
        }

        const message =
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "Unknown API error"

        dispatch(weatherSliceAction.setError(message))
      } finally {
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
        <Button name="Search" type="submit" isDisabled={isLoading} />
      </HomeFormContainer>
      {isLoading && (
        <ResultDiv>
          <InfoContainer>
            <ImgSpinner src="/Loading_2.gif" alt="loading...." />
          </InfoContainer>
        </ResultDiv>
      )}
      {weatherData && (
        <ResultDiv>
          <InfoContainer>
            <TempContainer>
              <Temp>{Math.round(weatherData?.temp)}°</Temp>
              <City>{weatherData?.city}</City>
            </TempContainer>

            <Weather>
              <Img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
              />
              <Img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
              />
              <Img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
              />
            </Weather>
          </InfoContainer>

          {weatherData &&  (
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

          {error && (
            <APIError>
              <RedText>API Error</RedText>
              <WhiteText>{error}</WhiteText>
              <Button
                name="Delete"
                variant="delete" // ← визуально как delete
                isDisabled={!error}
              ></Button>
            </APIError>
          )}
        </ResultDiv>
      )}
    </HomePageContainer>
  )
}
export default HomePage
