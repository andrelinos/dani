/* eslint-disable no-confusing-arrow */
import { useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { List, X } from 'phosphor-react';

import { menus } from '~/pages/api/menus';

interface Props {
  title: string;
  url: string;
  ext?: boolean;
}

export function NavMobile() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex lg:hidden w-full items-center flex-col">
      <div className="flex w-full max-w-7xl mx-auto p-6 justify-between items-center">
        <span className="w-14">
          <img src="./assets/images/logo.svg" alt="" />
        </span>
        <div className="">
          <button
            className={classNames('relative z-50', {
              'text-brand-gray-100': !showMenu,
              'text-brand-red-200': showMenu,
            })}
            type="button"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <X size={44} weight="light" />
            ) : (
              <List size={44} weight="light" />
            )}
          </button>
          <div
            className={classNames(
              `absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-brand-gray-900
              text-2xl font-medium gap-6 z-20 bg-opacity-90`,
              {
                'flex ': showMenu,
                'hidden ': !showMenu,
              },
            )}
          >
            <div className="flex w-full p-20 mt-16 flex-col items-center">
              {menus?.top?.map((menu: Props) =>
                menu.ext ? (
                  <a key={menu?.title} href={menu?.url}>
                    <span className="p-3 text-brand-gray-100 hover:text-brand-purple-300">
                      {menu?.title}
                    </span>
                  </a>
                ) : (
                  <Link key={menu?.title} href={menu?.url}>
                    <span className="p-3 text-brand-gray-100 hover:text-brand-purple-300">
                      {menu?.title}
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
