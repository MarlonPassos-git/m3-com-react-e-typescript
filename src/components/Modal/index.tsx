import { ButtonFechar, Container, Linha, Titulo, WrapperContent } from "./estilo";

interface ModalProps {
  titulo: string,
  fecharModal: (a: boolean) => void,
  children: React.ReactNode
}

export function Modal ({titulo, fecharModal, children}: ModalProps) {

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
    </Container>
  )
}