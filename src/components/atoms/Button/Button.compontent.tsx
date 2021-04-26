/* eslint-disable react/display-name */
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { ColorType } from 'themes/baseTheme';
import { Icon } from '../Icon/Icon.component';
import { StyledButton } from './Button.styled';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  round?: boolean;
  block?: boolean;
  color?: ColorType;
  icon?: any;
  size?: 'large' | 'normal' | 'small' | 'extraSmall';
  disabled?: boolean;
  dropdown?: boolean;
  ref?: any;
}

export const Button = forwardRef(
  (
    {
      outline = false,
      round = false,
      block = false,
      disabled = false,
      dropdown = false,
      icon,
      color = 'default',
      size = 'normal',
      children,
      ...props
    }: IButtonProps,
    ref,
  ) => (
    <StyledButton
      ref={ref}
      color={color}
      outline={outline}
      size={size}
      round={round}
      block={block}
      disabled={disabled}
      dropdown={dropdown}
      {...props}
    >
      {icon ? <Icon icon={icon} /> : null}
      {children}
    </StyledButton>
  ),
);
