import styled, { css } from 'styled-components';

interface IStyledButton {
  outline?: boolean;
  round?: boolean;
  size?: string;
}

const sizeMixin = (size: string) => {
  switch (size) {
    case 'large':
      return css`
        font-size: 15px;
        border-radius: 3px;
        padding: 10px 25px;
        font-weight: 400;
      `;

    case 'small':
      return css`
        font-size: 11px;
        padding: 7px 13px;
      `;

    case 'extraSmall':
      return css`
        font-size: 10px;
        padding: 5px 9px;
      `;
  }
};

export const StyledButton = styled.button<IStyledButton>(
  ({ theme, color, outline, size, round }) => {
    return css`
      background-color: ${outline ? theme.colors.white : theme.colors[color]};
      color: ${outline ? theme.colors[color] : theme.colors.white};
      border: 1px solid ${theme.colors[color]};

      display: inline-block;
      cursor: pointer;
      padding: 0.6rem 1rem;
      font-size: 12px;
      opacity: 1;
      border-radius: 3px;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      &:hover,
      &:focus {
        opacity: 0.9;
        transition: all 0.3s;
        box-shadow: 0 5px 15px rgb(0 0 0 / 5%), 0 4px 10px rgb(90 97 105 / 25%);
        ${outline &&
        css`
          background-color: ${theme.colors[color]};
          color: ${theme.colors.white};
        `}
      }

      ${sizeMixin(size)}

      ${round &&
      css`
        border-radius: 100px;
      `}
    `;
  },
);
