import PropTypes from 'prop-types';
import React from 'react';
import GroupCounter from 'components/GroupCounter';
import GroupResults from 'components/GroupResults';
import { countriesPropType } from 'utils/prop-types';

export default function DesktopGroup({ name, countries }) {
  return (
    <div className="col mt-2">
      <p className="lead text-center text-info">
        {name} <GroupCounter countries={countries} />
      </p>
      <GroupResults countries={countries} />
    </div>
  );
}

DesktopGroup.propTypes = {
  name: PropTypes.string.isRequired,
  countries: countriesPropType,
};
