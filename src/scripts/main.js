import { adaptCSSFbBrowser, loadCountries, searchHandler } from './utils';

document.getElementById('input-search').addEventListener('input', searchHandler);

adaptCSSFbBrowser();
loadCountries();
