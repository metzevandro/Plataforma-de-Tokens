import * as Accordion from "@radix-ui/react-accordion";

export const PerguntasFrequentes = () => (
  <Accordion.Root
    className=" flex flex-col gap-6 phone:w-full laptop:w-[1264px]"
    type="multiple"
  >
    <Accordion.Item
      value="item-1"
      className="flex flex-col border border-border transition-transform data-[state=open]:bg-blue data-[state=open]:text-white phone:p-4 laptop:p-8"
    >
      <Accordion.Header className="flex items-center justify-between font-sans font-bold uppercase phone:text-sm laptop:text-2xl">
        o que é um token?
        <Accordion.Trigger className="flex items-center justify-between  transition-transform duration-300 data-[state=open]:rotate-90">
          <span aria-hidden className="material-icons-outlined text-xl">
            keyboard_arrow_right
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp phone:text-xs laptop:text-base">
        <br />
        Um token é a representação digital de um ativo financeiro real em uma
        rede blockchain. Diversos tipos de bens passam por tokenização – como
        ações, propriedades, obras de artes – e têm seu valor representado
        digitalmente por meio de tokens, os quais podem ser adquiridos por
        investidores.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item
      value="item-"
      className="flex flex-col border border-border data-[state=open]:bg-blue data-[state=open]:text-white phone:p-4 laptop:p-8"
    >
      <Accordion.Header className="flex items-center justify-between font-sans font-bold uppercase phone:text-sm laptop:text-2xl">
        O QUE É BLOCKCHAIN?
        <Accordion.Trigger className="flex items-center justify-between  transition-transform duration-300 data-[state=open]:rotate-90">
          <span aria-hidden className="material-icons-outlined text-xl">
            keyboard_arrow_right
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp phone:text-xs laptop:text-base">
        <br />
        Blockchain é uma tecnologia que permite o armazenamento seguro e
        transparente de informações em uma rede descentralizada. É como um
        livro-razão digital que registra transações em blocos, que são
        conectados em uma corrente, garantindo a segurança e a integridade dos
        dados. É amplamente utilizado em criptomoedas, mas pode ser aplicado em
        diversas áreas.{" "}
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item
      value="item-3"
      className="flex flex-col border border-border data-[state=open]:bg-blue data-[state=open]:text-white phone:p-4 laptop:p-8"
    >
      <Accordion.Header className="flex items-center justify-between font-sans font-bold uppercase phone:text-sm laptop:text-2xl">
        QUAIS SÃO AS TAXAS?
        <Accordion.Trigger className="flex items-center justify-between  transition-transform duration-300 data-[state=open]:rotate-90">
          <span aria-hidden className="material-icons-outlined text-xl">
            keyboard_arrow_right
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp phone:text-xs laptop:text-base">
        <br />
        As taxas ao investir em tokens podem variar dependendo do tipo de
        transação que você realiza. Algumas taxas comuns incluem taxas de
        depósito, taxas de negociação, taxas de saque e taxas de rede, que são
        cobradas para processar transações na rede blockchain.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item
      value="item-4"
      className="flex flex-col border border-border data-[state=open]:bg-blue data-[state=open]:text-white phone:p-4 laptop:p-8"
    >
      <Accordion.Header className="flex items-center justify-between font-sans font-bold uppercase phone:text-sm laptop:text-2xl">
        COMO FAÇO UM DEPÓSITO PARA MINHA CONTA
        <Accordion.Trigger className="flex items-center justify-between  transition-transform duration-300 data-[state=open]:rotate-90">
          <span aria-hidden className="material-icons-outlined text-xl">
            keyboard_arrow_right
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp phone:text-xs laptop:text-base">
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi magnam
        quia aspernatur, non accusamus sint numquam odit expedita earum
        repellendus ipsa laboriosam amet mollitia saepe rem tempora nostrum a
        libero!
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
