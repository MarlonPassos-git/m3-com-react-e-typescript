import { CarrinhoCompras } from "../CarrinhoCompras";
import { Container, Img } from "./estilos";

export function Cabecario() {
  return (
    <Container>
      <Img src="./images/logo.png" alt="logo m3" />
      <CarrinhoCompras />
    </Container>
  );
}
