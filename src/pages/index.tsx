import type { NextPage } from 'next';

import { AboutCourse } from '~/components/Sections/AboutCourse';
import { AboutInvestment } from '~/components/Sections/AboutInvestment';
import { Doubts } from '~/components/Sections/Doubts';
import { Header } from '~/components/Sections/Header';
import { Me } from '~/components/Sections/Me';

export default function Home(props: NextPage) {
  return (
    <div className="bg-bg-gradient">
      <div className="flex w-full min-h-screen max-w-7xl flex-col mx-auto gap-40 p-6">
        <Header />
        <Me />
        <AboutCourse />
        <Doubts />
        <AboutInvestment />
      </div>
    </div>
  );
}
