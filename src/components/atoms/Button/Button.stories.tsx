import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import { Button } from "./Button.compontent";
import styled from "styled-components";

export default {
  title: "Atoms/Button",
  component: Button,
};

const StyledContainer = styled.div`
  * {
    margin: 0 0.1rem;
  }
`;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (props) => (
  <Button {...props}>{props.children}</Button>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { children: "Button" };

export const Normal = () => {
  return (
    <StyledContainer>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </StyledContainer>
  );
};

Normal.storyName = "Normal Buttons";

export const ButtonOutline = () => {
  return (
    <StyledContainer>
      <Button outline>Default</Button>
      <Button outline color="primary">
        Primary
      </Button>
      <Button outline color="secondary">
        Secondary
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
};

export const ButtonSize = () => {
  return (
    <StyledContainer>
      <Button color="primary" size="large">
        Large
      </Button>
      <Button color="primary">Normal</Button>
      <Button color="primary" size="small">
        Small
      </Button>
      <Button color="primary" size="extraSmall">
        Small
      </Button>
    </StyledContainer>
  );
};

export const ButtonType = () => {
  return (
    <StyledContainer>
      <Button color="primary">Normal</Button>
      <Button color="primary" round>
        Round
      </Button>
    </StyledContainer>
  );
};
