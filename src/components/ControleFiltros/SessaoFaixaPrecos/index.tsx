import { Input } from "../Input";
import { Titulo, WrapperForm, WrapperInputs } from "./estilos";

interface SassaoProps {
    faixaPrecos: {
        text: string;
        value: number[];
    }[];
  
}

export function SessaoFaixaPrecos ({faixaPrecos}: SassaoProps) {

  

  return (
    <WrapperForm>
        <Titulo>
          Faixa de Preço
        </Titulo>
        <WrapperInputs>
        {faixaPrecos.map(({text}, index) => (
            <Input 
              key={index}
              tipoInput="faixaPreco"
              texto={text}
            />
          ))}
        </WrapperInputs>
      </WrapperForm>
  )
}