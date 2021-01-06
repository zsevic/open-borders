import React from 'react';
import { getCountriesCounter } from 'services/countries';
import { countriesPropType } from 'utils/prop-types';
import CountryElement from './CountryElement';
import CountryList from './CountryList';

export default function Countries({ countries }) {
  const length = getCountriesCounter(countries);

  if (length === 1) {
    const [country] = countries;
    return <CountryElement country={country} />;
  }

  return <CountryList countries={countries} length={length} />;
}

Countries.propTypes = {
  countries: countriesPropType,
};
