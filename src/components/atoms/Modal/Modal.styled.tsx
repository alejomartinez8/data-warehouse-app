import { Button } from 'components/atoms';
import styled, { keyframes, css } from 'styled-components';

interface IStyledModalDialogProps {
  size?: 'small' | 'large';
}

export const StyledModal = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 0;
  background: #49505790;
  backdrop-filter: blur(5px);
`;

export const StyledModalDialog = styled.div<IStyledModalDialogProps>(
  ({ size }) => css`
    position: relative;
    pointer-events: none;
    z-index: 2000;
    width: auto;
    margin: 0.5rem;

    @media (min-width: 576px) {
      max-width: 500px;
      margin: 1.75rem auto;
    }

    ${size === 'large' &&
    css`
      @media (min-width: 992px) {
        max-width: 800px;
      }
    `}

    ${size === 'small' &&
    css`
      @media (min-width: 576px) {
        max-width: 300px;
      }
    `}
  `,
);

const bounceInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(2000px);
    }
    60% {
        opacity: 1;
        transform: translateX(-30px);
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        transform: translateX(0);
    }
`;

// const flipInY = keyframes`
//   0% {
//     transform: perspective(400px) rotateY(90deg);
//     opacity: 0;
//   }
//   40% {

//     transform: perspective(400px) rotateY(-10deg);
//   }
//   70% {
//     transform: perspective(400px) rotateY(10deg);
//   }
//   100% {
//     transform: perspective(400px) rotateY(0deg);
//     opacity: 1;
//   }
// `;

export const StyledModalContent = styled.div`
  position: relative;
  animation-fill-mode: initial;
  z-index: inherit;
  background-clip: padding-box;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  outline: 0 none;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  animation-name: ${bounceInRight};
  animation-duration: 1s;
  max-height: 90vh;
`;

export const StyledModalHeader = styled.div`
  padding: 15px 15px;
  text-align: center;
  display: block;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

export const StyledCloseButton = styled(Button)`
  float: right;
  border: none;
`;

export const StyledModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  background: #f8fafb;
  overflow: auto;
  max-height: 80%;
`;

export const StyledModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
`;
