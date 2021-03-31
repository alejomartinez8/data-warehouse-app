import Head from 'next/head';
import { Layout } from 'components/organisms';
import { CardBox } from 'components/atoms';

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
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Contact</th>
                  <th>Country/Region</th>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Favorite Channel</th>
                  <th>Interest</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div>{contact.name}</div>
                      <div>{contact.email}</div>
                    </td>
                    <td>
                      <div>{contact.country}</div>
                      <div>{contact.region}</div>
                    </td>
                    <td>{contact.company}</td>
                    <td>{contact.position}</td>
                    <td>
                      {contact.channels.map((channel) => (
                        <span className="badge badge-info m-1" key={channel}>
                          {channel}
                        </span>
                      ))}
                    </td>
                    <td>{contact.interest}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBox>
      </Layout>
    </>
  );
};
