import { AiOutlineApi, AiOutlineConsoleSql } from 'react-icons/ai';
import { BsFillCloudCheckFill, BsGift } from 'react-icons/bs';
import { MdCoffeeMaker } from 'react-icons/md';
import { SiExpress, SiPrisma, SiTypescript } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

import { DesktopTower, FileJs, FileTs, Table } from 'phosphor-react';

import { Cards } from './Cards';

import { ButtonBuy } from '~/components/ButtonBuy';

export function Doubts() {
  return (
    <section id="me" className="">
      <div className="mb-24">
        <h1
          className="font-bold text-4xl md:text-6xl text-center lg:text-left
          text-brand-red-500 md:mt-8"
        >
          O QUE IREI APRENDER?
        </h1>
        <p className="text-md text-center lg:text-left text-gray-500">
          Aprenda com quem entende do assunto
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full text-brand-gray-100 gap-x-8 gap-y-24">
        <Cards
          title="Configuração de ambiente"
          icon={<DesktopTower />}
          text="Nesse módulo você vai aprender como configurar seu ambiente, instalando os programas e ferramentas necessárias para dar o início ao curso. As ferramentas instaladas serão ensinadas tanto para Windows como para Unix (MacOS e Linux)"
        />
        <Cards
          title="Fundamentos de Javascript"
          icon={<TbBrandJavascript />}
          text="Um dos pontos mais importantes para você aproveitar o curso da melhor forma possível, é você ter o conhecimento básico sobre Javascript. Por isso, nesse módulo você vai aprender os fundamentos básicos como o que é uma função, como executar arquivos na sua máquina, estrutura condicionais como if/else, estrutura de repetição while e muito mais."
        />
        <Cards
          title="API Sem Framework com SQL Puro"
          icon={<AiOutlineConsoleSql />}
          text="Aprender a trabalhar com o NodeJS é o objetivo do curso, por isso nesse módulo você vai aprender o que é o NodeJS, como ele funciona, vai aprender sobre Event Loop, Callback Queue, Callback Task. Você vai aprender os conceitos de uma API, métodos e códigos HTTP e como criar uma API totalmente do zero, sem a utilização de nenhum framework e com SQL puro"
        />
        <Cards
          title="Typescript"
          icon={<SiTypescript />}
          text="Nesse módulo você vai aprender o que é o Typescript, como ele pode facilitar o desenvolvimento da nossa aplicação, através dos tipos que inserimos para classes, variáveis, retorno de funções entre outros; quais vantagens e desvantagens que temos ao utilizá-lo"
        />
        {/* Em breve */}
        <Cards
          title="API com Express.js"
          icon={<SiExpress />}
          comingSoon
          text="Agora que você já aprendeu como o Node funciona por baixo dos panos, é a hora de estudar alguns frameworks que irão auxiliar na construção de uma API. Nesse módulo você vai aprender sobre o framework ExpressJS, que iremos utilizar pra criação da nossa API, manipulação de rotas e criação de middlewares"
        />
        <Cards
          title="Integração Prisma ORM"
          icon={<SiPrisma />}
          comingSoon
          text="Nesse módulo você vai aprender o que é o Prisma ORM, como integrar ele em seu projeto e como utilizá-lo para fazer a comunicação com o banco     de dados e a manipulação dos nossos dados, além de aprender sobre os conceitos de migrations e algumas ferramentas do Prisma"
        />
        <Cards
          title="Amadurecendo a aplicação"
          icon={<MdCoffeeMaker />}
          comingSoon
          text="Agora que você já aprendeu como construir uma aplicação com ExpressJS, aprendeu como integrar o Prisma pra trabalhar com banco de dados, é hora de levarmos nosso curso para o próximo nível. Nesse módulo você irá aprender boas práticas para o desenvolvimento de projeto como conceitos de SOLID, testes unitários, TDD e autenticação"
        />
        <Cards
          title="Acessando APIs externas e trabalhando com Stream"
          icon={<AiOutlineApi />}
          comingSoon
          text="Nesse módulo você vai aprender o que é o Stream do Node, como manipular arquivos e como criar um player de vídeo. Você também aprenderá como acessar APIs externas, como S3 e envio de e-mail com nodemailer."
        />
        <Cards
          title="Deploy"
          icon={<BsFillCloudCheckFill />}
          comingSoon
          text="Nesse módulo você vai aprender algumas formas para realizar o deploy da sua aplicação, utilizando aplicações gratuitas e aplicações mais profissionais. Você também aprenderá como trabalhar com CI/CD."
        />
        <Cards
          title="Bônus - SQL"
          icon={<BsGift />}
          comingSoon
          text="Um dos conceitos mais importantes para quem quer aprender sobre Backend é saber o que é SQL e como utiliza-lo para manipular dados no banco de dados, por isso, nesse bônus você vai aprender desde a criação de uma tabela até a manipulação de dados com relacionamento entre tabelas."
        />
        <Cards
          title="Bônus - Docker"
          icon={<BsGift />}
          comingSoon
          text="Nesse módulo você vai aprender como instalar e configurar o Docker na sua máquina, tanto para Windows como para Unix(MacOS e Linux). Você aprenderá os conceitos de docker como criação de container, imagens, como criar suas próprias imagens, criação de Dockerfile e utilização do docker compose."
        />
        <Cards
          title="Bônus - Microserviços"
          icon={<BsGift />}
          comingSoon
          text="Um dos assuntos mais temidos e que causa muita confusão é o conceito de 'microserviços'. Nesse módulo você vai aprender o que é microserviços, porquê e quando utilizá-lo, além de colocar em prática o conceito, criando aplicações que se comunicam entre si, através de mensageria. Você também aprenderá o que é o API Gateway e como configurar ele para suas aplicações."
        />
        <Cards
          title="Bônus - NestJS"
          icon={<BsGift />}
          comingSoon
          text="Nesse módulo você vai aprender o que é o NestJS, como utilizá-lo para criação de APIs, além de trabalhar com alguns módulos disponíveis dentro do NestJS, como Redis, Queues, Looging, Task Scheduling, entre outros."
        />
      </div>
      <ButtonBuy />
    </section>
  );
}
