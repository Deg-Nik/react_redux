import styled from "@emotion/styled"

interface InputComponentProps {
  $error?: string | undefined
}

const generateInputBorder = (
  error: string | undefined,
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff"
  } else {
    if (!!error) {
      return "#ff6868ff"
    } else {
      return "#3f3f3f"
    }
  }
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`

export const InputComponent = styled.input<InputComponentProps>`
  width: 550px;
  height: 48px;
  border: 1px solid
    ${({ disabled, $error }) => generateInputBorder($error, disabled)};
  border-radius: 30px;
  border-color: white;
  background-color: #ffffff32;
  padding: 12px;
  outline: none;
  color: white;

  &::placeholder {
    color: white;
    font-size: 16px;
    padding-left: 10px;
  }
  
`

export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: #ff6868ff;
`
