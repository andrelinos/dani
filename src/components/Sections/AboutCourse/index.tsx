/* eslint-disable react/jsx-one-expression-per-line */
import Image from 'next/future/image';

/* eslint-disable react/no-unescaped-entities */
export function AboutCourse() {
  return (
    <section id="about" className="flex w-full text-brand-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="order-1 lg:order-2 lg:self-center">
          <h1
            className="font-bold text-4xl md:text-6xl text-center lg:text-left
          text-brand-red-500 md:mt-8"
          >
            SOBRE O CURSO
          </h1>
          <p className="text-md text-center lg:text-left text-gray-500">
            Conteúdo com a melhor qualidade
          </p>
          <div className="flex flex-col text-lg leading-6 py-8 gap-8 text-center lg:text-justify">
            <p>
              Oi galerinha tudo bem? Pra quem não me conhece, eu sou a Dani, sou
              programadora há mais de 13 anos com extenso conhecimento em
              backend, mas precisamente em Node e Java, apesar de também atuar
              um pouco com frontend.
            </p>
            <p>
              Esse curso foi desenvolvido para ajudar pessoas que estão
              iniciando ou querem iniciar em programação, se tornando excelentes
              desenvolvedoras e desenvolvedores.
            </p>
            <p>
              Através dele você será capaz de dar os seus primeiros passos,
              aprendendo o que é uma aplicação backend, como desenvolver
              utilizando boas práticas, trazendo mais maturidade para o seu
              código
            </p>
            <p>
              Se esse é o seu primeiro contato com programação, não se preocupe!
              Irei te explicar desde a configuração do seu ambiente(máquina) até
              o envio da aplicação para produção.
            </p>
            <p>
              E esse curso é somente para iniciantes? <strong>NÃO!</strong>
            </p>
            <p>
              Se você já tem alguma experiência com NodeJS esse curso também é
              pra você, pois através dele irei trazer conceitos avançados que{' '}
              <strong>COM CERTEZA</strong> irão te ajudar a se tornar um
              desenvolvedor e uma desenvolvedora <strong>MELHOR</strong>!
            </p>
            <p>
              As aulas estão sendo desenvolvidas gradativamente e serão
              liberadas ao longo das semanas. Toda atualização de aula ou aula
              nova será informada através do e-mail ou pela comunidade.
            </p>
            <p>
              E por falar em comunidade... <strong>SIM!!!</strong> Nosso curso
              tem uma comunidade própria onde o aluno terá acesso diretamente a
              mim e também a seus colegas, para tirar dúvidas, fazer networking
              e acima de qualquer coisa, evoluirmos juntos.
            </p>
            <p>
              Além dos conteúdos em aulas, você terá acesso a mentoria exclusiva
              para alunos, onde irei tirar dúvidas técnicas, falar um pouco
              sobre carreira e compartilhar um pouco das minhas muitas
              experiências.
            </p>
          </div>
        </div>
        <div className="order-2 lg:order-1 lg:self-center flex justify-center items-center grid-row-span-1">
          <div className="overflow-hidden cover rounded-md ">
            <Image
              className="w-full hidden lg:flex"
              width={741}
              height={640}
              src="/assets/images/nodejs.jpg"
              alt="Daniele Leão"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
