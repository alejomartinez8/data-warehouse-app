import styled from 'styled-components';
import { Footer } from './Footer.component';
import baseTheme from '../../../themes/baseTheme';

export default {
  title: 'Atoms/Footer',
  component: Footer,
};

const StyledContainer = styled.div`
  background-color: ${baseTheme.colors.gray};
  margin: 0;
  height: 100vh;
`;

const Template = () => (
  <StyledContainer>
    <Footer />
  </StyledContainer>
);

export const Default = Template.bind({});
