import PropTypes from 'prop-types';
import {
  CLOSED_BORDER,
  NEGATIVE_TEST_REQUIRED,
  NO_TEST_REQUIRED,
  QUARANTINE_REQUIRED,
} from 'constants/countries';

const countryPropType = PropTypes.shape({
  flag: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
});

export const countriesPropType = PropTypes.arrayOf(countryPropType);

export const groupedCountriesPropType = PropTypes.shape({
  [CLOSED_BORDER]: PropTypes.arrayOf(countryPropType),
  [NO_TEST_REQUIRED]: PropTypes.arrayOf(countryPropType),
  [NEGATIVE_TEST_REQUIRED]: PropTypes.arrayOf(countryPropType),
  [QUARANTINE_REQUIRED]: PropTypes.arrayOf(countryPropType),
});
