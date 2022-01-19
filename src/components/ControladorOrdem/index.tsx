import { useState } from "react";
import { useDados } from "../../context/dados";
import { Container, Opcao, Opcoes } from "./estilo";
import { IProduto } from "../../types/dadosProps";
import { ThemeProvider } from "styled-components";

interface ControladorOrdemProps {
  estaNoModal?: boolean;
}

const Tema = {
  padrao: {
    opcoes:{ 
      position: 'absolute',
      bottom: 0,
      left: 0,
      transform: 'translate(-1px ,100%)',
      'align-items': 'center',
      height: '107px',
      width: '8.875rem',
      border: 'var(--black) solid 0.063rem',
      'font-size': 'var(--font-small)',
    },
    opcao: {
      'padding-left': '0.625rem'
    }
  },
  modal: {
    opcoes:{ 
      height: 'auto',
      width: '100%',
      border: 'none',
      color: 'var(--black)',
      'line-height': '2.375rem',
      gap: '30px',
      'font-size': '22px'
    },
    opcao: {
          
    }
  },

}

export function ControladorOrdem({estaNoModal}: ControladorOrdemProps) {
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

    (estaNoModal) ? (
      <ThemeProvider theme={Tema.modal}>
        <Opcoes  > 
          {totasOpcoes.map((opcao, index) => (
            <Opcao 
              key={index} 
              onClick={handleOpcao}
              onKeyDown={({key}) => key === 'Enter' && handleOpcao}
            >{opcao}</Opcao>
          ))}
      </Opcoes>
      </ThemeProvider>
      
    ) :(
      <Container
      monstrarOpcoes={monstrarOpcoes}
      onClick={() => setMonstrarOpcoes(!monstrarOpcoes)}
      onKeyDown={({key}) => key === 'Enter' && setMonstrarOpcoes(!monstrarOpcoes)}
      tabIndex={1}
    >
      {tipoOrder}
      {
        monstrarOpcoes && 
        <ThemeProvider theme={Tema.padrao}>
        <Opcoes  > 
          {totasOpcoes.map((opcao, index) => (
            <Opcao 
              key={index} 
              onClick={handleOpcao}
              onKeyDown={({key}) => key === 'Enter' && handleOpcao}
            >{opcao}</Opcao>
          ))}
      </Opcoes>
      </ThemeProvider>
      }
      
    </Container>
    )
    
  )
}

