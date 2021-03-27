import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import { Button } from "./Button.compontent";

export default {
  title: "Atoms/Button",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (props) => (
  <Button {...props}>{props.children}</Button>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { children: "Button" };

export const Normal = () => (
  <div>
    <Button>Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="dark">Dark</Button>
  </div>
);

Normal.storyName = "Normal Buttons";
