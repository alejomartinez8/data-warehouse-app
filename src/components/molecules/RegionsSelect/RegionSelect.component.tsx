import { FormGroup, FormLabel, FormRow, FormSelect } from 'components/atoms';
import { ICity, ICountry, IRegion } from 'lib/types';

interface IRegionSelect {
  regionId: string;
  countryId: string;
  cityId: string;
  regions: IRegion[];
  countries: ICountry[];
  cities: ICity[];
  handleOnChange: (e: any) => void;
}

export const RegionSelect = ({
  regionId,
  countryId,
  cityId,
  regions,
  countries,
  cities,
  handleOnChange,
}: IRegionSelect) => (
  <FormRow>
    <FormGroup widthCol={1 / 3}>
      <FormLabel htmlFor="region">Region</FormLabel>
      <FormSelect id="region" name="region" value={regionId} onChange={handleOnChange}>
        <option value="">---</option>
        {regions?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </FormSelect>
    </FormGroup>
    <FormGroup widthCol={1 / 3}>
      <FormLabel htmlFor="country">Country</FormLabel>
      <FormSelect
        id="country"
        name="country"
        value={countryId}
        onChange={handleOnChange}
        disabled={!regionId}
      >
        <option value="">---</option>
        {countries?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </FormSelect>
    </FormGroup>
    <FormGroup widthCol={1 / 3}>
      <FormLabel htmlFor="city">City</FormLabel>
      <FormSelect
        id="city"
        name="city"
        value={cityId}
        onChange={handleOnChange}
        disabled={!countryId}
      >
        <option value="">---</option>
        {cities?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </FormSelect>
    </FormGroup>
  </FormRow>
);
