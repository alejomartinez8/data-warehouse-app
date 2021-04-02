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

    default:
      return '';
  }
};

const roundMixin = (round: boolean) => {
  if (round) return 'border-radius: 100px';
  return null;
};

const blockMixin = (block: boolean) => {
  if (block)
    return css`
      display: block;
      width: 100%;
    `;
  return null;
};

export const StyledButton = styled.button<IStyledButton>(
  ({ theme, color, outline, size, round, block }) => css`
    cursor: pointer;
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
    opacity: 1;
    border-radius: 3px;
    padding: 0.375rem 0.75rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, opacity 0.15s ease-in-out;

    background-color: ${outline ? theme.colors.white : theme.colors[color]};
    color: ${outline ? theme.colors[color] : theme.colors.white};
    border: 1px solid ${color === 'default' ? '#e7eaec' : theme.colors[color]};

    &:hover,
    &:focus {
      opacity: 0.9;
      color: ${theme.colors.white};
      ${outline &&
      css`
        background-color: ${theme.colors[color]};
      `}
    }

    ${size && sizeMixin(size)};
    ${round && roundMixin(round)};
    ${block && blockMixin(block)};
  `,
);
