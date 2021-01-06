import PropTypes from 'prop-types';
import React from 'react';
import GroupCounter from 'components/GroupCounter';
import { countriesPropType } from 'utils/prop-types';

export default function MobileTabTitle({ title, countries }) {
  return (
    <span>
      {title} <GroupCounter countries={countries} />
    </span>
  );
}

MobileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  countries: countriesPropType,
};
