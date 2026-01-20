import { useContext } from "react";
import OutputForm from "../components/OutputForm/OutputForm";
import { PageWrapper } from "../CreateEmployee/styles";
import { EmployeeContext } from "../Layout";
import { v4 } from "uuid";



export default function Employees() {
  const { employeeData } = useContext(EmployeeContext);

  return (
    <PageWrapper>
      {employeeData.map((person) => (
        <OutputForm key={v4()} person={person} />
      ))}
    </PageWrapper>
  );
}

