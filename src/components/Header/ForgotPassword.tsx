import * as Dialog from "@radix-ui/react-dialog";

export function ForgetPassword() {
  return (
    <div>
      <Dialog.Root>
        <div className="flex justify-center pt-4">
          <Dialog.Trigger>
            <button className="font-sans text-xs font-normal underline">
              Esqueceu a senha?
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 flex h-screen w-screen items-center bg-overlay/50" />
            <Dialog.Content className="max-w-screen-sm fixed top-1/2 left-1/2 desktop:w-[40%] laptop:w-[40%] tablet:w-[60%] phone:w-[90%] -translate-x-1/2 -translate-y-1/2 transform bg-white">
              <div className="flex justify-end">
                <Dialog.Close>
                  <span className="material-icons-outlined bg-overlay p-5 text-white">
                    close
                  </span>
                </Dialog.Close>
              </div>
              <Dialog.Title className="leading- flex justify-center pt-8 pb-12 align-text-top font-sans text-3xl font-semibold uppercase">
                Redefinir sua senha
              </Dialog.Title>
              <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
                <form action="" className="flex w-full flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-sans text-sm font-semibold"
                  >
                    E-mail
                  </label>
                  <input
                    className="h-10 border border-border pl-3"
                    type="email"
                    id="email"
                  />
                </form>
              </div>
              <div className="flex min-h-full flex-col items-center gap-4">
                <button className="my-12 bg-blue py-4 px-10 font-sans font-semibold uppercase leading-5 text-white">
                  Redefinir senha
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </div>
      </Dialog.Root>
    </div>
  );
}
