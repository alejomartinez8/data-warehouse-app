import { useEffect } from 'react';
import Head from 'next/head';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { CardBox, Button, Icon } from 'components/atoms';
import { ContactList, InputSearch } from 'components/molecules';
import { useStore } from 'lib/hooks';
import { StyledTitleContainer, StyledButtonContainer } from './Contacts.styled';

export const Contacts = () => {
  const { contacts, loading, fetchContacts } = useStore('contactStore');

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <Head>
        <title>Data Warehouse - Contacts</title>
      </Head>
      <CardBox>
        <CardBox.Title>
          <StyledTitleContainer>
            <InputSearch />
            <StyledButtonContainer>
              <Button color="primary" outline>
                <Icon icon={faUpload} color="primary" />
              </Button>
              <Button color="primary" outline dropdown>
                Export Contacts
              </Button>
              <Button color="primary" disabled>
                Add Contact
              </Button>
            </StyledButtonContainer>
          </StyledTitleContainer>
        </CardBox.Title>
        <CardBox.Content>
          {loading ? 'Loading...' : <ContactList contacts={contacts} />}
        </CardBox.Content>
      </CardBox>
    </>
  );
};
