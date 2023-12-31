import React, { useEffect, useState } from 'react';
import { Layout } from '../components';

import '../styles/global-styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
