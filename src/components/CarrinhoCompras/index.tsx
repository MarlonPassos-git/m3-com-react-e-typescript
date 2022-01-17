import { Container, Img, TotalItens } from "./estilos";

export function CarrinhoCompras() {

    return (
        <Container>
          <Img
            src="https://img.icons8.com/ios-filled/20/000000/shopping-bag.png"
            alt=""
          />
          <TotalItens>
            0
          </TotalItens>
        </Container>
    )
}