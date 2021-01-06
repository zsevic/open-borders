import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import CommonHead from 'components/CommonHead';
import DesktopResults from 'components/DesktopResults';
import Header from 'components/Header';
import Loader from 'components/Loader';
import MobileResults from 'components/MobileResults';
import SearchBar from 'components/SearchBar';
import {
  DOMAIN_URL,
  HOMEPAGE_META_DESCRIPTION,
  HOMEPAGE_TITLE,
} from 'constants/config';
import * as countriesService from 'services/countries';

export default function HomePage() {
  const [groupedCountries, setGroupedCountries] = useState({});
  const [countriesList, setCountriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    countriesService
      .loadCountriesList(setGroupedCountries)
      .then((loadedCountriesList) => {
        setLoading(false);
        setCountriesList(loadedCountriesList);
      });
  }, []);

  const filterCountriesList = useCallback(
    (name) => {
      const filteredCountriesList = countriesList.filter(
        (country) => country.name === name,
      );
      const countries = countriesService.getGroupedCountries(
        filteredCountriesList,
      );
      setGroupedCountries(countries);
    },
    [countriesList],
  );

  const showAllCountries = useCallback(
    () =>
      setGroupedCountries(countriesService.getGroupedCountries(countriesList)),
    [countriesList],
  );

  return (
    <div className="mb-4">
      <CommonHead />
      <Head>
        <meta name="description" content={HOMEPAGE_META_DESCRIPTION} />

        <meta property="og:description" content={HOMEPAGE_META_DESCRIPTION} />
        <meta
          property="og:image"
          content={DOMAIN_URL + '/assets/logo-main.png'}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="og:image"
          content={DOMAIN_URL + '/assets/logo-whatsapp.png'}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />

        <meta property="og:title" content={HOMEPAGE_TITLE} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DOMAIN_URL} />

        <link rel="canonical" href={DOMAIN_URL} />
        <title>{HOMEPAGE_TITLE}</title>
      </Head>
      <Header />
      <SearchBar
        countries={countriesList}
        filterCountriesList={filterCountriesList}
        showAllCountries={showAllCountries}
      />
      <MobileResults groupedCountries={groupedCountries} />
      <DesktopResults groupedCountries={groupedCountries} />
      {loading && <Loader />}
    </div>
  );
}
