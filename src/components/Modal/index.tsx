import { useEffect } from "react";
import { useDados } from "../../context/dados";
import {
  BotaoFiltrar,
  BotaoLimparFiltros,
  ButtonFechar,
  Container,
  Linha,
  Titulo,
  WrapperContent,
} from "./estilo";

interface ModalProps {
  titulo: string;
  fecharModal: (a: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ titulo, fecharModal, children }: ModalProps) {
  const { setFiltros } = useDados();

  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <Linha />
      <ButtonFechar
        aria-label={`Fechar pagina de ${titulo}`}
        onClick={() => fecharModal(false)}
      >
        <img src="./images/x.svg" alt="Fechar pagina" />
      </ButtonFechar>
      <WrapperContent>{children}</WrapperContent>
      {titulo === "Filtrar" && (
        <>
          <BotaoFiltrar onClick={() => fecharModal(false)}>
            Aplicar
          </BotaoFiltrar>
          <BotaoLimparFiltros
            onClick={() =>
              setFiltros({ cores: [], tamanhos: [], faixaPrecos: [] })
            }
          >
            Limpar
          </BotaoLimparFiltros>
        </>
      )}
    </Container>
  );
}
