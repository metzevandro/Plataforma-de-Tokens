import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";

import Logo from "../../assets/Invest-Light.svg";

export function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-overlay phone:gap-16 phone:py-16 tablet:gap-20 laptop:gap-20 tablet:py-24 laptop:py-24 desktop:gap-20 desktop:py-24">
      <div className="flex phone:w-[90%] tablet:w-[85%] tablet:flex-row gap-14 justify-between phone:flex-col desktop:flex-row">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <div className="flex flex-col gap-6 font-sans text-base font-bold uppercase text-border">
          <p>3.0 Invest</p>
          <a href="#">Home</a>
          <a href="">Para Investidores</a>
          <a href="">Para Compradores</a>
          <a href="/LearnMore">Para Aprender</a>
        </div>
        <div className="flex flex-col gap-6 font-sans text-base font-bold uppercase text-border">
          <a href="">Minha conta</a>
          <a href="">Entrar</a>
          <a href="">Criar conta</a>
        </div>
        <div className="flex flex-col gap-6 font-sans text-base font-bold uppercase text-border">
          <p>Redes Socias</p>
          <div className="flex gap-10">
            <a href="">
              <img src={Facebook} alt="" />
            </a>
            <a href="">
              <img src={Instagram} alt="" />
            </a>
            <a href="">
              <img src={Twitter} alt="" />
            </a>
            <a href="">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex font-sans text-base uppercase text-border phone:w-[90%] tablet:w-[90%] tablet:justify-center phone:justify-start desktop:w-[1024px] desktop:justify-center">
        <p>© 3.0 invest, todos os direitos reservados.</p>
      </div>
    </div>
  );
}
