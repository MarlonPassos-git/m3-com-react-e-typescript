import { useState } from "react";
import { Input } from "../Input";
import { BotaoMostraMaisCores, Titulo, TituloA, WrapperForm, WrapperFormA, WrapperInputs } from "./estilos";

interface SassaoProps {
    cores: string[];
    mostrarImputs?: boolean;
}

export function SessaoCores({ cores, mostrarImputs }: SassaoProps) {
  const [mostraTudo, setMostraTudo] = useState(false)

  const Iputs = cores.map((cor, index) => (
    <Input 
      key={index}
      tipoSessao="cores"
      texto={cor} 
      value={cor}
      tipoInput="checkbox"
    />
  ))

  return (

    (mostrarImputs) ? 
    (
      <WrapperForm>
        <Titulo>
          Cores
        </Titulo>
        <WrapperInputs
          mostraTudo={mostraTudo}
        >
          {Iputs} 
        </WrapperInputs>
        {!mostraTudo && (
          <BotaoMostraMaisCores
            onClick={() => setMostraTudo(true)}
          >
            Ver todas as cores
          </BotaoMostraMaisCores>
        )}   
      </WrapperForm>
    ) : 
    (
      <WrapperFormA>
        <TituloA>
          Cores
        </TituloA>
        <WrapperInputs
          mostraTudo={true}
        >
          {Iputs} 
        </WrapperInputs>
      </WrapperFormA>
     
    )
  )
} 