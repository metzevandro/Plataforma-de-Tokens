import Logo from "../../assets/Invest-Dark.svg";
import { CreateAccount } from "./CreateAccount";
import { Enter } from "./Enter";
import PopoverDemo from "./Popover";

export function Header() {
  return (
    <div className="px-22 flex justify-center border-b-border py-7">
      <div className="phone:w-[90%] tablet:w-[85%] flex justify-between">
        <div className="flex items-center laptop:gap-[32px]">
          <a href="/" className="h-[40px] phone:flex phone:items-center">
            <img src={Logo} />
          </a>
          <a
            href="/Tokens"
            className="font-sans font-semibold uppercase leading-5 phone:hidden laptop:flex laptop:py-3 laptop:text-xs "
          >
            Para Investidores
          </a>
          <a
            href="/Tokens"
            className="font-sans font-semibold uppercase leading-5 phone:hidden laptop:flex laptop:py-3 laptop:text-xs "
          >
            Para Empresas
          </a>
          <a
            href="/LearnMore"
            className="font-sans font-semibold uppercase leading-5 phone:hidden laptop:flex laptop:py-3 laptop:text-xs "
          >
            Para Aprender
          </a>
        </div>
        <div className="flex phone:hidden laptop:flex">
          <div className="flex items-center justify-center gap-1">
            <Enter />
            <CreateAccount />
          </div>
        </div>
        <div className="items-center phone:flex laptop:hidden">
          <PopoverDemo />
        </div>
      </div>
    </div>
  );
}
