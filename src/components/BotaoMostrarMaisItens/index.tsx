import { useDados } from "../../context/dados";
import { Container } from "./estilo";

export function BotaoMostraMaisItens() {
  const {
    numeroProdutosTela,
    setNumeroProdutosTela,
    produtosPorVez,
    totalProdutos,
  } = useDados();

  return numeroProdutosTela < totalProdutos ? (
    <Container
      onClick={() => {
        setNumeroProdutosTela(numeroProdutosTela + produtosPorVez);
      }}
    >
      carregar mais
    </Container>
  ) : null;
}
