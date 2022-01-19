import { Input } from "../Input";
import { Titulo, TituloA, WrapperForm, WrapperFormA, WrapperInputs } from "./estilos";

interface SassaoProps {
    faixaPrecos: {
        text: string;
        value: number[];
    }[],
    mostrarImputs?: boolean;
}

export function SessaoFaixaPrecos ({faixaPrecos, mostrarImputs}: SassaoProps) {

  

  return (

    (mostrarImputs) ? 
    (
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
    ): 
    (
      <WrapperFormA>
        <TituloA>
          Faixa de Preço
        </TituloA>
        <WrapperInputs>
        {faixaPrecos.map(({text}, index) => (
            <Input 
              key={index}
              tipoInput="faixaPreco"
              texto={text}
            />
          ))}
        </WrapperInputs>
      </WrapperFormA>
    )
    
  )
}