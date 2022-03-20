import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Router from "next/router";
import nProgress from "nprogress";

import "../styles/nprogress.css";

import '../styles/globals.scss'
import { theme } from '../styles/theme'

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
