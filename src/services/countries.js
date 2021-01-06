import isEqual from 'lodash.isequal';
import { normalizeString } from 'utils';
import request from 'utils/request';
import { idbRepository } from './database';

export const filterCountries = (option, props) => {
  const countryName = normalizeString(option.name);
  const inputText = normalizeString(props.text);

  return countryName.toLowerCase().startsWith(inputText.toLowerCase().trim());
};

const getCountries = async () => {
  try {
    const countries = await request.get('/api/countries');

    return countries.data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export const getCountriesCounter = (countries) => countries?.length || 0;

export const getGroupedCountries = (countries) =>
  countries.reduce((groupedCountries, country) => {
    if (groupedCountries[country.status]) {
      groupedCountries[country.status].push(country);
    } else {
      groupedCountries[country.status] = [country];
    }
    return groupedCountries;
  }, {});

export const loadCountriesData = async (setCountriesHook) => {
  try {
    const countriesIdbData = await idbRepository.get('countries');
    if (countriesIdbData && countriesIdbData.length !== 0) {
      setCountriesHook(getGroupedCountries(countriesIdbData));
    }

    const countriesData = await getCountries();
    if (countriesData.length === 0) return countriesIdbData || [];

    if (!isEqual(countriesData, countriesIdbData)) {
      setCountriesHook(getGroupedCountries(countriesData));
      await idbRepository.set('countries', countriesData);
      console.log('IndexedDB data is updated');
      return countriesData;
    }

    return countriesIdbData;
  } catch (err) {
    console.error(err.message);
  }
};
