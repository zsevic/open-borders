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

export const loadCountriesList = async (setGroupedCountriesHook) => {
  try {
    const database = await idbRepository.openDatabase();
    let countriesIdbList = [];

    if (database) {
      countriesIdbList = await idbRepository.get(database, 'countries');
      if (countriesIdbList && countriesIdbList.length !== 0) {
        setGroupedCountriesHook(getGroupedCountries(countriesIdbList));
      }
    }

    const countriesList = await getCountries();
    if (countriesList.length === 0) return countriesIdbList || [];

    if (!isEqual(countriesList, countriesIdbList)) {
      setGroupedCountriesHook(getGroupedCountries(countriesList));
      if (database) {
        await idbRepository.set(database, 'countries', countriesList);
        console.log('IndexedDB data is updated');
      }
      return countriesList;
    }

    return countriesIdbList;
  } catch (err) {
    console.error(err.message);
  }
};
