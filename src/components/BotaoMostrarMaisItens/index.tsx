import { useDados } from "../../context/dados";
import { Container } from "./estilo";

export function BotaoMostraMaisItens() {

 
  const {numeroProdutosTela, setNumeroProdutosTela, produtosPorVez} = useDados();

  return (
    <Container
      onClick={() => setNumeroProdutosTela(numeroProdutosTela + produtosPorVez)}
    >
      carregar mais
    </Container>
  )
}