import { HTMLAttributes } from 'react';
import { StyledButton } from './Button.styled';
import { ColorType } from 'themes/baseTheme';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  round?: boolean;
  block?: boolean;
  color?: ColorType;
  size?: 'large' | 'normal' | 'small' | 'extraSmall';
}

export const Button = ({
  outline = false,
  round = false,
  block = false,
  color = 'default',
  size = 'normal',
  children,
  ...props
}: IButtonProps) => (
  <StyledButton
    className="btn"
    color={color}
    outline={outline}
    size={size}
    round={round}
    block={block}
    {...props}
  >
    {children}
  </StyledButton>
);
