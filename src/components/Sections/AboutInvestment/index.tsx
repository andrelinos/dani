import { ButtonBuy } from '~/components/ButtonBuy';

export function AboutInvestment() {
  return (
    <section id="me" className="text-brand-gray-100">
      <div className="mb-12">
        <h1
          className="font-bold text-4xl md:text-6xl text-center lg:text-left
          text-brand-red-500 md:mt-8"
        >
          QUAL SERÁ O INVESTIMENTO?
        </h1>
        <p className="text-md text-center lg:text-left text-gray-500">
          Invista em sua carreira na tecnologia agora mesmo!
        </p>
      </div>
      <div className="flex items-center flex-col ">
        <h2
          className="text-2xl md:text-4xl text-center lg:text-left
          text-brand-gray-100 md:mt-8"
        >
          O valor do seu investimento será de apenas
        </h2>
        <div className="flex">
          <h1
            className="text-6xl md:text-8xl text-center lg:text-left
          text-brand-red-500 md:mt-8"
          >
            R$ 540,00
          </h1>
          <span className="flex items-end pb-2 pl-1">à vista</span>
        </div>
      </div>
      <p className="text-center p-2">Ou em até 12x</p>
      <ButtonBuy />
    </section>
  );
}
