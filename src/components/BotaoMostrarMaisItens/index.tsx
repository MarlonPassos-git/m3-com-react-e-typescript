import { useDados } from "../../context/dados";
import { Container } from "./estilo";

export function BotaoMostraMaisItens() {

 
  const {numeroProdutosTela, setNumeroProdutosTela, produtosPorVez, totalProdutos} = useDados();

  return (

    (numeroProdutosTela < totalProdutos) ? (
    <Container
      onClick={() => {
        setNumeroProdutosTela(numeroProdutosTela + produtosPorVez)
        console.log(totalProdutos);
      }
      }
    >
      carregar mais
    </Container>
  ) : null)
}

