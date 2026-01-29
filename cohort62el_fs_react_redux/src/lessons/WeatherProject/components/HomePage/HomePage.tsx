import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"

import Button from "lessons/WeatherProject/input_button/Button/Button"
import Input from "lessons/WeatherProject/input_button/Input/Input"

import { HOME_FORM_VALUES } from "lessons/WeatherProject/types"
import {
  HomeFormContainer,
  HomePageContainer,
  ImgSpinner,
  InfoContainer,
  InputsContainer,
  ResultDiv,
} from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/redux/weatherSlice/weatherSlice"

import { WeatherData } from "lessons/WeatherProject/types"
import { v4 } from "uuid"
import HomeApiError from "./HomeApiError/HomeApiError"
import HomeCard from "./HomeCard/HomeCard"




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

  const showResult = Boolean(weatherData || hasApiError || isLoading)

  const API_KEY = "f09be79d24a66e5c14c0f50d0b27fe28"

  const formik = useFormik({
    initialValues: {
      [HOME_FORM_VALUES.CITY]: "",
    },
    validateOnChange: false,

    onSubmit: async values => {
      try {
        await validationShema.validate(values)
        const city = values[HOME_FORM_VALUES.CITY]

        dispatch(weatherSliceAction.clearCurrentWeather())
        dispatch(weatherSliceAction.startLoading())
        dispatch(weatherSliceAction.setError(false))

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
          details: {
            feelsLike: data.main.feels_like,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            pressure: data.main.pressure,
            visibility: data.visibility,
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            humidity: data.main.humidity,
          },
        }

        dispatch(weatherSliceAction.weatherCard(newCity))
      } catch (error: any) {
        if (error.name === "ValidationError") {
          alert(error.message)
          return
        }

        const message =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message ||
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

      {showResult && (
        <ResultDiv>
          {isLoading && (
            <InfoContainer>
              <ImgSpinner src="/Loading_2.gif" alt="Loading..." />
            </InfoContainer>
          )}

          {hasApiError && !isLoading && <HomeApiError error={hasApiError} />}

          {weatherData && !hasApiError && !isLoading && (
            <HomeCard weather={weatherData} />
          )}
        </ResultDiv>
      )}
    </HomePageContainer>
  )
}

export default HomePage
