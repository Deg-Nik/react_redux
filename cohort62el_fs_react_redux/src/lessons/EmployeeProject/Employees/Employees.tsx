import { useAppDispatch, useAppSelector } from "store/hooks"
import OutputForm from "../components/OutputForm/OutputForm"
import { PageWrapperEmployees, ButtonWP, UserCard } from "./styles"
import {
  employeeSliceAction,
  employeeSliceSelectors,
} from "store/redux/employeeSlice/employeeSlice"
import Button from "components/Button/Button"

export default function Employees() {
  const dispatch = useAppDispatch()
  const employees = useAppSelector(employeeSliceSelectors.person)
  const removeAllEmployees = () => {
    dispatch(employeeSliceAction.deleteCards())
  }

  return (
    <PageWrapperEmployees>
      <UserCard>
        {employees.map(person => (
          <OutputForm key={person.id} person={person} />
        ))}
      </UserCard>
      <ButtonWP>
        {employees.length >= 2 && (
          <Button
            name="Remove All Employees"
            isRed
            onClick={removeAllEmployees}
          />
        )}
      </ButtonWP>
    </PageWrapperEmployees>
  )
}
