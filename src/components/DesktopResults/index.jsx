import React from 'react';
import DesktopGroup from 'components/DesktopGroup';
import {
  CLOSED_BORDER,
  NEGATIVE_TEST_REQUIRED,
  NO_TEST_REQUIRED,
  QUARANTINE_REQUIRED,
  VACCINATION_REQUIRED,
} from 'constants/countries';
import { groupedCountriesPropType } from 'utils/prop-types';

export default function DesktopResults({ groupedCountries }) {
  const groups = [
    {
      name: 'Nije potreban test',
      countries: groupedCountries[NO_TEST_REQUIRED],
    },
    {
      name: 'Potrebna vakcinacija',
      countries: groupedCountries[VACCINATION_REQUIRED],
    },
    {
      name: 'Negativan test',
      countries: groupedCountries[NEGATIVE_TEST_REQUIRED],
    },
    {
      name: 'Obavezan karantin',
      countries: groupedCountries[QUARANTINE_REQUIRED],
    },
    {
      name: 'Zatvorene granice',
      countries: groupedCountries[CLOSED_BORDER],
    },
  ];
  return (
    <div className="d-none d-lg-block">
      <div className="container mb-5">
        <div className="row flex-wrap">
          {groups.map((group) => (
            <DesktopGroup
              key={`desktop-group-${group.name.split(' ').join('-')}`}
              name={group.name}
              countries={group.countries}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

DesktopResults.propTypes = {
  groupedCountries: groupedCountriesPropType,
};
