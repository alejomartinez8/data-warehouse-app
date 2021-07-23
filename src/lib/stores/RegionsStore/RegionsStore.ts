import { getRegions, getRegion, createRegion, updateRegion, deleteRegion } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IRegion, ICountry, ICity } from 'lib/types';

export class RegionsStore {
  regions: IRegion[] = [];

  countries: ICountry[] = [];

  cities: ICity[] = [];

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
      await getRegion(route, id);
      await this.fetchRegions();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
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

  getCountriesByRegionId = (id: string) => {
    // eslint-disable-next-line eqeqeq
    const region = this.regions.find((item) => item.id == id);
    this.countries = region ? region.countries : [];
  };

  getCitiesByCountryId = (id: string) => {
    // eslint-disable-next-line eqeqeq
    const region = this.countries.find((item) => item.id == id);
    this.cities = region ? region.cities : [];
  };
}
