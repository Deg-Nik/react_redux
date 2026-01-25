import styled from "@emotion/styled";


export const PageWrapper = styled.div`
padding: 20px;
`;
export const Title = styled.h1`
margin-bottom: 20px;
`;

export const Nav = styled.nav`
margin-bottom: 20px;
`;

export const NavLink = styled.span<{active?: boolean}>`
margin-right: 15px;
cursor: pointer;
font-weight: ${active => (active ? "bold" : "normal")};
text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;

export const DeleteAllButton = styled.button`
margin-top: 20px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`

export const Card = styled.div`
  width: 520px;
  padding: 24px 32px;
  border-radius: 16px;

  background: linear-gradient(
    135deg,
    rgba(30, 60, 114, 0.85),
    rgba(42, 82, 152, 0.85)
  );

  backdrop-filter: blur(10px);
  color: white;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const Temp = styled.div`
  font-size: 48px;
  font-weight: 700;
`

export const City = styled.div`
  font-size: 16px;
  opacity: 0.9;
`

export const Icons = styled.div`
  display: flex;
  gap: 8px;

  img {
    width: 40px;
    height: 40px;
  }
`

export const DeleteButton = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid white;
  background: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`