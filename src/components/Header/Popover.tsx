import * as Popover from "@radix-ui/react-popover";
import { Enter } from "./Enter";
import { CreateAccount } from "./CreateAccount";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild className="">
      <button
        className="inline-flex h-[35px] w-[35px] items-center justify-center data-[state=open]:hidden"
        aria-label="Update dimensions"
      >
        <span className="material-icons transition ease-in-out">menu</span>
      </button>
    </Popover.Trigger>
    <Popover.Trigger asChild className="">
      <button
        className="overlayShow inline-flex h-[35px] w-[35px] items-center justify-center transition data-[state=closed]:hidden"
        aria-label="Update dimensions"
      >
        <span className="material-icons transition ease-in-out">close</span>
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
      >
        <div className="flex flex-col gap-6 font-sans text-base font-bold text-overlay">
          <a href="/Tokens">Para Investidores</a>
          <a href="/Tokens">Para Empresas</a>
          <a href="/LearnMore">Para Aprender</a>
          <Enter />
          <CreateAccount />
        </div>
        <Popover.Close
          className="absolute top-[5px] right-[5px] inline-flex h-[25px] w-[25px] items-center justify-center rounded-full"
          aria-label="Close"
        ></Popover.Close>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
