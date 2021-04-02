import { StyledContainer, StyledHeading } from './PageHeading.styled';

interface IPageHeading {
  heading: string;
}

export const PageHeading = ({ heading }: IPageHeading) => {
  return (
    <StyledContainer className="row">
      <div className="col-lg-10">
        <StyledHeading>{heading}</StyledHeading>
      </div>
    </StyledContainer>
  );
};
