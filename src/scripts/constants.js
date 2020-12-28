const CLOSED_BORDER = 'CLOSED_BORDER';
const NEGATIVE_TEST_REQUIRED = 'NEGATIVE_TEST_REQUIRED';
const NO_TEST_REQUIRED = 'NO_TEST_REQUIRED';
const QUARANTINE_REQUIRED = 'QUARANTINE_REQUIRED';

export const COUNTRY_TYPES = [CLOSED_BORDER, NEGATIVE_TEST_REQUIRED,
  NO_TEST_REQUIRED, QUARANTINE_REQUIRED];

export const OBJECT_STORE = 'otvorene-granice';
export const IDB_DATABASE_NAME = `${OBJECT_STORE}-store`;
export const IDB_DATABASE_VERSION = 1;
