import { Button, Container, Linha, Titulo } from "./estilo";

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
      <Button
        onClick={() => fecharModal(false)}
      >
        X
      </Button>
        
      {children}
    </Container>
  )
}