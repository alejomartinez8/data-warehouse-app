/* eslint-disable react/display-name */
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { ColorType } from 'themes/baseTheme';
import { StyledButton } from './Button.styled';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  round?: boolean;
  block?: boolean;
  color?: ColorType;
  size?: 'large' | 'normal' | 'small' | 'extraSmall';
  ref?: any;
}

export const Button = forwardRef(
  (
    {
      outline = false,
      round = false,
      block = false,
      color = 'default',
      size = 'normal',
      children,
      ...props
    }: IButtonProps,
    ref,
  ) => (
    <StyledButton
      ref={ref}
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
  ),
);
