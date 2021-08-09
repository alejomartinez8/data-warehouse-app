import styled, { css } from 'styled-components';

interface IStyledAvatarContainer {
  size: number;
  placeholder?: string;
}

interface IStyledUploader {
  size?: number;
}

export const StyledAvatarContainer = styled.div<IStyledAvatarContainer>(
  ({ size = 200, placeholder }) => css`
    display: flex;
    justify-content: center;
    width: ${size}px;
    height: ${size}px;
    border: 2px dashed #9b9b9b;
    border-radius: 50%;
    cursor: pointer;
    background-color: #f7f7f7;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: 60% 60%;
    background-image: url(${placeholder});
  `,
);

export const StyledUploader = styled.input<IStyledUploader>(
  ({ size = 200 }) => css`
    display: block;
    opacity: 0;
    border-radius: 50%;
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    cursor: pointer;
    z-index: 2;
  `,
);
