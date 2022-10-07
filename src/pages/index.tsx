import type { NextPage } from 'next';

import { Header } from '~/components/Sections/Header';
import { Me } from '~/components/Sections/Me';

export default function Home(props: NextPage) {
  return (
    <div className="bg-bg-gradient">
      <div className="flex w-full max-w-7xl flex-col mx-auto gap-40 p-6">
        <Header />
        <Me />
      </div>
    </div>
  );
}
