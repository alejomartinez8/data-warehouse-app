import React from 'react';
import { Button, IButtonProps } from './Button.compontent';
import styled from 'styled-components';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const StyledContainer = styled.div`
  * {
    margin: 0.1rem;
  }
`;

//👇 We create a “template” of how args map to rendering
const Template = ({ children, ...props }: IButtonProps) => <Button {...props}>{children}</Button>;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const Normal = () => (
  <StyledContainer>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="success">Success</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
  </StyledContainer>
);

Normal.storyName = 'Normal Buttons';

export const ButtonOutline = () => (
  <StyledContainer>
    <Button outline>Default</Button>
    <Button outline color="primary">
      Primary
    </Button>
    <Button outline color="success">
      Success
    </Button>
    <Button outline color="info">
      Info
    </Button>
    <Button outline color="warning">
      Warning
    </Button>
    <Button outline color="danger">
      Danger
    </Button>
  </StyledContainer>
);

export const ButtonSize = () => (
  <StyledContainer>
    <Button color="primary" size="large">
      Large
    </Button>
    <Button color="primary">Normal</Button>
    <Button color="primary" size="small">
      Small
    </Button>
    <Button color="primary" size="extraSmall">
      Extra Small
    </Button>
  </StyledContainer>
);

export const ButtonType = () => (
  <StyledContainer>
    <Button color="primary">Normal</Button>
    <Button color="primary" round>
      Round
    </Button>
  </StyledContainer>
);

export const ButtonBlcok = () => (
  <StyledContainer>
    <Button color="primary" block>
      Button Block
    </Button>
  </StyledContainer>
);
