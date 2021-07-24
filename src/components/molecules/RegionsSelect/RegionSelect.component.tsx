import { useEffect, useState } from 'react';
import { FormGroup, FormLabel, FormRow, FormSelect } from 'components/atoms';
import { useStore } from 'lib/hooks';
import { ICity, ICountry } from 'lib/types';

export const RegionSelect = ({ entity, formData, setFormData, cityId }) => {
  const { regions, fetchRegions, getCountriesByRegionId, getCitiesByCountryId } = useStore(
    'regionsStores',
  );

  const [regionId, setRegionId] = useState('');
  const [countryId, setCountryId] = useState('');
  const [countries, setCountries] = useState<ICountry[]>();
  const [cities, setCities] = useState<ICity[]>();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'region':
        setRegionId(e.target.value);
        break;

      case 'country':
        setCountryId(e.target.value);
        break;

      case 'city':
        setFormData({ ...formData, cityId: e.target.value });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    fetchRegions();

    if (entity?.city) {
      setRegionId(entity.city.country.regionId);
      setCountryId(entity.city.countryId);
      setFormData({ ...formData, cityId: entity.cityId });
    }
  }, [entity]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountriesByRegionId(regionId);
      setCountries(data);
    };
    fetchCountries();
  }, [regions, regionId]);

  useEffect(() => {
    const fetchCities = async () => {
      const data = await getCitiesByCountryId(countryId);
      setCities(data);
    };
    fetchCities();
  }, [countries, countryId]);

  return (
    <FormRow>
      <FormGroup widthCol={1 / 3}>
        <FormLabel htmlFor="region">Region</FormLabel>
        <FormSelect id="region" name="region" value={regionId} onChange={handleChange}>
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
          onChange={handleChange}
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
          onChange={handleChange}
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
};
