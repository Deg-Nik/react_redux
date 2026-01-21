import { ROUTES } from "constants/routes"
import {
  getActiveStyles,
  Header,
  HeaderLink,
  LayoutWrapper,
  Logo,
  Main,
  NavigationContainer,
} from "./styles"
import type { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  return (
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
  )
}

export default Layout
