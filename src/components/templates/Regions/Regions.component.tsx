import Head from 'next/head';
import { CardBox } from 'components/atoms';
import { observer } from 'mobx-react-lite';
import { IItem, NestableList } from 'components/molecules/NestableList/NestableList.component';

export const Regions = observer(() => {
  const data: IItem[] = [
    {
      name: 'Sudamerica',
      type: 'region',
      items: [
        {
          name: 'Colombia',
          type: 'country',
          items: [
            { name: 'Medellin', type: 'city' },
            { name: 'Bogotá', type: 'city' },
          ],
        },
        {
          name: 'Argentina',
          type: 'country',
          items: [
            { name: 'Buenos Aires', type: 'city' },
            { name: 'Cordoba', type: 'city' },
          ],
        },
      ],
    },
    {
      name: 'Centro America',
      type: 'region',
      items: [
        {
          name: 'Mexico',
          type: 'country',
          items: [
            { name: 'Mexico City', type: 'city' },
            { name: 'Cancún', type: 'city' },
          ],
        },
        {
          name: 'El Salvador',
          type: 'country',
          items: [
            { name: 'San Salvador', type: 'city' },
            { name: 'Santa Tecla', type: 'city' },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Data Warehouse - Regions</title>
      </Head>
      <h1>Regions</h1>
      <CardBox>
        <CardBox.Content>
          <NestableList items={data} />
        </CardBox.Content>
      </CardBox>
    </>
  );
});
