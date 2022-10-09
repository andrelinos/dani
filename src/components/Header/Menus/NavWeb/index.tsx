import Link from 'next/link';

import { menus } from '~/pages/api/menus';

interface Props {
  title: string;
  url: string;
}

export function NavWeb() {
  return (
    <div className="hidden lg:flex w-full items-center flex-col">
      <div className="flex w-full max-w-7xl mx-auto p-4 justify-between items-center">
        <span className="w-20">
          <img src="./assets/images/logo.svg" alt="" />
        </span>
        <div>
          <div
            className="flex gap-4 font-medium text-brand-gray-100
                transition-all"
          >
            {menus?.top?.map((menu: Props) => (
              <Link key={menu.title} href={menu.url}>
                <span
                  className="p-1 block text-brand-gray-100 hover:text-brand-purple-300
                transition-all cursor-pointer"
                >
                  {menu.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
