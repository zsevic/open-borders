import PropTypes from 'prop-types';
import React from 'react';
import GroupCounter from 'components/GroupCounter';
import { countriesPropType } from 'utils/prop-types';

export default function TabTitle({ title, countries }) {
  return (
    <span style={{ padding: 0 }}>
      {title} <GroupCounter countries={countries} />
    </span>
  );
}

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  countries: countriesPropType,
};
