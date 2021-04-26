import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms';
import { DropdownMenu } from './DropdownMenu.component';

const StyledContainer = styled.div`
  position: relative;
  height: 140px;
  margin-top: -40px;
`;

export default {
  title: 'Atoms/DropDown',
  component: DropdownMenu,
};

const Teamplate = ({ collapsed, ...props }) => (
  <DropdownMenu {...props} collapsed={collapsed}>
    <DropdownMenu.Item>Item 1</DropdownMenu.Item>
    <DropdownMenu.Item>Item 2</DropdownMenu.Item>
    <DropdownMenu.Divider />
    <DropdownMenu.Item>Item 3</DropdownMenu.Item>
  </DropdownMenu>
);

export const Expanded = Teamplate.bind({});
Expanded.args = {
  collapsed: false,
};
Expanded.decorators = [
  (Story) => (
    <StyledContainer>
      <Story />
    </StyledContainer>
  ),
];

export const ButtonDropDown = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleOnClick = () => {
    setCollapsed(!collapsed);
  };
  return (
    <StyledContainer style={{ marginTop: '0px' }}>
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
