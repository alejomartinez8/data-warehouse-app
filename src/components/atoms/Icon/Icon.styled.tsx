import styled, { css } from 'styled-components';

interface IStyledIcon {
  color?: string;
}

export const StyledIcon = styled.i<IStyledIcon>(
  ({ theme, color }) => css`
    color: ${color ? color : theme.colors.default};
  `,
);
