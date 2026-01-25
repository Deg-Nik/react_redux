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
import { weatherSliceAction } from "store/redux/weatherSlice/weatherSlice"
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
  const API_KEY = "f09be79d24a66e5c14c0f50d0b27fe28";

  const hasApiError = true // при подключении redux true нужно заменить на const hasApiError = useAppSelector(state => state.weather.hasError);

  const formik = useFormik({
    initialValues: {
      [HOME_FORM_VALUES.CITY]: "",
    },
    validationSchema: validationShema,
    validateOnChange: false,
    // Это функция, которая срабатывает при отправке формы
    onSubmit: async values => {
      const city = values[HOME_FORM_VALUES.CITY]
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        if (!response.ok) {
          throw new Error("API error")
        }
        const data = await response.json()
        console.log (data)
        const newCity: WeatherData = {
          id: v4(), city: city, temp: data.main.temp, weather: data.weather,
          cityName: undefined,
          temperature: undefined
          
        }
        dispatch(weatherSliceAction.weatherCard(newCity)) // передаем данные введенные пользователем с values
      }
      catch(error){
        console.error(error)
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
        <Button name="Search" type="submit" />
      </HomeFormContainer>

      <ResultDiv>
        <InfoContainer>
          <TempContainer>
            <Temp>{}</Temp>
            <City>{}</City>
          </TempContainer>

          <Weather>
            {/* {Array.from({ length: 3 }).map((_, index) => (
              <img key={index} src={weather.icon} alt="weather icon" />
            ))} */}
          </Weather>
        </InfoContainer>

        <ButtonsContainer>
          <Button
            name="Save"
            type="submit"
            variant="delete" // ← визуально как delete
            isDisabled={!formik.isValid || formik.isSubmitting}
          ></Button>
          <Button
            name="Delete"
            variant="delete" // ← визуально как delete
            isDisabled={!hasApiError}
          ></Button>
        </ButtonsContainer>

       <APIError>
          <RedText>API Error</RedText>
          <WhiteText>Something went wrong with API data</WhiteText>
          <Button
            name="Delete"
            variant="delete" // ← визуально как delete
            isDisabled={!hasApiError}
          ></Button>
        </APIError> 
      </ResultDiv>
    </HomePageContainer>
  )
}
export default HomePage
