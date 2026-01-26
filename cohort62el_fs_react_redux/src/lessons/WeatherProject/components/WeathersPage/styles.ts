import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  padding: 20px;
`
export const Title = styled.h1`
  margin-bottom: 20px;
`

export const Nav = styled.nav`
  margin-bottom: 20px;
`

export const NavLink = styled.span<{ active?: boolean }>`
  margin-right: 15px;
  cursor: pointer;
  font-weight: ${active => (active ? "bold" : "normal")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`

export const DeleteAllButton = styled.button`
  margin-top: 20px;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 709px;
  height: 220px;
  border: none;
  border-radius: 16px;
  background-color: rgba(47, 72, 111, 0.75);
  transition: background-color 0.3s ease;
`

export const Left = styled.div`
  width: 85px;
  height: 70px;
`

export const Temp = styled.div`
  font-size: 57px;
  color: white;
`

export const City = styled.div`
  font-size: 20px;
  color: white;
  font-weight: bold;
`

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 290px;
  height: 74px;
`

export const Img = styled.img`

`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 146px;
  height: 48px;
  justify-content: center;
`

export const Button = styled.button`
  background-color: none;
`
