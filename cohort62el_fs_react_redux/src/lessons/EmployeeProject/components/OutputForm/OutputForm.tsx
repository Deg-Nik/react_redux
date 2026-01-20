
import {
  EmployeesWrapper,
  OutputWrapper,
  LabelWrapper,
  UserText,
} from "./styles";
import type { OutputProps } from "./types";


function OutputForm({person}: OutputProps) {
    
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
      </OutputWrapper>
    </EmployeesWrapper>
  );
}

export default OutputForm;
