import { Input } from "../Input";
import { Titulo, WrapperForm, WrapperInputs } from "./estilos";

interface SassaoProps {
    tamanhos: string[];
}

export function SessaoTamanhos ({tamanhos}: SassaoProps) {


  return (
    <WrapperForm>
        <Titulo>
          Tamanhos
        </Titulo>
        <WrapperInputs>
        {tamanhos.map((tamanho, index) => (
            <Input 
              key={index}
              tipoInput="tamanho"
              texto={tamanho}
            />
          ))}
        </WrapperInputs>
      </WrapperForm>
  )
}




