import Link from 'next/link';
import { ArrowUp, CaretUp } from 'phosphor-react';

import { NavWeb } from '../Header/Menus/NavWeb';

import { menus } from '~/pages/api/menus';

interface Props {
  title: string;
  url: string;
}

export function Footer() {
  function handleGoToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <section id="me" className="flex w-full flex-col text-brand-gray-100 py-24">
      <NavWeb />
      <button
        type="button"
        onClick={handleGoToTop}
        className="w-32 mx-auto mt-32 "
      >
        <span className="flex flex-col items-center text-brand-pink-500 text-center hover:text-brand-pink-400">
          <CaretUp size={64} weight="bold" />
          Voltar ao top
        </span>
      </button>
    </section>
  );
}
