import { ReactNode } from 'react';

interface CardsProps {
  title: string;
  text: string;
  comingSoon?: boolean;
  icon: ReactNode;
}

export function Cards({
  comingSoon = false,
  title,
  text,
  icon,
  ...rest
}: CardsProps) {
  return (
    <div className="relative p-6 border border-brand-gray-100 rounded-lg">
      <div className="absolute -top-14 left-0 right-0 flex text-6xl justify-center">
        <div
          className="flex w-24 h-24 bg-brand-pink-300 rounded-full justify-center items-center
        font-thin p-6 text-brand-gray-100"
        >
          {icon}
        </div>
        {comingSoon && (
          <span
            className="absolute py-2 px-4 text-brand-green-500 text-xs -bottom-0 right-2
        rounded-md font-bold"
          >
            em breve
          </span>
        )}
      </div>
      <div>
        <h1 className="pt-8 font-bold text-center text-lg">{title}</h1>
        <p className="pt-8 text-justify">{text}</p>
      </div>
    </div>
  );
}
