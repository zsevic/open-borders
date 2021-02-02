import {
  CLOSED_BORDER,
  NEGATIVE_TEST_REQUIRED,
  NO_TEST_REQUIRED,
  QUARANTINE_REQUIRED,
  VACCINATION_REQUIRED,
} from './countries';

export const groupTabs = {
  [CLOSED_BORDER]: 'closed-border-tab',
  [NEGATIVE_TEST_REQUIRED]: 'negative-test-required-tab',
  [NO_TEST_REQUIRED]: 'no-test-required-tab',
  [QUARANTINE_REQUIRED]: 'quarantine-required-tab',
  [VACCINATION_REQUIRED]: 'vaccination-required-tab',
};
