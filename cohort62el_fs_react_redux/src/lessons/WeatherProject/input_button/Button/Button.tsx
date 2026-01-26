import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  name,
  type = "button",          // ← OK: дефолт для HTML button
  onClick,
  isRed = false,            // ← OK: используется для real danger-кнопок
  variant = "default",      // ← ВАЖНО: дефолт variant добавлен
  isDisabled = false,       // ← OK: пробрасывается в disabled
  $fullWidth,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={isDisabled} // ← ВАЖНО: именно disabled, а не кастомный проп
      $isRed={isRed}        // ← OK: Emotion-проп, не попадёт в DOM
      $variant={variant}   // ← ДОБАВЛЕНО: нужен для delete-варианта
      $fullWidth={$fullWidth}
      className="button_component"
      type={type}
      onClick={onClick}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
