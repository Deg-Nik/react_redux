import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({ name, type = "button", onClick, isRed = false, isDisabled = false  }: ButtonProps) {
  return (
    <ButtonComponent disabled={isDisabled}  $isRed={isRed} className="button_component" type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
