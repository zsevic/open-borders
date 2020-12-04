import { loadCountries, searchHandler } from './utils';

document.getElementById('input-search').addEventListener('input', searchHandler);

loadCountries();
