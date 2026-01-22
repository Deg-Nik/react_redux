import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { CREATE_FORM_VALUES } from "./types"
import { CreateFormContainer, InputsContainer } from "./styles"
import { useAppDispatch } from "store/hooks"
import { employeeSliceAction } from "store/redux/employeeSlice/employeeSlice"
import { EmployeeData } from "lessons/EmployeeProject/types"
import { v4 } from "uuid"

const validationShema = Yup.object().shape({
  [CREATE_FORM_VALUES.NAME]: Yup.string()
    .required("Name field is required")
    .min(2, "minimum 2 simbols")
    .max(50, "maximum 50 simbols"),
  [CREATE_FORM_VALUES.SURNAME]: Yup.string()
    .required("Surname field is required")
    .min(2, "minimum 2 simbols")
    .max(15, "maximum 15 simbols"),
  [CREATE_FORM_VALUES.AGE]: Yup.string()
    .required("Age field is required")
    .min(1, "min 1 simbols")
    .max(3, "max 3 simbols"),
  [CREATE_FORM_VALUES.JOB_POSITION]: Yup.string()
    .min(1, "min 1 simbols")
    .max(30, "max 30 simbols"),
})

function CreateForm() {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      [CREATE_FORM_VALUES.NAME]: "",
      [CREATE_FORM_VALUES.SURNAME]: "",
      [CREATE_FORM_VALUES.AGE]: "",
      [CREATE_FORM_VALUES.JOB_POSITION]: "",
    },
    validationSchema: validationShema,
    validateOnChange: false,
    onSubmit: values => {
      const newEmployee: EmployeeData = { id: v4(), ...values }

      dispatch(employeeSliceAction.personCard(newEmployee)) // передаем данные введенные пользователем с values
      console.log("formik")
      console.log(values)
    },
  })
  return (
    <CreateFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="name-id"
          name={CREATE_FORM_VALUES.NAME}
          placeholder="Enter your name"
          label="Name*"
          value={formik.values[CREATE_FORM_VALUES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.NAME]}
        />
        <Input
          id="surname-id"
          name={CREATE_FORM_VALUES.SURNAME}
          type="surname"
          placeholder="Enter your surname"
          label="Surname*"
          value={formik.values[CREATE_FORM_VALUES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.SURNAME]}
        />
        <Input
          id="age-id"
          name={CREATE_FORM_VALUES.AGE}
          type="age"
          placeholder="Enter your age"
          label="Age*"
          value={formik.values[CREATE_FORM_VALUES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.AGE]}
        />
        <Input
          id="job-id"
          name={CREATE_FORM_VALUES.JOB_POSITION}
          type="job"
          placeholder="Enter your job position"
          label="Job Position"
          value={formik.values[CREATE_FORM_VALUES.JOB_POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.JOB_POSITION]}
        />
      </InputsContainer>
      <Button name="Create" type="submit" />
    </CreateFormContainer>
  )
}
export default CreateForm
