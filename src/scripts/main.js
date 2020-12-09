import isEqual from 'lodash.isequal';
import { idbRepository } from './database';
import {
  adaptCSSFbBrowser, hideLoader, loadCountriesHtml, resetCountriesHtml, searchHandler,
} from './utils';

document.getElementById('input-search').addEventListener('input', searchHandler);
adaptCSSFbBrowser();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('Service worker is registered!');
    });
  });
}

idbRepository.get('countries')
  .then(async (countries = []) => {
    if (countries.length === 0) return countries;

    hideLoader();
    await loadCountriesHtml(countries);
    return countries;
  })
  .then(async (countries) => {
    const API_URL = process.env.API_URL || 'https://open-borders.herokuapp.com';
    const countriesData = await fetch(`${API_URL}/api/countries`).then((response) => response.json());
    if (countriesData.length === 0) return;

    if (!isEqual(countriesData, countries)) {
      resetCountriesHtml();
      loadCountriesHtml(countriesData);
      return idbRepository.set('countries', countriesData)
        .then(() => console.log('IndexedDB data is updated'));
    }
  })
  .catch((err) => {
    console.error(err);
    hideLoader();
  });
