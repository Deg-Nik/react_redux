


export type ButtonTypes = "submit" | "reset" | "button" | undefined;

export type ButtonVariant = "default" | "delete";

export interface ButtonProps {
  name: string;
  type?: ButtonTypes;
  onClick?: () => void;
  isRed?: boolean;
  variant?: ButtonVariant; // 🆕 для Delete в проекте Weather
  isDisabled?: boolean;
}