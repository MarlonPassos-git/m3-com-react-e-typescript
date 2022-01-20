import { useState } from "react";
import { useDados } from "../../context/dados";
import { Container, Opcao, Opcoes } from "./estilo";
import { ThemeProvider } from "styled-components";
import { modal, padrao} from "../../estilos/temas/ControladorOrdemTema";
import { regrasOrdenacao } from "../../ferramentas/regrasOrdenação";

interface ControladorOrdemProps {
  estaNoModal?: boolean;
}

export function ControladorOrdem({estaNoModal}: ControladorOrdemProps) {
  const {telaProdutos, setTelaProdutos, setNumeroProdutosTela, produtosPorVez} = useDados();
  const [tipoOrder, setTipoOrder] = useState<string>("Ordenar por: ");
  const [monstrarOpcoes, setMonstrarOpcoes] = useState<boolean>(false);
  const totasOpcoes = ['Mais recente', 'Maior preço', 'Menor preço'];
  
  const todasOpcoesComponent = totasOpcoes.map((opcao, index) => (
    <Opcao 
      key={index} 
      onClick={handleOpcao}
      onKeyDown={({key}) => key === 'Enter' && handleOpcao}
    >
      {opcao}
    </Opcao>
  ))

  function handleOpcao({currentTarget}: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const targetValue = currentTarget.innerText;

    setTipoOrder(targetValue);
    setNumeroProdutosTela(produtosPorVez)

    // @ts-ignore
    setTelaProdutos([...telaProdutos.sort(regrasOrdenacao[targetValue])])

  }

  return (

    (estaNoModal) ? (
      <ThemeProvider theme={modal}>
        <Opcoes  > 
        {todasOpcoesComponent}
        </Opcoes>
      </ThemeProvider>
      
    ) :(
      <Container
      monstrarOpcoes={monstrarOpcoes}
      onClick={() => setMonstrarOpcoes(!monstrarOpcoes)}
      onKeyDown={({key}) => key === 'Enter' && setMonstrarOpcoes(!monstrarOpcoes)}
      tabIndex={0}
    >
      {tipoOrder}
      {
        monstrarOpcoes && 
        <ThemeProvider theme={padrao}>
        <Opcoes  > 
        {todasOpcoesComponent}
      </Opcoes>
      </ThemeProvider>
      }
      
    </Container>
    )
  )
}
