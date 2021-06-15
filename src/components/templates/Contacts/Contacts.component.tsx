import Head from 'next/head';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { CardBox, Button, Icon } from 'components/atoms';
import { ContactList, InputSearch } from 'components/molecules';
import { Layout } from 'components/organisms';
import { StyledTitleContainer, StyledButtonContainer } from './Contacts.styled';

export const Contacts = ({ contacts }) => (
  <>
    <Head>
      <title>Data Warehouse - Contacts</title>
    </Head>
    <Layout>
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
          <ContactList contacts={contacts} />
        </CardBox.Content>
      </CardBox>
    </Layout>
  </>
);
