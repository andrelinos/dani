import type { AppProps } from 'next/app';

import '~/styles/globals.css';
import { Menus } from '~/components/Header/Menus';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen bg-bg-gradient">
      <Menus />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
