import React from "react";
import { Button } from "./Button.compontent";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (props) => <Button {...props}>{props.children}</Button>;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
};
