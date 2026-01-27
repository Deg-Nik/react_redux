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
        <Logo>Weather App</Logo>
        <NavigationContainer>
          <HeaderLink style={getActiveStyles} to={ROUTES.HOME}>
            Home
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.WEATHERS}>
            Weather
          </HeaderLink>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout