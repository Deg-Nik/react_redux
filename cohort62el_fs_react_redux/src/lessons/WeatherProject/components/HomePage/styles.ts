import styled from "@emotion/styled"

export const HomePageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const HomeFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 710px;
  height: 48px;
  /* min-height: 592px;
  max-height: fit-content; */
  padding-top: 100px;
  margin-bottom: 100px;
  border-radius: 4px;
  gap: 14px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const ResultDiv = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  width: 709px;
  height: 220px;
  border: none;
  border-radius: 16px;
  background-color: rgba(47, 72, 111, 0.75);
  transition: background-color 0.3s ease;
`
export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: space-evenly;
`

export const TempContainer = styled.div`
  width: 85px;
  height: 70px;
  
`

export const Temp = styled.p`
  font-size: 57px;
  color: white;
`

export const City = styled.p`
  font-size: 20px;
  color: white;
  font-weight: bold;
`

export const Weather = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 290px;
  height: 74px;
`

export const Img = styled.img`

`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: center;
  gap: 80px;
`

export const Button = styled.button`
  background-color: none;
`
export const ErrorContainer = styled.div`

`;

export const APIError = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 709px;
  height: 220px;
  border: none;
  border-radius: 16px;
  background-color: rgba(47, 72, 111, 0.75);
  transition: background-color 0.3s ease;
`

export const RedText = styled.p`
margin-top: 10px;
font-size: 57px;
font-weight: 500;
color: red;
`;

export const WhiteText = styled.p`
margin-bottom: 10px;
font-size: 18px;
font-weight: 400;
color: white;
`;