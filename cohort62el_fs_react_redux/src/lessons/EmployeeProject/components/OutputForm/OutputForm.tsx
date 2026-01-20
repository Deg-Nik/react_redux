
import Button from "components/Button/Button";
import {
  EmployeesWrapper,
  OutputWrapper,
  LabelWrapper,
  UserText,
} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { employeeSliceAction, employeeSliceSelectors } from "store/redux/employeeSlice/employeeSlice";
import { EmployeeData } from "lessons/EmployeeProject/types";




function OutputForm({person}: any) {

  const dispatch = useAppDispatch()
  

  

  const onDelete = () =>{};
  const removeAllEmployees = () =>{};
  return (
    <EmployeesWrapper>
      <OutputWrapper>
        <LabelWrapper>Name</LabelWrapper>
        <UserText>{person.name}</UserText>
      </OutputWrapper>
      <OutputWrapper>
        <LabelWrapper>Surname</LabelWrapper>
        <UserText>{person.surname}</UserText>
      </OutputWrapper>
      <OutputWrapper>
        <LabelWrapper>Age</LabelWrapper>
        <UserText>{person.age}</UserText>
      </OutputWrapper>
      <OutputWrapper>
        <LabelWrapper>Job Position</LabelWrapper>
        <UserText>{person.job_position}</UserText>
        <Button name="Delete" isRed onClick={onDelete}/>
      </OutputWrapper>
      <Button name="Remove All Employees!" isRed onClick={removeAllEmployees}/>
    </EmployeesWrapper>
  );
}

export default OutputForm;
