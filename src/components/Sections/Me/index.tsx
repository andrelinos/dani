import Image from 'next/future/image';

/* eslint-disable react/no-unescaped-entities */
export function Me() {
  return (
    <section id="me" className="text-brand-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-2 lg:order-1 lg:self-center">
          <h1 className="font-bold text-6xl text-center lg:text-left text-brand-red-500 mt-8">
            SOBRE MIM
          </h1>
          <p className="text-xs text-center lg:text-left">
            Conheça um pouco da minha história
          </p>
          <div className="flex flex-col text-lg leading-6 py-8 gap-8 text-center lg:text-left">
            <p>
              Oi galerinha tudo bem? Pra quem não me conhece, eu sou a Dani, sou
              programadora há mais de 13 anos com extenso conhecimento em
              backend, mas precisamente em Node e Java, apesar de também atuar
              um pouco com frontend.
            </p>
            <p>
              Sou uma pessoa extremamente apaixonada por programação e busco o
              tempo todo estar evoluindo e aprendendo algo novo, principalmente
              conteúdos ligados a construção de bons códigos, arquitetura de
              software, microserviços
            </p>
            <p>
              Atualmente atuo como Tech Lead, Educadora e criadora de conteúdo
              para YouTube e Instagram.
            </p>
            <p>
              Já ajudei mais de 1000 alunos, através das minhas aulas, ensinando
              com uma didática diferente, com tudo o que é necessário mas indo
              direto ao ponto; de uma forma diferente e que deixe nosso ensino
              "um pouco mais leve".
            </p>
            <p>E esse é um resuminho de quem sou eu.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:self-center flex justify-center items-center grid-row-span-1">
          <Image
            className="opacity-30"
            width={740}
            height={600}
            src="/assets/images/danisf.png"
            alt="Daniele Leão"
          />
        </div>
      </div>
    </section>
  );
}
