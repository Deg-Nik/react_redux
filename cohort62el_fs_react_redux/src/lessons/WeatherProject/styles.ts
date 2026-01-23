import styled from "@emotion/styled"
import { NavLink, type NavLinkRenderProps } from "react-router-dom"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url("/background.jpg");
  background-size: cover;
  background-position: center;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid black;
  padding: 42px 84px;
  background-color: #122d4d80;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 180px;
  cursor: pointer;
  font-weight: 900;
  font-size: 30px;
  color: white;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 56px;
  height: 100%;
  align-items: center;
`

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: white;
`

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 40px;
`

export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
})
