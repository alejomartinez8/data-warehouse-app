import Head from 'next/head';
import { Layout } from 'components/organisms';
import { CardBox } from 'components/atoms';
import { ContactList } from 'components/molecules';

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
        <CardBox title="Contacts">
          <ContactList contacts={contacts} />
        </CardBox>
      </Layout>
    </>
  );
};
