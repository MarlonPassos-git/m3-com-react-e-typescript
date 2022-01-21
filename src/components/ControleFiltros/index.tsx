import { dados } from "./dados"
import { Container} from "./estilos"
import { SessaoCores } from "./SessaoCores"
import { SessaoFaixaPrecos } from "./SessaoFaixaPrecos"
import { SessaoTamanhos } from "./SessaoTamanhos"

interface Idados {
  cores: string[];
  tamanhos: string[];
  faixaPrecos: {
      text: string;
      value: string;
  }[];
  
}

interface ControleFiltrosProps {
  mostrarImputs?: boolean;
}

export function ControleFiltros({mostrarImputs}: ControleFiltrosProps) {
  const {cores, tamanhos, faixaPrecos}:Idados = dados


    


  return (
      
    <Container
      data-cy='controle-filtros'
    >  
      <SessaoCores mostrarImputs={mostrarImputs} cores={cores}/>
      <SessaoTamanhos mostrarImputs={mostrarImputs} tamanhos={tamanhos}/>
      <SessaoFaixaPrecos mostrarImputs={mostrarImputs} faixaPrecos={faixaPrecos}/>
    </Container>
    
  
  )
}

