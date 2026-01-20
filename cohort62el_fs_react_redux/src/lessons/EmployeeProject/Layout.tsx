import { ROUTES } from "constants/routes";
import {
  getActiveStyles,
  Header,
  HeaderLink,
  LayoutWrapper,
  Logo,
  Main,
  NavigationContainer,
} from "./styles";
import type { EmployeeContextType, EmployeeData, LayoutProps } from "./types";
import { createContext, useState } from "react";

// контекст где хранятся данные введенные пользователем
export const EmployeeContext = createContext<EmployeeContextType>({
  employeeData: [],
  setEmployeeData: () => {},
});

// export const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);


function Layout({ children }: LayoutProps) {

  const [employeeData, setEmployeeData] = useState<EmployeeData[]>([]);
  console.log("layout", { employeeData });

  return (
    //передает данные и функции другим компонентам
    <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
      <LayoutWrapper>
        <Header>
          <Logo>App Logo</Logo>
          <NavigationContainer>
            <HeaderLink style={getActiveStyles} to={ROUTES.CREATE_EMPLOYEE}>
              Create Employee
            </HeaderLink>
            <HeaderLink style={getActiveStyles} to={ROUTES.EMPLOYEES}>
              Employees
            </HeaderLink>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </EmployeeContext.Provider>
  );
}

export default Layout;
