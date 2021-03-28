import styled, { css } from 'styled-components';

interface IStyledButton {
  outline?: boolean;
  round?: boolean;
  block?: boolean;
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

const roundMixin = (round: boolean) => {
  if (round) return 'border-radius: 100px';
};

export const StyledButton = styled.button<IStyledButton>(
  ({ theme, color, outline, size, round, block }) => {
    return css`
      opacity: 1;
      border-radius: 3px;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, opacity 0.15s ease-in-out;

      background-color: ${outline ? theme.colors.white : theme.colors[color]};
      color: ${color === 'default'
        ? 'inherit'
        : outline
        ? theme.colors[color]
        : theme.colors.white};
      border: 1px solid ${color === 'default' ? '#e7eaec' : theme.colors[color]};

      &:hover,
      &:focus {
        opacity: 0.9;
        box-shadow: 0 5px 15px rgb(0 0 0 / 5%), 0 4px 10px rgb(90 97 105 / 25%);
        color: ${color === 'default' ? 'border: 1px solid #d2d2d2' : theme.colors.white};
        ${outline &&
        css`
          background-color: ${theme.colors[color]};
        `}
      }

      ${sizeMixin(size)};
      ${roundMixin(round)};
    `;
  },
);
