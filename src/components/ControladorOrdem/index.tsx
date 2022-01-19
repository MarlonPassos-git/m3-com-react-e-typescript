import { useState } from "react";
import { useDados } from "../../context/dados";
import { removeAcentos } from "../../ferramentas/removeAcentos";
import { Container, Opcao, Opcoes } from "./estilo";
import { IProduto } from "../../types/dadosProps";

export function ControladorOrdem () {
  const {telaProdutos, setTelaProdutos, setNumeroProdutosTela, produtosPorVez} = useDados();
  const [tipoOrder, setTipoOrder] = useState<string>("Ordenar por: ");
  const [monstrarOpcoes, setMonstrarOpcoes] = useState<boolean>(false);
  const totasOpcoes = ['Mais recente', 'Maior preço', 'Menor preço'];

  
  const regrasOrdenacao = {
    'Menor preço': (a: IProduto, b: IProduto) => a.price - b.price,
    'Maior preço': (a: IProduto, b: IProduto) => b.price - a.price,
    'Mais recente': (a: IProduto, b: IProduto) => {
      const c = new Date(a.date.replace(/-/g, ",")); 
      const d = new Date(b.date.replace(/-/g, ","));

      return d.getTime() - c.getTime();
      
    },
  };

  function handleOpcao({currentTarget}: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const targetValue = currentTarget.innerText;

    setTipoOrder(targetValue);
    setNumeroProdutosTela(produtosPorVez)

    // @ts-ignore
    setTelaProdutos([...telaProdutos.sort(regrasOrdenacao[targetValue])])
  }

  return (
    <Container
      monstrarOpcoes={monstrarOpcoes}
      onClick={() => setMonstrarOpcoes(!monstrarOpcoes)}
      onKeyDown={({key}) => key === 'Enter' && setMonstrarOpcoes(!monstrarOpcoes)}
      tabIndex={1}
    >
      {tipoOrder}
      {
        monstrarOpcoes && 
        <Opcoes  > 
          {totasOpcoes.map((opcao, index) => (
            <Opcao 
              key={index} 
              onClick={handleOpcao}
              onKeyDown={({key}) => key === 'Enter' && handleOpcao}
            >{opcao}</Opcao>
          ))}
      </Opcoes>
      }
      
    </Container>
  )
}



const dados = {
  nome: 'marlon',
  idade: 21,

}


console.log(dados['nome'])