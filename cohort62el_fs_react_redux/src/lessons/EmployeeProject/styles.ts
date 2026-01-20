import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  border-bottom: 2px solid black;
  padding: 42px 84px;
`;

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
  height: 100%;
  width: 80px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 56px;
  height: 100%;
  align-items: center;
 `;

export const HeaderLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 400;
  text-decoration: none;
  color: black;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 40px;
  background-color: #112233;
`;



export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});