import React from 'react';
import Countries from 'components/Countries';
import NoResults from 'components/NoResults';
import { getCountriesCounter } from 'services/countries';
import { countriesPropType } from 'utils/prop-types';

export default function GroupResults({ countries }) {
  if (getCountriesCounter(countries) === 0) return <NoResults />;

  return <Countries countries={countries} />;
}

GroupResults.propTypes = {
  countries: countriesPropType,
};
