import styled from 'styled-components';
import baseTheme from '../../../themes/baseTheme';
import { NavBar } from './NavBar.component';

export default {
  title: 'Atoms/NavBar',
  component: NavBar,
};

const StyledContainer = styled.div`
  border: 1px solid ${baseTheme.colors.border};
`;

const Template = () => (
  <StyledContainer>
    <NavBar />
  </StyledContainer>
);

export const Default = Template.bind({});
