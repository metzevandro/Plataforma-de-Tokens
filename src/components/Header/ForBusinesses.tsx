import * as Dialog from "@radix-ui/react-dialog";

export function ForBusinesses() {
  return (
    <div>
      <Dialog.Root>
        <div className="flex justify-center pt-4">
          <Dialog.Trigger>
            <button className="border-2 border-blue py-4 px-[37px] font-sans font-normal uppercase text-blue">
              Para Empresas
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
                Comece agora
              </Dialog.Title>
              <div className="flex flex-col gap-4">
                <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
                  <form action="" className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="Username"
                      className="font-sans text-sm font-semibold"
                    >
                      Seu nome / Sua empresa
                    </label>
                    <input
                      className="h-10 border border-border pl-3"
                      type="text"
                      id="Username"
                    />
                  </form>
                </div>
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
                      htmlFor="phone"
                      className="font-sans text-sm font-semibold"
                    >
                      Telefone com DDD
                    </label>
                    <input
                      className="h-10 border border-border pl-3"
                      type="tel"
                      id="phone"
                    />
                  </form>
                </div>
                <div className="flex min-h-full flex-col items-center justify-start gap-4 px-[10%]">
                  <form action="" className="flex w-full flex-col gap-2">
                    <label
                      htmlFor="Username"
                      className="font-sans text-sm font-semibold"
                    >
                      Descrição do Projeto
                    </label>
                    <textarea className="h-32 border border-border pl-3 pt-3" />
                  </form>
                </div>
                <div className="flex min-h-full flex-col items-center justify-start gap-4 px-14">
                  <button className="mb-12 w-full bg-blue py-6 font-sans font-semibold uppercase leading-5 text-white ">
                    Enviar
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
