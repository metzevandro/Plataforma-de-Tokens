interface TokenProps {
  title: string;
  description: string;
  image: string;
  state: boolean;
  day: number;
  cash: number;
  investors: number;
}

export const Token: React.FC<TokenProps> = ({ title, description, image, state, day, cash, investors }) => (
    <>
    <div className="flex flex-col">
      <div className="w-full">
        <img src={image} className="w-full" />
      </div>
      <div className="bg-[#fff]">
        <div className="flex flex-col gap-6 p-6 border-border border">
          <div>
            <p className={`text-white max-w-min uppercase font-bold text-xs p-2 ${state ? "bg-open" : "bg-close"}`}>
              {state ? "Aberto" : "Fechado"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="laptop:text-2xl font-bold ">
              {title}
            </h1>
            <p className="text-base font-normal">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[16px] font-normal">
            <div className="flex justify-between py-3 px-6 border-border border">
              <p>Dias restantes</p>
              <p className="font-bold">{day}</p>
            </div>
            <div className="flex justify-between py-3 px-6 border-border border">
              <p>Compra mínima</p>
              <p className="font-bold">{"R$" + " " + cash + ",00"}</p>
            </div>
            <div className="flex justify-between py-3 px-6 border-border border">
              <p>Investidores</p>
              <p className="font-bold">{investors}</p>
            </div>
          </div>
          <button className="w-full bg-blue text-white uppercase font-semibold p-6">
            Quero saber mais
          </button>
      </div>
    </div>
    </>
  );
