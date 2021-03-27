import styled, { css } from "styled-components";
import { IButtonProps } from "./Button.compontent";

interface IStyledButton extends IButtonProps {}

export const StyledButton = styled.button<IStyledButton>(
  ({ backgroundColor, variant }) => {
    const variantStyles = {
      primary: css`
        background-color: ${backgroundColor || "#1d72c2"};
        color: #ffffff;
      `,
      secondary: css`
        background-color: ${backgroundColor || "#ffffff"};
        color: #1d72c2;
        border-color: #1d72c2;
      `,
    };

    return css`
      cursor: pointer;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      ${variantStyles[variant]};
    `;
  }
);
