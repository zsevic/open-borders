const NEGATIVE_TEST_REQUIRED = 'NEGATIVE_TEST_REQUIRED';
const OPEN_BORDER = 'OPEN_BORDER';
const QUARANTINE_REQUIRED = 'QUARANTINE_REQUIRED';

const countryTypes = [OPEN_BORDER, NEGATIVE_TEST_REQUIRED, QUARANTINE_REQUIRED];

const titleCase = (text) => text.split(' ').map(item => {
  if (item === 'I') return item.toLowerCase();
  return item.charAt(0) + item.substring(1).toLowerCase();
}).join(' ');

const loadCountries = async () => {
  try {
    const API_URL = process.env.API_URL || 'https://open-borders.herokuapp.com';
    const countries = await fetch(`${API_URL}/api/countries`).then(response => response.json());
    const groups = countries.reduce((acc, current) => {
      if (acc[current.status]) acc[current.status].push(current);
      else acc[current.status] = [current];
      return acc;
    }, {});
    countryTypes.forEach(type => {
      const countriesByType = document.getElementById(type);
      groups[type].forEach(({ name: countryName, info: countryInfo }) => {
        const countryHtml = `<div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-info">${titleCase(countryName)}</h5>
          </div>
          <p class="mb-1 text-muted">${countryInfo}</p></div>`;
        countriesByType.innerHTML += countryHtml;
      });
    });
  } catch (err) {
    console.error(err);
  }
};

loadCountries();
