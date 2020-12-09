import { adaptCSSFbBrowser, loadCountries, searchHandler } from './utils';

document.getElementById('input-search').addEventListener('input', searchHandler);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('Service worker is registered!');
    });
  });
}

adaptCSSFbBrowser();
loadCountries();
