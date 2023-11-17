import React from 'react';
import { SessionProvider } from 'next-auth/react';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from 'theme/theme';

import 'styles/Fonts.css';
import 'styles/App.css';
import 'styles/Contact.css';

import 'react-calendar/dist/Calendar.css';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import 'styles/MiniCalendar.css';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: any }>) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Outsource Dashboard</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
      </Head>

      <React.StrictMode>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default MyApp;
