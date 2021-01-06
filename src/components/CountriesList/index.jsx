import { Parser as HtmlToReactParser } from 'html-to-react';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { countriesPropType } from 'utils/prop-types';

export default function CountriesList({ countries }) {
  const htmlToReactParser = new HtmlToReactParser();

  return (
    <ListGroup>
      {countries.map(({ name: countryName, info: countryInfo, flag }) => (
        <ListGroup.Item
          key={flag}
          className="list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 text-info country">
              {flag} {countryName}
            </h5>
          </div>
          <p className="mb-1 text-muted" style={{ wordWrap: 'break-word' }}>
            {htmlToReactParser.parse(countryInfo)}
          </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

CountriesList.propTypes = {
  countries: countriesPropType,
};
