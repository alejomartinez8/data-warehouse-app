import { Button, Input } from 'components/atoms';
import styled, { css } from 'styled-components';

interface IFormContainer {
  signIn?: boolean;
}

export const StyledBody = styled.div`
  background-color: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

export const StyledFormContainer = styled.div<IFormContainer>(
  ({ signIn }) => css`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    color: black;
    width: 50%;
    transform: ${signIn ? null : `translateX(100%)`};
  `,
);

export const StyledForm = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const StyledSocialContainer = styled.div`
  margin: 20px 0;
`;

export const StyledRoundButton = styled(Button)`
  width: 40px;
  height: 40px;
  margin: 0 5px;
`;

export const StyledInput = styled(Input)`
  padding: 12px 15px;
  margin: 8px 0px;
`;

export const StyledOverlayContainer = styled.div<IFormContainer>(
  ({ signIn }) => css`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    transform: ${signIn ? null : `translateX(-100%)`};
  `,
);

export const StyledOverlay = styled.div<IFormContainer>(
  ({ signIn }) => css`
    background: linear-gradient(to right, #1ab394, #1ab394);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transition: transform 0.6s ease-in-out;
    transform: ${signIn ? 'translateX(0)' : 'translateX(50%)'};
  `,
);

const StyledOverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const StyledOverlayLeft = styled(StyledOverlayPanel)<IFormContainer>(
  ({ signIn }) =>
    css`
      transform: ${signIn ? 'translateX(-20%)' : 'translateX(0)'};
    `,
);

export const StyledOverlayRight = styled(StyledOverlayPanel)<IFormContainer>(
  ({ signIn }) =>
    css`
      right: 0;
      transform: ${signIn ? 'translateX(0)' : 'translateX(20%)'};
    `,
);
