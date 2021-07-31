import styled, { css } from 'styled-components';

interface IStyledToastContainer {
  show: boolean;
}

export const StyledToastContainer = styled.div<IStyledToastContainer>(
  ({ show }) => css`
    display: block;
    opacity: ${show ? 1 : 0};
    max-width: 350px;
    min-width: 200px;
    overflow: hidden;
    font-size: 0.875rem;
    background-color: #e7eaec;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
    backdrop-filter: blur(10px);
    border-radius: 0.25rem;
    transition: opacity 0.15s linear;
    position: fixed;
    bottom: 50px;
    left: 20px;
    z-index: 3000;
  `,
);

export const StyledToastHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const StyledToastBody = styled.div`
  background-color: #fbfbfb;
  font-size: 0.775rem;
  padding: 0.75rem;
`;

export const StyledToastTitle = styled.strong`
  margin-left: 10px;
  margin-right: auto;
  font-weight: bolder;
`;

export const StyledToastCloseButton = styled.button`
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  appearance: none;
  margin-left: 0.5rem;
  margin-bottom: 0.2rem;
  font-size: 1.3rem;
  font-weight: 700;
  font-family: inherit;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  text-transform: none;
`;
