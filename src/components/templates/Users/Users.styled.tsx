import { Button } from 'components/atoms';
import styled from 'styled-components';

export const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  margin: 0 1rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  > button {
    margin: 0 0.25rem;
  }
`;

export const StyledParragraphDelete = styled.p`
  text-align: center;
`;
