/* eslint-disable react/display-name */
import React, { forwardRef, HTMLAttributes } from 'react';
import { ColorType } from 'themes/baseTheme';
import { StyledButton } from './Button.styled';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  round?: boolean;
  block?: boolean;
  color?: ColorType;
  size?: 'large' | 'normal' | 'small' | 'extraSmall';
  children: React.ReactNode;
  ref?: any;
  type?: any;
  // [x: string]: any;
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
