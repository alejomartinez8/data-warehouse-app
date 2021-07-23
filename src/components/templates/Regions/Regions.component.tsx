import { useEffect } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import {
  CardBox,
  Button,
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
} from 'components/atoms';
import {
  IItem,
  NestableList,
  HeaderRegionsForm,
  BodyRegionsForm,
  FooterRegionsForm,
} from 'components/molecules';
import { useModal, useStore } from 'lib/hooks';
import { IRegion, regionRoutes, regionsType } from 'lib/types';
import { faGlobeAmericas, faFlag, faCity } from '@fortawesome/free-solid-svg-icons';

export const Regions = observer(() => {
  const { user } = useStore('userStore');
  const { regions, loading, fetchRegions, fetchDeleteRegion } = useStore('regionsStores');
  const { setModal, closeModal } = useModal();

  const isAdmin = user.role === 'ADMIN';

  const mapToItems = (list: IRegion[]) => {
    const itemsRegions: IItem[] = list?.map((region) => ({
      id: region.id,
      name: region.name,
      type: 'region',
      labelItems: 'country',
      icon: faGlobeAmericas,
      items: region.countries?.map((country) => ({
        id: country.id,
        name: country.name,
        type: 'country',
        labelItems: 'city',
        icon: faFlag,
        parentId: region.id,
        items: country.cities?.map((city) => ({
          id: city.id,
          name: city.name,
          type: 'city',
          icon: faCity,
          parentId: country.id,
        })),
      })),
    }));

    return itemsRegions;
  };

  useEffect(() => {
    fetchRegions();
  }, [fetchRegions]);

  const handleOnAddItem = (item?: IItem) => {
    const childType = (type: string) => {
      switch (type) {
        case regionsType.region:
          return regionsType.country;

        case regionsType.country:
          return regionsType.city;

        default:
          return regionsType.region;
      }
    };

    setModal({
      header: (
        <HeaderRegionsForm title={item ? `Add ${item.labelItems} in ${item.name}` : 'Add Region'} />
      ),
      body: <BodyRegionsForm type={childType(item?.type)} parentId={item?.id} />,
      footer: <FooterRegionsForm />,
    });
  };

  const handleOnEdit = (item: IItem) => {
    setModal({
      header: <HeaderRegionsForm title={`Edit ${item.type}`} />,
      body: <BodyRegionsForm item={item} />,
      footer: <FooterRegionsForm />,
    });
  };

  const handleOnDelete = (item: IItem) => {
    const handleOnConfirmation = async () => {
      await fetchDeleteRegion(regionRoutes[item.type], item.id);
      closeModal();
    };

    setModal({
      header: <HeaderConfirmation title={`Delete ${item.type}`} />,
      body: <BodyConfirmation>Are you sure you want to delete this item?</BodyConfirmation>,
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  return (
    <>
      <Head>
        <title>Data Warehouse - Regions</title>
      </Head>
      <h1>Regions</h1>
      <CardBox>
        <CardBox.Title>
          <Button size="extraSmall" onClick={() => handleOnAddItem()}>
            Add Region
          </Button>
        </CardBox.Title>
        <CardBox.Content>
          {loading ? (
            'Loading...'
          ) : (
            <NestableList
              editItem={isAdmin}
              items={mapToItems(regions)}
              handleOnEdit={handleOnEdit}
              handleOnDelete={handleOnDelete}
              handleOnAddItem={handleOnAddItem}
            />
          )}
        </CardBox.Content>
      </CardBox>
    </>
  );
});
