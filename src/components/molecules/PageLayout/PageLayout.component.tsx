import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Button, CardBox, Icon } from 'components/atoms';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { StyledTitleContainer, StyledButtonContainer } from './PageLayout.styled';
import { InputSearch } from '../InputSearch/InputSearch.component';

export interface IField {
  key: string;
  label: string;
  sort?: boolean;
}

interface IPageLayoutProps {
  pluralItem: string;
  singularItem: string;
  importFields?: boolean;
  children?: ReactNode;
  deleteButton?: boolean;
  handleOnExport?: () => void;
  querySearch?: (search: string) => void;
  handleOnCreate?: () => void;
  handleOnDelete?: () => void;
}

export const PageLayout = ({
  pluralItem,
  singularItem,
  importFields = false,
  deleteButton = false,
  children,
  handleOnExport,
  querySearch,
  handleOnCreate,
  handleOnDelete,
}: IPageLayoutProps) => (
  <>
    <Head>
      <title>Data Warehouse - {pluralItem}</title>
    </Head>
    <h1>{pluralItem}</h1>
    <CardBox>
      <CardBox.Title>
        <StyledTitleContainer>
          {querySearch && <InputSearch handleOnSearch={querySearch} />}
          <StyledButtonContainer>
            {importFields && (
              <Button color="primary" outline>
                <Icon icon={faUpload} color="primary" />
              </Button>
            )}
            {handleOnExport && (
              <Button color="primary" outline onClick={handleOnExport}>
                Export {pluralItem}
              </Button>
            )}
            {handleOnCreate && (
              <Button color="primary" onClick={handleOnCreate}>
                Add {singularItem}
              </Button>
            )}
            {deleteButton && (
              <Button color="danger" onClick={handleOnDelete}>
                Delete
              </Button>
            )}
          </StyledButtonContainer>
        </StyledTitleContainer>
      </CardBox.Title>
      <CardBox.Content>{children}</CardBox.Content>
    </CardBox>
  </>
);
