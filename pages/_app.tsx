import '../styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
      <MainFooter />
    </>
  );
}

export default MyApp;
