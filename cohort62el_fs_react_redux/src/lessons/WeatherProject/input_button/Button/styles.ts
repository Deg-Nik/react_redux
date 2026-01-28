import styled from "@emotion/styled"

//  1. ДОБАВИЛИ variant в props styled-компонента
interface ButtonComponentProps {
  $isRed: boolean
  $variant: "default" | "delete" // ← ДОБАВЛЕНО
  $fullWidth?: boolean
}

//  2. variant реально используется (delete ≠ red)
const generateButtonColor = (
  isRed: boolean,
  variant: "default" | "delete", // ← variant уже был, теперь используется
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff"
  }

  if (variant === "delete") {
    return "transparent" // ← ДОБАВЛЕНО: delete = прозрачная
  }

  if (isRed) {
    return "#fc3333ff"
  }

  return "#3678B4"
}

// ✅ 3. hover тоже учитывает variant
const generateButtonColorOnHover = (
  isRed: boolean,
  variant: "default" | "delete", // ← ДОБАВЛЕНО
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff"
  }

  if (variant === "delete") {
    return "rgba(255,255,255,0.1)" // ← hover для delete
  }

  if (isRed) {
    return "#ff6868ff"
  }

  return "#5f90be"
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  /*  4. delete должен иметь рамку, обычная — нет */
  border: ${({ $variant }) =>
    $variant === "delete"
      ? "1px solid rgba(255,255,255,0.7)" // ← ДОБАВЛЕНО
      : "none"};

  border-radius: 30px;
  padding: 0;
  height: 48px;
  width: 146px;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "146px")};


  /*  5. background теперь корректный */
  background-color: ${({ $isRed, $variant, disabled }) =>
    generateButtonColor($isRed, $variant, disabled)};

  color: #ffffff;
  font-size: 20px;
  font-weight: bold;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed, $variant, disabled }) =>
      generateButtonColorOnHover($isRed, $variant, disabled)};
  }
`
