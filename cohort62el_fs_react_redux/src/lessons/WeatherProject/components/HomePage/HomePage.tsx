import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "lessons/WeatherProject/input_button/Button/Button"
import Input from "lessons/WeatherProject/input_button/Input/Input"

import { HOME_FORM_VALUES } from "./types"
import {
  ButtonsContainer,
  City,
  HomeFormContainer,
  HomePageContainer,
  InfoContainer,
  InputsContainer,
  ResultDiv,
  Temp,
  TempContainer,
  Weather,
} from "./styles"
import { useAppDispatch } from "store/hooks"
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

  const formik = useFormik({
    initialValues: {
      [HOME_FORM_VALUES.CITY]: "",
    },
    validationSchema: validationShema,
    validateOnChange: false,
    // Это функция, которая срабатывает при отправке формы
    onSubmit: values => {
      const newCity: WeatherData = { id: v4(), ...values }

      dispatch(weatherSliceAction.weatherCard(newCity)) // передаем данные введенные пользователем с values
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
            <Temp>18°</Temp>
            <City>Colorado</City>
          </TempContainer>

          <Weather>
            {/* {Array.from({ length: 3 }).map((_, index) => (
              <img key={index} src={weather.icon} alt="weather icon" />
            ))} */}
          </Weather>
        </InfoContainer>

        <ButtonsContainer>
          <Button name={"Save"}></Button>
          <Button name={"Delete"}></Button>
        </ButtonsContainer>
      </ResultDiv>
    </HomePageContainer>
  )
}
export default HomePage
