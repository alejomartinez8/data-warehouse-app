import styled, { css } from 'styled-components';

interface IStyledTR {
  checked: boolean;
}

export const StyledTableContet = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table(
  ({ theme }) => css`
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${theme.colors.primary};
    border-collapse: collapse;
    border-radius: 0.5rem;
    overflow: hidden;
    th,
    td {
      padding: 0.5rem;
    }
  `,
);

export const StyledTHead = styled.thead(
  ({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    th {
      line-height: 1.5;
    }
  `,
);

export const StyledTBody = styled.tbody``;

export const StyledTR = styled.tr<IStyledTR>(({ theme, checked }) => {
  const mixinColor = css`
    background-color: ${theme.colors.gray};
    color: ${theme.colors.primary};
  `;

  return css`
    ${checked && mixinColor};
    &:hover {
      cursor: pointer;
      ${mixinColor};
    }
  `;
});

export const StyledTD = styled.td`
  border-top: 1px solid #e7eaec;
  padding: 0.5rem;
`;

export const StyledTH = styled.th`
  cursor: pointer;
`;
