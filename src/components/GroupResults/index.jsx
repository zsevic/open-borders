import React from 'react';
import CountriesList from 'components/CountriesList';
import NoResults from 'components/NoResults';
import { getCountriesCounter } from 'services/countries';
import { countriesPropType } from 'utils/prop-types';

export default function GroupResults({ countries }) {
  if (getCountriesCounter(countries) === 0) return <NoResults />;

  return <CountriesList countries={countries} />;
}

GroupResults.propTypes = {
  countries: countriesPropType,
};
