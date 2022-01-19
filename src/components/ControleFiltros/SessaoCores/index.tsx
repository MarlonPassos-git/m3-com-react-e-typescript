import { useState } from "react";
import { Input } from "../Input";
import { BotaoMostraMaisCores, Titulo, WrapperForm, WrapperInputs } from "./estilos";

interface SassaoProps {
    cores: string[];
}

export function SessaoCores({ cores }: SassaoProps) {
  const [mostraTudo, setMostraTudo] = useState(false)


  return (
    <WrapperForm>
        <Titulo>
          Cores
        </Titulo>
        <WrapperInputs
          mostraTudo={mostraTudo}
        >
          {cores.map((cor, index) => (
            <Input 
              key={index}
              tipoInput="cor"
              texto={cor} 
            />
          ))}
        </WrapperInputs>
        {!mostraTudo && (
          <BotaoMostraMaisCores
            onClick={() => setMostraTudo(true)}
          >
            Ver todas as cores
          </BotaoMostraMaisCores>
        )} 

        
      </WrapperForm>
  )
} 