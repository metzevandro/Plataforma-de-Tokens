import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckIcon } from '@radix-ui/react-icons';


export function ForInvestors() {
  return (
    <div>
      <Dialog.Root>
        <div className="flex justify-center pt-4">
          <Dialog.Trigger>
            <button className="border-2 border-blue bg-blue py-4 px-[22px] font-sans font-normal uppercase text-white">
              Para Investidores
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 flex h-screen w-screen items-center bg-overlay/80" />
            <Dialog.Content className="max-w-screen-sm fixed top-1/2 left-1/2 desktop:w-[40%] laptop:w-[40%] tablet:w-[60%] phone:w-[90%] -translate-x-1/2 -translate-y-1/2 transform bg-white">
              <div className="flex justify-end">
                <Dialog.Close>
                  <span className="material-icons-outlined bg-overlay p-5 text-white">
                    close
                  </span>
                </Dialog.Close>
              </div>
              <Dialog.Title className="leading- flex justify-center pt-8 pb-12 align-text-top font-sans text-3xl font-semibold uppercase">
                Crie sua conta
              </Dialog.Title>
              <div className="flex flex-col gap-4">
                <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
                  <form action="" className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-sans text-sm font-semibold"
                    >
                      Seu e-mail
                    </label>
                    <input
                      className="h-10 border border-border pl-3"
                      type="email"
                      id="email"
                    />
                  </form>
                </div>
                <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
                  <form action="" className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="username"
                      className="font-sans text-sm font-semibold"
                    >
                      Nome de Usuário
                    </label>
                    <input
                      className="h-10 border border-border pl-3"
                      type="text"
                      id="username"
                    />
                  </form>
                </div>
                <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
                  <form action="" className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="password"
                      className="font-sans text-sm font-semibold"
                    >
                      Senha
                    </label>
                    <input
                      className="h-10 border border-border pl-3"
                      type="password"
                      id="password"
                    />
                  </form>
                </div>
                <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
                  <form>
                    <div className="flex items-center">
                      <Checkbox.Root
                        className="flex laptop:h-[20px] laptop:w-[20px] desktop:h-[25px] desktop:w-[25px] tablet:w-[20px] tablet:h-[20px] border-2 border-overlay appearance-none items-center justify-center rounded-[4px] bg-white outline-none"
                        defaultChecked
                        id="c1"
                      >
                        <Checkbox.Indicator className="text-overlay">
                          <CheckIcon className="w-[30px]"/>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <label
                        className="flex font-sans desktop:text-xs laptop:text-xs tablet:text-[10px] phone:text-[10px] desktop:pl-[15px] laptop:pl-[15px] tablet:pl-[10px] phone:pl-[10px] leading-none text-overlay"
                        htmlFor="c1"
                      ><p>
                        Declaro que li e concordo com as {" "}
                        <a
                          href="https://policies.google.com/privacy?hl=pt-BR"
                          className="underline"
                          target={"_blank"}
                        >
                          Políticas de Privacidade
                        </a>
                        {" "}
                        da 3.0 INVEST
                        </p>
                      </label>
                    </div>
                  </form>
                  <button className="mb-12 w-full bg-blue py-6 font-sans font-semibold uppercase leading-5 text-white">
                    Criar Conta
                  </button>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </div>
      </Dialog.Root>
    </div>
  );
}
