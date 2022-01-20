import { useDados } from "../../context/dados";
import { Container, Img, TotalItens } from "./estilos";

export function CarrinhoCompras() {

  const {totalProdutosCarrinho} = useDados();

    return (
        <Container>
          <Img
            src="https://img.icons8.com/ios-filled/20/000000/shopping-bag.png"
            alt=""
          />
          <TotalItens>
            {totalProdutosCarrinho}
          </TotalItens>
        </Container>
    )
}