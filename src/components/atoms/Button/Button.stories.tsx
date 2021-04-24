import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownMenu } from 'components/atoms';
import {
  faCheck,
  faExclamationTriangle,
  faPaste,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button.compontent';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const StyledContainer = styled.div`
  * {
    margin: 0.1rem;
  }
  position: relative;
`;

// 👇 We create a “template” of how args map to rendering
const Template = ({ children, ...props }) => <Button {...props}>{children}</Button>;

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { children: 'Button', color: 'primary' };

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

export const Disabled = () => (
  <StyledContainer>
    <Button disabled>Default</Button>
    <Button color="primary" disabled>
      Primary
    </Button>
    <Button color="success" disabled>
      Success
    </Button>
    <Button color="info" disabled>
      Info
    </Button>
    <Button color="warning" disabled>
      Warning
    </Button>
    <Button color="danger" disabled>
      Danger
    </Button>
  </StyledContainer>
);

Disabled.storyName = 'Disabled Buttons';

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

export const ButtonBlock = () => (
  <StyledContainer>
    <Button color="primary" block>
      Button Block
    </Button>
  </StyledContainer>
);

export const ButtonIcon = () => (
  <StyledContainer>
    <Button icon={faCheck} color="primary">
      Submit
    </Button>
    <Button icon={faUpload} color="success">
      Upload
    </Button>
    <Button icon={faPaste} color="info">
      Edit
    </Button>
    <Button icon={faExclamationTriangle} color="warning">
      Warning
    </Button>
    <Button icon={faFacebook} color="success" outline>
      Login with Facebook
    </Button>
  </StyledContainer>
);

export const ButtonDropdown = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleOnClick = () => {
    setCollapsed(!collapsed);
  };
  return (
    <StyledContainer style={{ marginBottom: '100px' }}>
      <Button dropdown onClick={handleOnClick} color="primary" outline>
        Action
      </Button>
      <DropdownMenu collapsed={collapsed}>
        <DropdownMenu.Item>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Item>Item 3</DropdownMenu.Item>
      </DropdownMenu>
    </StyledContainer>
  );
};
