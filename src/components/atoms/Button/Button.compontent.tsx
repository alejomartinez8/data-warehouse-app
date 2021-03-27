import { StyledButton } from "./Button.styled";
import { ColorType } from "themes/baseTheme";
export interface IButtonProps {
  outline?: boolean;
  children: React.ReactNode;
  color?: ColorType;
}

export const Button = ({
  children,
  outline = false,
  color = "primary",
  ...props
}: IButtonProps) => {
  return (
    <StyledButton color={color} outline={outline} {...props}>
      {children}
    </StyledButton>
  );
};
