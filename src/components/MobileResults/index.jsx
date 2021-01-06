import classnames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import GroupResults from 'components/GroupResults';
import MobileTabTitle from 'components/MobileTabTitle';
import {
  CLOSED_BORDER,
  NEGATIVE_TEST_REQUIRED,
  NO_TEST_REQUIRED,
  QUARANTINE_REQUIRED,
} from 'constants/countries';
import { getCountriesCounter } from 'services/countries';
import eventBus from 'utils/event-bus';
import { isInAppBrowser } from 'utils/in-app-browser';
import { groupedCountriesPropType } from 'utils/prop-types';

export default function MobileResults({ groupedCountries }) {
  const [inAppBrowser, setInAppBrowser] = useState(false);
  const mobileTabClass = classnames({
    'nav-item': true,
    'w-50': true,
    'text-info': true,
    'in-app-browser-tabs': inAppBrowser,
  });
  const [key, setKey] = useState('home');
  const groupKeys = useMemo(
    () => ({
      [NO_TEST_REQUIRED]: 'home',
      [NEGATIVE_TEST_REQUIRED]: 'menu1',
      [QUARANTINE_REQUIRED]: 'menu2',
      [CLOSED_BORDER]: 'menu3',
    }),
    [],
  );
  const tabs = [
    {
      group: NO_TEST_REQUIRED,
      title: 'Ne treba test',
    },
    {
      group: NEGATIVE_TEST_REQUIRED,
      title: 'Potreban test',
    },
    {
      group: QUARANTINE_REQUIRED,
      title: 'Karantin',
    },
    {
      group: CLOSED_BORDER,
      title: 'Zatvorene granice',
    },
  ];

  useEffect(() => {
    eventBus.on('selected-country', (data) => {
      data.group && setKey(groupKeys[data.group]);
    });
    if (isInAppBrowser()) {
      setInAppBrowser(true);
    }
    return () => eventBus.remove('selected-country');
  }, [groupKeys]);

  return (
    <div className="container d-block d-lg-none mt-3">
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="nav nav-tabs nav-fill mb-3 bg-tabs">
        {tabs.map(
          (tab) =>
            getCountriesCounter(groupedCountries[tab.group]) > 0 && (
              <Tab
                key={groupKeys[tab.group]}
                eventKey={groupKeys[tab.group]}
                title={
                  <MobileTabTitle
                    title={tab.title}
                    countries={groupedCountries[tab.group]}
                  />
                }
                tabClassName={mobileTabClass}>
                <GroupResults countries={groupedCountries[tab.group]} />
              </Tab>
            ),
        )}
      </Tabs>
    </div>
  );
}

MobileResults.propTypes = {
  groupedCountries: groupedCountriesPropType,
};
