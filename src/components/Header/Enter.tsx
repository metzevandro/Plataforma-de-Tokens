import { CreateAccount } from "./CreateAccount";
import { ForgetPassword } from "./ForgotPassword";

import * as Dialog from "@radix-ui/react-dialog";

export function Enter() {
  return (
    <Dialog.Root modal>
      <Dialog.Trigger
        type="button"
        className="py-[10px] px-4 font-sans text-xs font-semibold uppercase leading-5"
      >
        Entrar
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          forceMount
          className="fixed inset-0 flex h-screen w-screen items-center bg-overlay/80 "
        />
        <Dialog.Content className="fixed top-1/2 left-1/2 desktop:w-[40%] laptop:w-[40%] tablet:w-[60%] phone:w-[90%] -translate-x-1/2 -translate-y-1/2 transform bg-white">
          <div className="flex justify-end">
            <Dialog.Close>
              <span className="material-icons-outlined bg-overlay p-5 text-white">
                close
              </span>
            </Dialog.Close>
          </div>
          <Dialog.Title className="leading- flex justify-center pt-8 pb-12 align-text-top font-sans text-3xl font-semibold uppercase">
            Entre
          </Dialog.Title>
          <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
            <form action="" className="flex w-full flex-col gap-2">
              <label
                htmlFor="Username"
                className="font-sans text-sm font-semibold"
              >
                E-mail ou nome de usuário
              </label>
              <input className="h-10 border border-border pl-3" type="text" />
            </form>
            <form action="" className="flex w-full flex-col gap-2">
              <label
                htmlFor="Password"
                className="font-sans text-sm font-semibold"
              >
                Senha
              </label>
              <input
                className="h-10 border border-border pl-3"
                type="password"
              />
            </form>
          </div>
          <ForgetPassword />
          <div className="mt-10 mb-20 flex min-h-full flex-col items-center justify-start gap-4">
            <CreateAccount />
            <p className="font-sans text-xs font-normal">
              Não uma conta?
              <a className="ml-1 font-semibold">Crie</a>
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
