import styled, { css } from 'styled-components';

interface IStyledToastContainer {
  show: boolean;
  color: 'Success' | 'Error';
}

export const StyledToastContainer = styled.div<IStyledToastContainer>(({ show, color }) => {
  const mixinColor = () => {
    switch (color) {
      case 'Success':
        return css`
          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
        `;

      case 'Error':
        return css`
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
        `;

      default:
        return null;
    }
  };

  return css`
    opacity: ${show ? 1 : 0};
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: opacity 0.15s linear;
    position: fixed;
    bottom: 50px;
    left: 20px;
    z-index: 3000;
    display: flex;
    align-items: center;

    ${mixinColor()}
  `;
});

export const StyledToastBody = styled.div`
  padding: 0 0.75rem;
`;

export const StyledToastCloseButton = styled.button`
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  appearance: none;

  float: right;
  font-size: 1.3rem;
  font-weight: 700;
  font-family: inherit;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
`;
