
import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { HOME_FORM_VALUES } from "./types"
import { HomeFormContainer, InputsContainer } from "./styles"
import { useAppDispatch } from "store/hooks"
import { weatherSliceAction } from "store/"
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

      dispatch(weatherSliceAction.personCard(newCity)) // передаем данные введенные пользователем с values
      console.log("formik")
      console.log(values)
    },
  })
  return (
    <HomeFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="name-id"
          name={HOME_FORM_VALUES.CITY}
          placeholder="Enter your city"
          label="City*"
          value={formik.values[HOME_FORM_VALUES.CITY]}
          onChange={formik.handleChange}
          error={formik.errors[HOME_FORM_VALUES.CITY]}
        />

      </InputsContainer>
      <Button name="Cearch" type="submit" />
    </HomeFormContainer>
  )
}
export default HomePage