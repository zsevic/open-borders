import { Parser as HtmlToReactParser } from 'html-to-react';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { countryPropType } from 'utils/prop-types';

export default function CountryElement({ country }) {
  const htmlToReactParser = new HtmlToReactParser();
  const { flag, info, name } = country;

  return (
    <ListGroup.Item
      key={flag}
      className="list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 text-info country">
          {flag} {name}
        </h5>
      </div>
      <p className="mb-1 text-muted" style={{ wordWrap: 'break-word' }}>
        {htmlToReactParser.parse(info)}
      </p>
    </ListGroup.Item>
  );
}

CountryElement.propTypes = {
  country: countryPropType,
};
