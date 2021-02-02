import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import GroupCounter from 'components/GroupCounter';
import { countriesPropType } from 'utils/prop-types';

export default function TabTitle({ title, countries }) {
  return (
    <Fragment>
      <div className="text-center">{title}</div>
      <div className="text-center">
        <GroupCounter countries={countries} />
      </div>
    </Fragment>
  );
}

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  countries: countriesPropType,
};
