import { deleteRegion, getRegions, createRegion, updateRegion } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IRegion, ICountry, ICity } from 'lib/types';

export class RegionsStore {
  regions: IRegion[] = [];

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRegions = async () => {
    try {
      this.setLoading(true);
      this.setRegions(await getRegions());
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      this.setRegions([]);
    }
  };

  setRegions = (regions: IRegion[]) => {
    this.regions = regions;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  fetchRegisterRegion = async (route: string, data: IRegion | ICountry | ICity) => {
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
}
