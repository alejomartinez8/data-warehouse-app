import Head from 'next/head';
import { CardBox, Button, Icon } from 'components/atoms';
import { ContactList, InputSearch } from 'components/molecules';
import { Layout } from 'components/organisms';
import { StyledTitleContainer, StyledButtonContainer } from './Contacts.styled';

export const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: 'Alejandro Martínez',
      email: 'amartinez@example.com',
      country: 'Colombia',
      region: 'Latam',
      company: 'Globant',
      position: 'Web UI',
      channels: ['Whatsapp', 'Facebook'],
      interest: 100,
    },
    {
      id: 2,
      name: 'Alejandro Martínez',
      email: 'amartinez@example.com',
      country: 'Colombia',
      region: 'Latam',
      company: 'Globant',
      position: 'Web UI',
      channels: ['Whatsapp', 'Facebook'],
      interest: 100,
    },
    {
      id: 3,
      name: 'Alejandro Martínez',
      email: 'amartinez@example.com',
      country: 'Colombia',
      region: 'Latam',
      company: 'Globant',
      position: 'Web UI',
      channels: ['Whatsapp', 'Facebook'],
      interest: 100,
    },
    {
      id: 4,
      name: 'Alejandro Martínez',
      email: 'amartinez@example.com',
      country: 'Colombia',
      region: 'Latam',
      company: 'Globant',
      position: 'Web UI',
      channels: ['Whatsapp', 'Facebook'],
      interest: 100,
    },
    {
      id: 5,
      name: 'Alejandro Martínez',
      email: 'amartinez@example.com',
      country: 'Colombia',
      region: 'Latam',
      company: 'Globant',
      position: 'Web UI',
      channels: ['Whatsapp', 'Facebook'],
      interest: 100,
    },
  ];

  return (
    <>
      <Head>
        <title>Data Warehouse - Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <CardBox>
          <CardBox.Title>
            <StyledTitleContainer>
              <InputSearch />
              <StyledButtonContainer>
                <Button color="primary" outline>
                  <Icon icon="upload" color="primary" />
                </Button>
                <Button color="primary" outline>
                  Export Contacts
                </Button>
                <Button color="primary">Add Contact</Button>
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
};
