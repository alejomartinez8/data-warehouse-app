import { getRegions, getRegion, createRegion, updateRegion, deleteRegion } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IRegion, ICountry, ICity } from 'lib/types';

export class RegionsStore {
  regions: IRegion[] = [];

  loading = false;

  constructor() {
    makeAutoObservable(this);
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
      this.setLoading(true);
      await createRegion(route, data);
      await this.fetchRegions();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchUpddateRegion = async (route: string, id: string, data: IRegion | ICountry | ICity) => {
    try {
      this.setLoading(true);
      await updateRegion(route, id, data);
      await this.fetchRegions();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchDeleteRegion = async (route: string, regionId: string) => {
    try {
      this.setLoading(true);
      await deleteRegion(route, regionId);
      await this.fetchRegions();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
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
