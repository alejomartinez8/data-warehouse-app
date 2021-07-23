import { useState } from 'react';
import Head from 'next/head';
import { Button, CardBox, TableList } from 'components/atoms';
import { StyledTitleContainer, StyledButtonContainer } from './PageList.styled';

export interface IField {
  key: string;
  label: string;
}

interface ITableListProps {
  pluralItem: string;
  singularItem: string;
  fields: IField[];
  items: any[];
  loading: boolean;
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
  handleOnCreate,
  handleOnEdit,
  handleOnDelete,
}: ITableListProps) => {
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
            <StyledButtonContainer>
              <Button color="primary" onClick={handleOnCreate}>
                Add {singularItem}
              </Button>
              {itemsSelected.length > 0 && (
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
