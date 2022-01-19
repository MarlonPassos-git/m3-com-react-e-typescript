import { Input } from "../Input";
import { Titulo, TituloA, WrapperForm, WrapperFormA, WrapperInputs } from "./estilos";

interface SassaoProps {
    tamanhos: string[];
    mostrarImputs?: boolean;

}
export function SessaoTamanhos ({tamanhos, mostrarImputs}: SassaoProps) {


  const inputs = tamanhos.map((tamanho, index) => (
    <Input 
      key={index}
      tipoInput="tamanho"
      texto={tamanho}
    />
  ))

  return (
    (mostrarImputs) ? 
    
    (
      <WrapperForm>
        <Titulo>
          Tamanhos
        </Titulo>
        <WrapperInputs>
          {inputs}
        </WrapperInputs>
      </WrapperForm>
    ) : 
    (
      <WrapperFormA>
        <TituloA>
          Tamanhos
        </TituloA>
        <WrapperInputs>
          {inputs}
        </WrapperInputs>
      </WrapperFormA>
    
    )
  )
}




