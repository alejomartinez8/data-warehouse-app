import React, { useState } from 'react';
import Head from 'next/head';
import { Button, CardBox, Icon, IOrderBy, TableList } from 'components/atoms';
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
  orderBy?: IOrderBy;
  querySearch?: (search: string) => void;
  handleOnCreate: () => void;
  handleOnEdit: (item) => void;
  handleOnDelete: (items: any[]) => void;
  handleOrderBy?: (orderBy: IOrderBy) => void;
}

export const PageList = ({
  pluralItem,
  singularItem,
  items,
  loading,
  fields,
  exportFields = false,
  importFields = false,
  orderBy,
  querySearch,
  handleOnCreate,
  handleOnEdit,
  handleOnDelete,
  handleOrderBy,
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
              orderBy={orderBy}
              handleEditItem={handleOnEdit}
              setItemsSelected={setItemsSelected}
              handleOnSortBy={handleOrderBy}
            />
          )}
        </CardBox.Content>
      </CardBox>
    </>
  );
};
