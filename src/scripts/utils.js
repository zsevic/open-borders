import { COUNTRY_TYPES } from './constants';

const titleCase = (text) => text.split(' ').map((item) => {
  if (item === 'I') return item.toLowerCase();
  if (item === 'SAD') return item;
  return item.charAt(0) + item.substring(1).toLowerCase();
}).join(' ');

export const hideLoader = () => {
  const loader = document.getElementById('loader');
  loader.innerHTML = '';
};

const isFacebookApp = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1);
};

export const adaptCSSFbBrowser = () => {
  if (isFacebookApp()) {
    $('.group-tabs').css('font-size', '12px');
  }
};

export const loadCountriesHtml = (countries) => {
  if (countries.length === 0) return;

  hideLoader();
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
};

export const resetCountriesHtml = () => {
  COUNTRY_TYPES.forEach((type) => {
    const countriesByType = document.getElementById(type);
    const countriesByTypeTab = document.getElementById(`${type}_TAB`);

    countriesByType.innerHTML = '';
    countriesByTypeTab.innerHTML = '';
  });
};

const setActiveTab = () => {
  for (let i = 0; i < COUNTRY_TYPES.length; i += 1) {
    const type = COUNTRY_TYPES[i];
    const countriesByTypeCounter = [].filter
      .call(document.getElementById(`${type}_TAB`).children, (element) => element.style.display !== 'none')
      .length;
    if (countriesByTypeCounter !== 0 && document.getElementById(`${type}_TAB_LINK`).classList.contains('active')) return;
    if (countriesByTypeCounter !== 0) {
      return document.getElementById(`${type}_TAB_LINK`).click();
    }
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

    countryElements.forEach((countryElement) => {
      countryElement.classList.remove('border-top');
    });
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
    .map((name, index) => {
      const [countryName] = name.split(' (');
      return [countryName, index + 1];
    }));

  $('#input-search').autocomplete({
    dropdownClass: 'dropdown-menu w-100',
    highlightClass: 'text-info',
    maximumItems: 5,
    onSelectItem: searchHandler, // eslint-disable-line
    source: src,
    treshold: 1,
  });
};

export const searchHandler = (event) => {
  const chosenCountry = event?.label;
  const value = event?.target?.value || chosenCountry;
  const countryList = document.querySelectorAll('.country');
  if (!value) {
    countryList.forEach((country) => {
      country.parentElement.parentElement.style.display = '';
    });
    setCountryCounter();
    setBorderTopClassForFirstCountryElement();
    return;
  }

  if (chosenCountry && process.env.NODE_ENV !== 'development') {
    gtag('event', 'click', {
      event_category: 'country',
      event_label: chosenCountry,
    });
  }

  const countryDatalistSet = new Set();
  countryList.forEach((country) => {
    const [, ...name] = country.innerHTML.split(' ');
    const countryName = name.join(' ');
    const countryNameStartsWithValue = countryName.toLowerCase()
      .startsWith(value.toLowerCase().trim());

    if (countryNameStartsWithValue) {
      if (chosenCountry) {
        country.parentElement.parentElement.style.display = '';
      }
      countryDatalistSet.add(countryName);
    } else if (chosenCountry) {
      country.parentElement.parentElement.style.display = 'none';
    }
  });

  setCountryDatalist(countryDatalistSet);
  if (chosenCountry) {
    setActiveTab();
  }
  setCountryCounter();
  setBorderTopClassForFirstCountryElement();
};
