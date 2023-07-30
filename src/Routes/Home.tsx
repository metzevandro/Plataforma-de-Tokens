import Home1 from "../assets/Home1.png";
import Home2 from "../assets/Home2.png";
import Home3 from "../assets/Home3.png";

import Token1 from "../assets/Token.png";

import { Card } from "../components/Home/Card";
import Money from "../assets/Money.svg";

import { Token } from "../components/Home/Token";

export function Home() {
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="flex items-center laptop:justify-between phone:mt-8 phone:flex-col phone:gap-[32px] laptop:mt-20 phone:w-[90%] tablet:w-[85%] laptop:flex-row">
        <div className="flex flex-col items-start phone:full laptop:w-[50%] desktop:w-[40%] phone:gap-4 laptop:gap-10">
          <h1 className="font-sans uppercase text-overlay phone:text-[24px] laptop:text-4xl">
            Invista NAS empresas <br /> QUE você acredita, <br />{" "}
            <b>INVISTA EM TOKENS.</b>
          </h1>
          <p className="font-sans text-overlay phone:text-[16px]">
            Construído na blockchain para mais independência, mais transparência
            e sem intermediários.
          </p>
          <a
            href="/NotFound"
            className="border border-blue bg-blue py-[24px] text-center font-sans font-semibold uppercase text-white phone:w-full laptop:w-[291.8px]"
          >
            Ver oportunidades
          </a>
        </div>
        <div className="phone:w-full laptop:w-[50%] desktop:w-[50%]">
          <img src={Home1} alt="" className="bg-none" />
        </div>
      </div>
      <div className="phone:h-16 laptop:h-24"></div>
      <div className="flex flex-col items-center font-sans font-bold text-overlay phone:w-[90%] phone:justify-start phone:text-[24px] laptop:w-full laptop:justify-center laptop:text-4xl">
        <div className="phone:flex phone:items-start">
          <h1 className="uppercase">VEJA TOKENS</h1>
        </div>
        <div className="flex pt-16 laptop:flex-row phone:gap-4 phone:flex-col justify-between w-[85%] tablet:w-[90%]">
          <Token 
          title="ENOMA RIPOL"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={Token1}
          state={true  }
          day={30}
          cash={238}
          investors={3}
          />
          <Token 
          title="ENOMA RIPOL"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={Token1}
          state={false}
          day={23}
          cash={350}
          investors={8}
          />
          <Token 
          title="ENOMA RIPOL"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={Token1}
          state={true}
          day={11}
          cash={590}
          investors={4}
          />
        </div>
      </div>
      <div className=" mt-10 flex items-center justify-center phone:w-[90%] laptop:w-[1264px]">
        <div className="flex phone:mb-[26.22px] phone:flex-col  phone:gap-[32px] laptop:mb-24 laptop:flex-row laptop:gap-[26px]"></div>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-light-blue pb-24">
        <div className="flex flex-col items-center justify-center font-sans font-bold uppercase text-overlay phone:w-[90%] tablet:w-[85%] phone:pt-[64px] phone:pb-[32px] phone:text-start phone:text-2xl laptop:py-24 laptop:text-center laptop:text-4xl">
          <h1>conheça as vantagens de investir em tokens</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 phone:w-[90%] tablet:w-[75%]">
          <div className="flex justify-between phone:flex-col laptop:flex-row w-full phone:gap-5">
            <Card
              image={Money}
              title="preço"
              description="Você não precisa de muito dinheiro para começar a investir"
            />
            <Card
              image={Money}
              title="diversificação"
              description="Diversas opções de investimento para você escolher"
            />
            <Card
              image={Money}
              title="Taxas"
              description="Taxas baixíssimas que cabem no seu bolso"
            />
          </div>
          <div className="flex justify-between phone:flex-col laptop:flex-row phone:gap-5">
            <Card
              image={Money}
              title="Liberdade"
              description="Você pode negociar seus ativos quando e onde quiser"
            />
            <Card
              image={Money}
              title="Transparência"
              description="Todos os relatórios das suas transações registradas na Blockchain"
            />
            <Card
              image={Money}
              title="Segurança"
              description="Seus negócios com contratos para garantir a sua segurança"
            />
          </div>
        </div>
      </div>
      <div className="phone:h-16 laptop:h-24"></div>
      <div className="phone:w-[90%] tablet:w-[85%] flex justify-between phone:flex-col phone:items-center phone:gap-[32px] laptop:flex-row laptop:gap-[57.16px] ">
        <div className="flex flex-col items-start laptop:w-[50%] desktop:w-[40%] phone:gap-[16px]  laptop:gap-10">
          <h1 className="font-sans uppercase text-overlay phone:text-2xl laptop:text-4xl">
            FAÇA PARTE DO MERCADO QUE <b> MAIS CRESCEU </b> NOS ÚLTIMOS ANOS
          </h1>
          <p className="font-sans text-[16px] text-overlay">
            Segundo um estudo da MarketsandMarkets Research, feito no primeiro
            semestre deste ano, o mercado de tokens irá multiplicar seu valor
            até 2026, chegando a US$ 5,6 bilhões.
          </p>
          <a
            href="/NotFound"
            className="border border-blue bg-blue py-[24px] text-center font-sans font-semibold uppercase text-white phone:mt-[16px] phone:w-[100%] laptop:w-[291.8px]"
          >
            <button className="uppercase">Começar agora</button>
          </a>
        </div>
        <div className="phone:w-full laptop:w-[50%] desktop:w-[50%]">
          <img src={Home2} alt="" className="" />
        </div>
      </div>
      <div className="phone:h-16 laptop:h-24"></div>
      <div className="phone:w-[90%] tablet:w-[85%] flex items-center justify-between phone:flex-col phone:gap-[32px] laptop:flex-row laptop:gap-[76.74px]">
        <div className="phone:w-full laptop:w-[50%] desktop:w-[50%]">
          <img src={Home3} alt="" className="" />
        </div>
        <div className="flex flex-col items-start laptop:w-[50%] desktop:w-[40%] phone:gap-[16px]  laptop:gap-10">
          <h1 className="font-sans uppercase text-overlay phone:text-2xl laptop:text-4xl">
            um <b> mundo novo </b>de possibilidades
          </h1>
          <p className="font-sans font-[26px] text-overlay">
            Acesse nossa página exclusiva <i>“Para Aprender”</i> e domine todos
            os assuntos sobre tokens.
          </p>
          <a
            href="/Tokens2"
            className=" border border-blue bg-blue py-[24px] text-center font-sans font-semibold uppercase text-white phone:mt-[16px] phone:w-[100%] laptop:w-[291.8px]"
          >
            <button className="uppercase phone:text-xs laptop:text-base">
              quero saber mais
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center phone:my-16 phone:w-[90%] phone:gap-[32px] laptop:mt-24 laptop:mb-32 laptop:gap-10">
        <h1 className="font-sans font-bold uppercase text-overlay phone:w-full phone:text-center phone:text-2xl laptop:text-4xl">
          pronto para começar?
        </h1>
        <div className="flex flex-col phone:gap-4 laptop:gap-4">
          <button className="bg-blue font-sans font-semibold uppercase text-white phone:w-full phone:py-6 laptop:w-80 laptop:py-4">
            Quero começar
          </button>
          <button className="border-2 border-blue font-sans font-semibold uppercase text-blue phone:w-full phone:py-6 phone:px-[14px] laptop:w-80 laptop:py-4">
            Falar com equipe comercial
          </button>
        </div>
      </div>
    </article>
  );
}
