import styled, { css } from 'styled-components';

interface IStyledImagePreview {
  size?: number;
}

export const StyledImagePreview = styled.img<IStyledImagePreview>(
  ({ size }) => css`
    height: ${size ? `${size}px` : 'auto'};
    width: ${size ? `${size}px` : '100%'};
    border-radius: 50%;
    z-index: 1;
  `,
);
