import { NextUIProvider } from '@nextui-org/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'
import { darkTheme } from '../themes';

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement ) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  return (
    <>
      <NextUIProvider theme={ darkTheme }>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  )
  // return getLayout( <Component {...pageProps} /> )
}

export default MyApp
