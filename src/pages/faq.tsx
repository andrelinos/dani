import YouTube from 'react-youtube';

export default function Faq() {
  const opts = {
    minHeight: '120',
    minWidth: '320',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="flex w-full min-h-screen max-w-7xl flex-col mx-auto p-6">
      <div className="mb-14">
        <h1
          className="font-bold text-4xl md:text-6xl text-center lg:text-left
      text-brand-red-500 md:mt-8"
        >
          PERGUNTAS FREQUENTES
        </h1>
        <p className="text-md text-center lg:text-left text-gray-500">
          Tire todas as suas dúvidas
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-6  items-center pb-28">
        <h1
          className="font-bold text-3xl md:text-4xl text-center lg:text-left
          text-brand-gray-100"
        >
          Como funciona o Node.js
        </h1>
        <YouTube
          className="flex w-full justify-center"
          videoId="7niEXbKU8GM"
          opts={opts}
          onReady={() => {}}
        />
        <h1
          className="font-bold text-3xl md:text-4xl text-center lg:text-left
          text-brand-gray-100 mt-20"
        >
          Criando uma aplicação Backend do ZERO
        </h1>
        <YouTube
          className="flex w-full justify-center "
          videoId="sstnDt2bhHA"
          opts={opts}
          onReady={() => {}}
        />
      </div>
    </div>
  );
}
