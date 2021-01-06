import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Hint, Typeahead } from 'react-bootstrap-typeahead';
import ReactGA from 'react-ga';
import * as countriesService from 'services/countries';
import eventBus from 'utils/event-bus';
import { countriesPropType } from 'utils/prop-types';

export default function SearchBar({
  countries,
  filterCountriesList,
  showAllCountries,
}) {
  const [showClearButton, setShowClearButton] = useState(false);
  const typeaheadRef = useRef(null);

  const handleChange = useCallback(
    (selected) => {
      if (selected[0]?.name) {
        filterCountriesList(selected[0].name);
        setShowClearButton(true);
        if (process.env.NODE_ENV !== 'development') {
          ReactGA.event({
            action: 'click',
            category: 'country',
            label: selected[0].name,
          });
        }
        eventBus.dispatch('selected-country', { group: selected[0].status });
      }
    },
    [filterCountriesList],
  );

  const handleInputChange = useCallback(
    (text) => {
      if (!text) {
        showAllCountries();
        setShowClearButton(false);
      }
      if (!showClearButton) {
        setShowClearButton(true);
      }
    },
    [showAllCountries, showClearButton],
  );

  const handleClear = useCallback(() => {
    typeaheadRef.current.clear();
    setShowClearButton(false);
    showAllCountries();
  }, [showAllCountries]);

  const handleSearchButton = useCallback(() => {
    typeaheadRef.current.focus();
  }, []);

  useEffect(
    () => eventBus.on('search-more', () => typeaheadRef.current.focus()),
    [],
  );

  return (
    <InputGroup className="mb-3 mt-4 border rounded-pill p-2 w-75 mx-auto">
      <Typeahead
        id="search"
        options={countries}
        ref={typeaheadRef}
        labelKey="name"
        placeholder="Pretraži zemlje"
        emptyLabel="Nema rezultata"
        renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
          <Hint>
            <InputGroup>
              <Form.Control
                {...inputProps}
                ref={(node) => {
                  inputRef(node);
                  referenceElementRef(node);
                }}
              />
              <InputGroup.Append>
                {!!showClearButton && (
                  <InputGroup id="clear-btn" onClick={handleClear}>
                    <span className="btn text-info shadow-none">
                      <FontAwesomeIcon icon="times" />
                    </span>
                  </InputGroup>
                )}
                <InputGroup id="search-btn" onClick={handleSearchButton}>
                  <span className="btn text-info shadow-none">
                    <FontAwesomeIcon icon="search" />
                  </span>
                </InputGroup>
              </InputGroup.Append>
            </InputGroup>
          </Hint>
        )}
        onChange={handleChange}
        onInputChange={handleInputChange}
        paginationText="Prikaži još"
        filterBy={countriesService.filterCountries}
      />
    </InputGroup>
  );
}

SearchBar.propTypes = {
  countries: countriesPropType,
  filterCountriesList: PropTypes.func.isRequired,
  showAllCountries: PropTypes.func.isRequired,
};
