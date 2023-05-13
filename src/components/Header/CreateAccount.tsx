import * as Dialog from "@radix-ui/react-dialog";
import { ForBusinesses } from "./ForBusinesses";
import { ForInvestors } from "./ForInvestors";

export function CreateAccount() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="bg-blue py-[10px] px-4 font-sans text-xs font-semibold uppercase leading-5 text-white"
      >
        Criar conta
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 flex h-screen w-screen items-center bg-overlay/80" />
        <Dialog.Content className="max-w-screen-sm fixed top-1/2 left-1/2 desktop:w-[40%] laptop:w-[40%] tablet:w-[60%] phone:w-[90%] -translate-x-1/2 -translate-y-1/2 transform bg-white pb-16">
          <div className="flex justify-end">
            <Dialog.Close>
              <span className="material-icons-outlined bg-overlay p-5 text-white">
                close
              </span>
            </Dialog.Close>
          </div>
          <Dialog.Title className="leading- flex justify-center pt-8 pb-12 align-text-top font-sans text-3xl font-semibold uppercase">
            Criar conta
          </Dialog.Title>
          <div className="flex desktop:flex-row laptop:flex-col tablet:flex-col phone:flex-col justify-center gap-4">
            <ForBusinesses />
            <ForInvestors />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
