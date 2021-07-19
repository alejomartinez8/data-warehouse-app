import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
  line-height: 20px;
`;

export const StyledList = styled.ul`
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 20px;
  font-size: 13px;
  line-height: 20px;
  & & {
    padding-left: 30px;
  }
`;

export const StyledItemContent = styled.div`
  border: 1px dashed #e7eaec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f3f3f4;
  padding: 0.25rem;
  margin: 5px 0;
  border-radius: 3px;
`;

export const StyledItemLabel = styled.span`
  margin-left: 10px;
`;
