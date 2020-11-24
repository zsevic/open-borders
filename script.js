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
    const countries = await fetch('http://localhost:8080/api/countries').then(response => response.json());
    const groups = countries.reduce((acc, current) => {
      if (acc[current.status]) acc[current.status].push(current);
      else acc[current.status] = [current];
      return acc;
    }, {});
    countryTypes.forEach(type => {
      const countriesByType = document.getElementById(type);
      groups[type].forEach(({ name: countryName }) => {
        const countryElement = document.createElement('li');
        countryElement.innerHTML = titleCase(countryName);
        countryElement.classList.add('list-group-item');
        countriesByType.appendChild(countryElement);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

loadCountries();
