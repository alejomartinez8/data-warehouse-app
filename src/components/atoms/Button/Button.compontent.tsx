import { StyledButton } from "./Button.styled";

export interface IButtonProps {
  backgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  backgroundColor,
  onClick,
  variant = "primary",
  ...props
}: IButtonProps) => {
  return (
    <StyledButton
      type="button"
      backgroundColor={backgroundColor}
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
