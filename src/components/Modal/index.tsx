import { useEffect } from "react";
import { useDados } from "../../context/dados";
import { BotaoFiltrar, BotaoLimparFiltros, ButtonFechar, Container, Linha, Titulo, WrapperContent } from "./estilo";

interface ModalProps {
  titulo: string,
  fecharModal: (a: boolean) => void,
  children: React.ReactNode
}

export function Modal ({titulo, fecharModal, children}: ModalProps) {

  const {setFiltros} = useDados()
  
  return (
    <Container>
      <Titulo>
        {titulo}
      </Titulo>
      <Linha/>
      <ButtonFechar
        onClick={() => fecharModal(false)}
      >
        X
      </ButtonFechar>
      <WrapperContent>
        {children}
      </WrapperContent>
      {titulo === "Filtrar" && <>
        <BotaoFiltrar
          onClick={() => fecharModal(false)}
        > 
          Aplicar
        </BotaoFiltrar>
        <BotaoLimparFiltros
          onClick={() => setFiltros({cores:[], tamanhos:[], faixaPrecos:[]})}
        >Limpar</BotaoLimparFiltros>
      </> }
    </Container>
  )
}