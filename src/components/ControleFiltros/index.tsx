import { useState } from "react"
import { dados } from "./dados"
import { Container} from "./estilos"
import { SessaoCores } from "./SessaoCores"
import { SessaoFaixaPrecos } from "./SessaoFaixaPrecos"
import { SessaoTamanhos } from "./SessaoTamanhos"

interface dadosProps {
  cores: string[];
  tamanhos: string[];
  faixaPrecos: {
      text: string;
      value: number[];
  }[];
}

export function ControleFiltros() {
  const {cores, tamanhos, faixaPrecos}:dadosProps = dados


    


  return (
      
    <Container
      onChange={(e) => {console.log(e.currentTarget)}}
    >  
      <SessaoCores cores={cores}/>
      <SessaoTamanhos tamanhos={tamanhos}/>
      <SessaoFaixaPrecos faixaPrecos={faixaPrecos}/>
    </Container>
    
  
  )
}

