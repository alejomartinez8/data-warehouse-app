/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

interface IStyledButton {
  outline?: boolean;
  round?: boolean;
  block?: boolean;
  dropdown?: boolean;
  size?: string;
  height?: number;
}

export const StyledButton = styled.button<IStyledButton>(
  ({ theme, color, outline, size, round, block, disabled, dropdown, height }) => {
    const stylesDisabled = css`
      opacity: 0.6;
    `;

    const stylesNotDisabled = css`
      cursor: pointer;
      &:hover,
      &:focus {
        &,
        > i {
          opacity: 0.8;
          ${outline &&
          css`
            color: ${theme.colors.white};
            background-color: ${theme.colors[color]};
          `}
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
        }
      }
    `;

    const roundMixin = css`
      border-radius: ${round ? '100px' : null};
    `;

    const blockMixin = css`
      display: ${block ? 'block' : null};
      width: ${block ? '100%' : null};
    `;

    const sizeMixin = () => {
      switch (size) {
        case 'large':
          return css`
            font-size: 1.5rem;
            font-weight: 600;
          `;

        case 'small':
          return css`
            font-size: 0.9rem;
          `;

        case 'extraSmall':
          return css`
            font-size: 0.7rem;
          `;

        default:
          return css`
            font-size: 1rem;
            font-weight: 400;
          `;
      }
    };

    const dropdownMixin = css`
      ${dropdown
        ? css`
            &::after {
              display: inline-block;
              margin-left: 0.255em;
              vertical-align: 0.1em;
              content: '';
              border-top: 0.3em solid;
              border-right: 0.3em solid transparent;
              border-bottom: 0;
              border-left: 0.3em solid transparent;
            }
          `
        : null}
    `;

    const iconMixin = css`
      > i {
        ${sizeMixin()};
        color: ${outline ? theme.colors[color] : theme.colors.white};
        margin-right: 0.3em;
      }
    `;

    return css`
      display: inline-block;
      text-align: center;
      line-height: 1.5;
      opacity: 1;
      margin: 0 0.3rem;
      border-radius: 3px;
      padding: 0.375em 0.75em;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, opacity 0.15s ease-in-out;

      height: ${height}px;

      background-color: ${outline
        ? theme.colors.white
        : color === 'default'
        ? theme.colors.white
        : theme.colors[color]};

      color: ${outline
        ? theme.colors[color]
        : color === 'default'
        ? 'inherit'
        : theme.colors.white};

      border: 1px solid ${color === 'default' ? '#e7eaec' : theme.colors[color]};

      ${sizeMixin()};
      ${disabled ? stylesDisabled : stylesNotDisabled}
      ${dropdownMixin}
      ${roundMixin};
      ${blockMixin};
      ${iconMixin};
    `;
  },
);
