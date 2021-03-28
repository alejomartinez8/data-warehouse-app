import { HTMLAttributes } from 'react';
import { StyledButton } from './Button.styled';
import { ColorType } from 'themes/baseTheme';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  round?: boolean;
  color?: ColorType;
  size?: 'large' | 'normal' | 'small' | 'extraSmall';
}

export const Button = ({
  children,
  outline = false,
  round = false,
  color = 'default',
  size = 'normal',
  ...props
}: IButtonProps) => (
  <StyledButton color={color} outline={outline} size={size} round={round} {...props}>
    {children}
  </StyledButton>
);
