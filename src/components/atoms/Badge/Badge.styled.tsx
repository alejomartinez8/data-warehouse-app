import styled, { css } from 'styled-components';
import { ColorType } from 'themes/baseTheme';

interface IStyledLabel {
  color?: ColorType;
}

export const StyledLabel = styled.span<IStyledLabel>(
  ({ theme, color = 'default' }) => css`
    background-color: ${theme.colors[color]};
    color: ${color === 'gray' ? '#5e5e5e' : '#ffffff'};
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 10px;
    padding: 3px 8px;
    text-shadow: none;
    border-radius: 0.25em;
    line-height: 1;
    white-space: nowrap;
  `,
);
