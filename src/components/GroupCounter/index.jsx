import React from 'react';
import { Badge } from 'react-bootstrap';
import { getCountriesCounter } from 'services/countries';
import { countriesPropType } from 'utils/prop-types';

export default function GroupCounter({ countries }) {
  return <Badge variant="info">{getCountriesCounter(countries)}</Badge>;
}

GroupCounter.propTypes = {
  countries: countriesPropType,
};
