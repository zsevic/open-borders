import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { concat, slice } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import CountryElement from 'components/Countries/CountryElement';
import { COUNTRY_LIST_LIMIT as LIMIT } from 'constants/countries';
import { countriesPropType } from 'utils/prop-types';

export default function CountryList({ countries, length }) {
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(countries, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < length - 1;
    const newList = concat(list, slice(countries, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <ListGroup>
      {list.map((country) => (
        <CountryElement key={country.flag} country={country} />
      ))}
      <div className="my-2 d-flex">
        {showMore && (
          <Button
            variant="info"
            className="load-more-btn mx-auto"
            onClick={loadMore}>
            <FontAwesomeIcon icon="arrow-circle-down" color="white" /> Učitaj
            još
          </Button>
        )}
        <Button variant="info" className="scroll-up-btn mx-auto" href="#logo">
          <FontAwesomeIcon icon="arrow-circle-up" color="white" /> Vrati se
        </Button>
      </div>
    </ListGroup>
  );
}

CountryList.propTypes = {
  countries: countriesPropType,
  length: PropTypes.number.isRequired,
};
