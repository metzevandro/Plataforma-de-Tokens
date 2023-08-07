import { Token } from "../components/Home/Token";
import Token1 from "../assets/Token.png";

export function Investors() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-2 py-24 laptop:w-[1264px] phone:w-[90%]">
                <h1 className="items-center justify-center text-center font-sans text-4xl font-bold uppercase text-overlay">
                Tokens
                </h1>
                <p className="items-center justify-center text-center font-sans text-base font-normal text-overlay">
                Escolhe o Token mais lucrativo para você e comece hoje a fazer
                parte do mercado que mais cresce no mundo.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center laptop:pb-24 phone:pb-12">
                <div className="laptop:w-[1264px] phone:w-[90%]">
                <div className="flex justify-between pb-14">
                    <button className="flex items-center justify-center gap-2 border border-overlay py-2 px-4">
                    <span className="material-icons-outlined text-sm text-overlay">
                        category
                    </span>
                    <h1 className="text-xs font-semibold uppercase">
                        Categorias
                    </h1>
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-overlay py-2 px-4">
                    <span className="material-icons-outlined text-sm text-overlay">
                        sort
                    </span>
                    <h1 className="text-xs font-semibold uppercase">
                        Ordenar por
                    </h1>
                    </button>
                </div>
                <div className="flex laptop:flex-row phone:flex-col justify-center gap-5">
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
            </div>
            <div className="flex flex-col w-full phone:py-2 laptop:py-24 phone:gap-5">
                <h1 className="items-center justify-center text-center font-sans laptop:text-4xl phone:text-2xl font-bold uppercase text-overlay">
                Conheça as Etapas
                </h1>
            </div>
            <div className="flex flex-col phone:mb-12 phone:mt-12 phone:w-[90%] laptop:mt-24 laptop:mb-24 laptop:w-[1264px]">
                <div className="flex items-start ">
                <h1 className=" text-left font-sans font-bold uppercase text-overlay phone:pb-7 phone:text-base laptop:pb-14 laptop:text-4xl">
                    Perguntas frequentes
                </h1>
                </div>
            </div>
            </div>
        </>
    )
}