
import Button from "components/Button/Button";
import {
  EmployeesWrapper,
  OutputWrapper,
  LabelWrapper,
  UserText,
  ButtonWrapper,
  CardWrapper,

} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { employeeSliceAction, employeeSliceSelectors } from "store/redux/employeeSlice/employeeSlice";
import { EmployeeData } from "lessons/EmployeeProject/types";




function OutputForm({person}: any) {

  const dispatch = useAppDispatch()
  
  const onDelete = () =>{
    dispatch(employeeSliceAction.deleteCard(person.id))
  };

  return (
    
      <EmployeesWrapper>
        <CardWrapper>
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
            </OutputWrapper>
        </CardWrapper>
        <ButtonWrapper><Button name="Delete" isRed onClick={onDelete}/></ButtonWrapper>
      </EmployeesWrapper>
  );
}

export default OutputForm;
