import { COUNTRY_TYPES } from './constants';

const titleCase = (text) => text.split(' ').map((item) => {
  if (item === 'I') return item.toLowerCase();
  if (item === 'SAD') return item;
  return item.charAt(0) + item.substring(1).toLowerCase();
}).join(' ');

export const loadCountries = async () => {
  try {
    const API_URL = process.env.API_URL || 'https://open-borders.herokuapp.com';
    const countries = await fetch(`${API_URL}/api/countries`).then((response) => response.json());
    const groups = countries.reduce((acc, current) => {
      if (acc[current.status]) acc[current.status].push(current);
      else acc[current.status] = [current];
      return acc;
    }, {});
    COUNTRY_TYPES.forEach((type) => {
      const countriesByType = document.getElementById(type);
      const countriesByTypeBadge = document.getElementById(`${type}_BADGE`);
      const countriesByTypeInfo = document.getElementById(`${type}_INFO`);
      const countriesByTypeTab = document.getElementById(`${type}_TAB`);
      const countriesByTypeTabBadge = document.getElementById(`${type}_TAB_BADGE`);
      const countriesByTypeTabInfo = document.getElementById(`${type}_TAB_INFO`);
      groups[type]?.forEach(({ name: countryName, info: countryInfo, flag }) => {
        const countryHtml = `<div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-info country">${flag} ${titleCase(countryName)}</h5>
          </div>
          <p class="mb-1 text-muted" style="word-wrap:break-word">${countryInfo}</p></div>`;
        countriesByType.innerHTML += countryHtml;
        countriesByTypeTab.innerHTML += countryHtml;
      });
      const { length } = groups[type];
      const countriesByTypeStyleDisplay = length > 0 ? 'none' : '';
      countriesByTypeInfo.style.display = countriesByTypeStyleDisplay;
      countriesByTypeTabInfo.style.display = countriesByTypeStyleDisplay;
      countriesByTypeBadge.innerHTML = length;
      countriesByTypeTabBadge.innerHTML = length;
    });
  } catch (err) {
    console.error(err);
  }
};

const setBorderTopClassForFirstCountryElement = () => {
  COUNTRY_TYPES.forEach((type) => {
    const [firstCountryTabElement, ...otherCountryTabElements] = [].filter
      .call(document.getElementById(`${type}_TAB`).children, (element) => element.style.display !== 'none');
    const [firstCountryElement, ...otherCountryElements] = [].filter
      .call(document.getElementById(type).children, (element) => element.style.display !== 'none');

    if (!firstCountryElement || !firstCountryTabElement) return;

    firstCountryTabElement.classList.add('border-top');
    firstCountryElement.classList.add('border-top');
    const countryElements = [...otherCountryElements, ...otherCountryTabElements];

    for (const countryElement of countryElements) {
      countryElement.classList.remove('border-top');
    }
  });
};

const setCountryCounter = () => {
  COUNTRY_TYPES.forEach((type) => {
    const countriesByTypeCounter = [].filter
      .call(document.getElementById(type).children, (element) => element.style.display !== 'none')
      .length;
    const countriesByTypeBadge = document.getElementById(`${type}_BADGE`);
    const countriesByTypeTabBadge = document.getElementById(`${type}_TAB_BADGE`);
    const countriesByTypeInfo = document.getElementById(`${type}_INFO`);
    const countriesByTypeTabInfo = document.getElementById(`${type}_TAB_INFO`);
    const countriesByTypeStyleDisplay = countriesByTypeCounter > 0 ? 'none' : '';
    countriesByTypeInfo.style.display = countriesByTypeStyleDisplay;
    countriesByTypeTabInfo.style.display = countriesByTypeStyleDisplay;
    countriesByTypeBadge.innerHTML = countriesByTypeCounter;
    countriesByTypeTabBadge.innerHTML = countriesByTypeCounter;
  });
};

const setCountryDatalist = (countryDatalistSet) => {
  const src = Object.fromEntries(Array.from(countryDatalistSet)
    .map((countryName, index) => [countryName, index + 1]));

  $('#input-search').autocomplete({
    dropdownClass: 'dropdown-menu w-100',
    highlightClass: 'text-info',
    maximumItems: 0,
    onSelectItem: searchHandler, // eslint-disable-line
    source: src,
    treshold: 1,
  });
};

export const searchHandler = (event) => {
  const value = event?.target?.value || event?.label;
  if (!value) {
    const countryList = document.querySelectorAll('.country');
    for (const country of countryList.values()) {
      country.parentElement.parentElement.style.display = '';
    }
    setCountryCounter();
    setBorderTopClassForFirstCountryElement();
    return;
  }

  const countryList = document.querySelectorAll('.country');
  const countryDatalistSet = new Set();
  for (const country of countryList.values()) {
    const [, ...name] = country.innerHTML.split(' ');
    const countryName = name.join(' ');
    const countryNameStartsWithValue = countryName.toLowerCase()
      .startsWith(value.toLowerCase().trim());

    if (countryNameStartsWithValue) {
      country.parentElement.parentElement.style.display = '';
      countryDatalistSet.add(countryName);
    } else {
      country.parentElement.parentElement.style.display = 'none';
    }
  }

  setCountryDatalist(countryDatalistSet);
  setCountryCounter();
  setBorderTopClassForFirstCountryElement();
};
