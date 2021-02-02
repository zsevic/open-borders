import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ReactGA from 'react-ga';
import GroupResults from 'components/GroupResults';
import TabTitle from 'components/TabTitle';
import {
  CLOSED_BORDER,
  NEGATIVE_TEST_REQUIRED,
  NO_TEST_REQUIRED,
  QUARANTINE_REQUIRED,
  VACCINATION_REQUIRED,
} from 'constants/countries';
import { groupTabs } from 'constants/tabs';
import { getCountriesCounter } from 'services/countries';
import eventBus from 'utils/event-bus';
import { groupedCountriesPropType } from 'utils/prop-types';

export default function Results({ groupedCountries }) {
  const [activeTab, setActiveTab] = useState(groupTabs[NO_TEST_REQUIRED]);
  const tabs = useMemo(
    () => [
      {
        group: NO_TEST_REQUIRED,
        title: 'Ne treba test',
      },
      {
        group: VACCINATION_REQUIRED,
        title: 'Potvrda o vakcinaciji',
      },
      {
        group: NEGATIVE_TEST_REQUIRED,
        title: 'Negativan test',
      },
      {
        group: QUARANTINE_REQUIRED,
        title: 'Obavezan karantin',
      },
      {
        group: CLOSED_BORDER,
        title: 'Zatvorene granice',
      },
    ],
    [],
  );

  const handleOnSelect = useCallback((selectedTab) => {
    setActiveTab(selectedTab);
    if (process.env.NODE_ENV !== 'development') {
      ReactGA.event({
        action: 'click',
        category: 'tab',
        label: selectedTab,
      });
    }
  });

  useEffect(() => {
    eventBus.on('selected-country', (data) => {
      data.group && setActiveTab(groupTabs[data.group]);
    });
    return () => eventBus.remove('selected-country');
  }, []);

  return (
    <div className="container d-block mt-3">
      <Tabs
        activeKey={activeTab}
        onSelect={handleOnSelect}
        className="nav nav-tabs nav-fill mb-3 bg-tabs">
        {tabs.map(
          (tab) =>
            getCountriesCounter(groupedCountries[tab.group]) > 0 && (
              <Tab
                key={groupTabs[tab.group]}
                eventKey={groupTabs[tab.group]}
                title={
                  <TabTitle
                    title={tab.title}
                    countries={groupedCountries[tab.group]}
                  />
                }
                tabClassName="nav-item w-50 text-info">
                <GroupResults countries={groupedCountries[tab.group]} />
              </Tab>
            ),
        )}
      </Tabs>
    </div>
  );
}

Results.propTypes = {
  groupedCountries: groupedCountriesPropType,
};
