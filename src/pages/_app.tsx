import type { AppProps } from 'next/app';

import '~/styles/globals.css';
import { Footer } from '~/components/Footer';
import { Menus } from '~/components/Header/Menus';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen min-h-screen bg-bg-gradient">
      <Menus />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
