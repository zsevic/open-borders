import { dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import React from 'react';

export default function CommonHead() {
  return (
    <Head>
      <meta key="charset" charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <style>{dom.css()}</style>
    </Head>
  );
}
