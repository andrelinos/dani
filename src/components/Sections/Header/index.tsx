import Image from 'next/future/image';

export function Header() {
  return (
    <section
      id="#header"
      className="flex relative img-opacity w-full justify-center items-center lg:py-40
           flex-col"
    >
      <div className="flex flex-col items-center">
        <div
          className="flex text-brand-gray-100 lg:text-6xl flex-col lg:flex-row
            items-center gap-2 lg:gap-4 mb-4"
        >
          <Image
            src="/assets/icons/nodejs.svg"
            width={80}
            height={80}
            alt="Node JS"
            className=""
          />
          NODEJS
        </div>
        <div className="flex text-brand-gray-100 text-center text-4xl lg:text-8xl font-bold">
          DO ZERO AO AVANÇADO
        </div>
        <p className="flex text-brand-gray-100 text-2xl mt-8 text-center">
          Um curso completo para quem desejar dar os primeiros passos em
          programação.
        </p>
      </div>
      <div className="flex w-full justify-center">
        <button
          className="p-6 bg-brand-pink-300 rounded-full text-xl lg:text-3xl font-semibold
              text-white mt-16 hover:cursor-pointer brightness-90 hover:brightness-110 z-0"
          type="button"
        >
          QUERO COMPRAR O CURSO
        </button>
      </div>
    </section>
  );
}
