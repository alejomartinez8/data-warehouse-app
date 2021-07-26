import React, { useState } from 'react';
import Head from 'next/head';
import { Button, CardBox, Icon, TableList } from 'components/atoms';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { StyledTitleContainer, StyledButtonContainer } from './PageList.styled';
import { InputSearch } from '../InputSearch/InputSearch.component';

export interface IField {
  key: string;
  label: string;
}

interface IPageListProps {
  pluralItem: string;
  singularItem: string;
  fields: IField[];
  items: any[];
  loading: boolean;
  exportFields?: boolean;
  importFields?: boolean;
  querySearch?: (search: string) => void;
  handleOnCreate: () => void;
  handleOnEdit: (item) => void;
  handleOnDelete: (items: any[]) => void;
}

export const PageList = ({
  pluralItem,
  singularItem,
  items,
  loading,
  fields,
  exportFields = false,
  importFields = false,
  querySearch,
  handleOnCreate,
  handleOnEdit,
  handleOnDelete,
}: IPageListProps) => {
  const [itemsSelected, setItemsSelected] = useState([]);

  return (
    <>
      <Head>
        <title>Data Warehouse - {pluralItem}</title>
      </Head>
      <h1>{pluralItem}</h1>
      <CardBox>
        <CardBox.Title>
          <StyledTitleContainer>
            <InputSearch handleOnSearch={querySearch} />
            <StyledButtonContainer>
              {importFields && (
                <Button color="primary" outline>
                  <Icon icon={faUpload} color="primary" />
                </Button>
              )}
              {exportFields && (
                <Button color="primary" outline dropdown>
                  Export {pluralItem}
                </Button>
              )}
              <Button color="primary" onClick={handleOnCreate}>
                Add {singularItem}
              </Button>
              {itemsSelected?.length > 0 && (
                <Button color="danger" onClick={() => handleOnDelete(itemsSelected)}>
                  Delete
                </Button>
              )}
            </StyledButtonContainer>
          </StyledTitleContainer>
        </CardBox.Title>
        <CardBox.Content>
          {loading ? (
            'Loading...'
          ) : (
            <TableList
              fields={fields}
              items={items}
              handleEditItem={handleOnEdit}
              setItemsSelected={setItemsSelected}
            />
          )}
        </CardBox.Content>
      </CardBox>
    </>
  );
};
