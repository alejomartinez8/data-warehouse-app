import styled, { css } from 'styled-components';
import { ColorType } from 'themes/baseTheme';

interface IStyledProgressBar {
  width: number;
  color: ColorType;
}

export const StyledContainer = styled.span`
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  box-shadow: none;
`;

export const StyledProgressBar = styled.div<IStyledProgressBar>(
  ({ theme, width, color = 'default' }) => css`
    width: ${width}%;
    background-color: ${theme.colors[color]};
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
  `,
);
