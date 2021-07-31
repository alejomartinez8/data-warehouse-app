import { RootStore } from 'lib/stores';
import { getRegions, getRegion, createRegion, updateRegion, deleteRegion } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IRegion, ICountry, ICity } from 'lib/types';

export class RegionsStore {
  private rootStore: RootStore;

  regions: IRegion[] = [];

  loading = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setRegions = (regions: IRegion[]) => {
    this.regions = regions;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  fetchRegions = async () => {
    try {
      this.setLoading(true);
      this.setRegions(await getRegions('regions'));
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      this.setRegions([]);
    }
  };

  fetchGetRegion = async (route: string, id: string) => {
    try {
      this.setLoading(true);
      const region = await getRegion(route, id);
      this.setLoading(false);
      return region;
    } catch (error) {
      this.setLoading(false);
      return null;
    }
  };

  fetchCreateRegion = async (route: string, data: IRegion | ICountry | ICity) => {
    try {
      await createRegion(route, data);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Region/Country/City created successfully',
      });
      await this.fetchRegions();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error region/country/city create',
      });
    }
  };

  fetchUpddateRegion = async (route: string, id: string, data: IRegion | ICountry | ICity) => {
    try {
      await updateRegion(route, id, data);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Region/Country/City updated successfully',
      });
      await this.fetchRegions();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error region/country/city update',
      });
    }
  };

  fetchDeleteRegion = async (route: string, regionId: string) => {
    try {
      await deleteRegion(route, regionId);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Region/Country/City deleted successfully',
      });
      await this.fetchRegions();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error region/country/city delete',
      });
    }
  };

  getCountriesByRegionId = async (id: string): Promise<ICountry[]> => {
    if (id) {
      const region: IRegion = (await this.fetchGetRegion('regions', id)) as IRegion;
      return region ? region.countries : [];
    }
    return [];
  };

  getCitiesByCountryId = async (id: string): Promise<ICity[]> => {
    if (id) {
      const country: ICountry = (await this.fetchGetRegion('countries', id)) as ICountry;
      return country ? country.cities : [];
    }
    return [];
  };
}
