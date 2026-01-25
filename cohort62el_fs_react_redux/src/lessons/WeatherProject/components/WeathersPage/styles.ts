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

export const CardsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 16px;
`;
export const Card = styled.div`
border: 1px solid black;
padding: 10px;
width: 100px;
text-align: center;
`;

export const DeleteButton = styled.button`
margin-top: 10px;
`;

export const DeleteAllButton = styled.button`
margin-top: 20px;
`;