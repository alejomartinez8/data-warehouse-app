import Head from 'next/head';
import { Layout } from 'components/organisms';
import { CardBox, InputSearch, Button } from 'components/atoms';
import { ContactList } from 'components/molecules';
import { StyledTitleContainer } from './Contacts.styled';

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
              <div className="col d-flex justify-content-end">
                <Button color="primary" outline>
                  <i className="fas fa-upload"></i>
                </Button>
                <Button color="primary" outline>
                  Export Contacts
                </Button>
                <Button color="primary">Add Contact</Button>
              </div>
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
