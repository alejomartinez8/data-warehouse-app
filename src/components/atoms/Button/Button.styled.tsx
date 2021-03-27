import styled, { css } from "styled-components";
import { IButtonProps } from "./Button.compontent";

interface IStyledButton extends IButtonProps {}

export const StyledButton = styled.button<IStyledButton>(
  ({ theme, color, outline }) => {
    return css`
      background-color: ${outline ? theme.colors.white : theme.colors[color]};
      color: ${outline ? theme.colors[color] : theme.colors.white};
      border: 1px solid ${theme.colors[color]};

      cursor: pointer;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    `;
  }
);
