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
  Sunrise,
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
  const hasApiError = useAppSelector(weatherSliceSelectors.hasError)
  const isLoading = useAppSelector(weatherSliceSelectors.isLoading)

  const showResult = Boolean(weatherData || hasApiError || isLoading)

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
      alert("City saved")
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
        dispatch(weatherSliceAction.setError(false))

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        )

        const data = response.data
        const newCity: WeatherData = {
          id: v4(),
          city: city,
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
              <ImgSpinner src="/Loading_2.gif" alt="Loading...." />
            </InfoContainer>
          )}

          {hasApiError && !isLoading && (
            <APIError>
              <RedText>API Error:</RedText>
              <WhiteText>{hasApiError}</WhiteText>
              <Button
                name="Delete"
                variant="delete"
                isDisabled={!hasApiError}
                onClick={() => {
                  dispatch(weatherSliceAction.setError(false))
                  dispatch(weatherSliceAction.clearCurrentWeather())
                  setTimeout(() => {
                    alert("Error cleared")
                  }, 0)
                }}
              />
            </APIError>
          )}

          {weatherData && !hasApiError && !isLoading && (
            <>
              <InfoContainer>
                <TempContainer>
                  <Temp>{Math.round(weatherData.temp)}°</Temp>
                  <City>{weatherData.city}</City>
                </TempContainer>

                <Weather>
                  <Img
                    src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                  <Img
                    src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                  <Img
                    src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                </Weather>

                <Sunrise>
                  <p>
                    Sunrise:{" "}
                    {new Date(
                      weatherData.details.sunrise * 1000,
                    ).toLocaleTimeString()}
                  </p>
                  <p>
                    Sunset:{" "}
                    {new Date(
                      weatherData.details.sunset * 1000,
                    ).toLocaleTimeString()}
                  </p>
                </Sunrise>
              </InfoContainer>

              {weatherData.details && (
                <InfoContainer>
                  <WhiteText>
                    Feels like: {Math.round(weatherData.details.feelsLike)}°C
                  </WhiteText>
                  <p>
                    Min: {Math.round(weatherData.details.tempMin)}°C / Max:{" "}
                    {Math.round(weatherData.details.tempMax)}°C
                  </p>
                  <p>Pressure: {weatherData.details.pressure} hPa</p>
                  <p>Visibility: {weatherData.details.visibility / 1000} km</p>
                  <p>
                    Wind: {weatherData.details.windSpeed} m/s,{" "}
                    {weatherData.details.windDeg}°
                  </p>
                  <p>Humidity: {weatherData.details.humidity}%</p>
                </InfoContainer>
              )}

              <ButtonsContainer>
                <Button name="Save" variant="delete" onClick={Save} />
                <Button name="Delete" variant="delete" onClick={Delete} />
              </ButtonsContainer>
            </>
          )}
        </ResultDiv>
      )}
    </HomePageContainer>
  )
}
export default HomePage
