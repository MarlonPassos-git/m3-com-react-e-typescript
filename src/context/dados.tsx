import { createContext, ReactNode, useState, useContext, useEffect } from 'react'
import { IProduto } from '../types/dadosProps'

interface DadosProps { 
    children: ReactNode;
}

interface DadosContextProps {
    todosProdutos: Array<IProduto>,
    setTodosProdutos: (produtos:Array<IProduto>)=> void,
    telaProdutos: Array<IProduto>,
    setTelaProdutos: (produtos:Array<IProduto>)=> void,
    produtosVisiveis: Array<IProduto>,
    setProdutosVisiveis: (produtos:Array<IProduto>)=> void,
    numeroProdutosTela: number,
    setNumeroProdutosTela: (totalProdutosTela:number)=> void,
    produtosPorVez: number,
}

export const DadosContext = createContext({} as DadosContextProps )

export const DadosProvider = ({ children }: DadosProps) => {

    const [todosProdutos, setTodosProdutos] = useState<Array<IProduto>>([]);
    const [telaProdutos, setTelaProdutos] = useState<Array<IProduto>>([]);
    const produtosPorVez = 5;
    const [numeroProdutosTela, setNumeroProdutosTela] = useState<number>(produtosPorVez);
    const [produtosVisiveis, setProdutosVisiveis] = useState<Array<IProduto>>([]);

    useEffect(() => {
        setProdutosVisiveis(telaProdutos.slice(0, numeroProdutosTela));
    
        
      }, [telaProdutos, numeroProdutosTela])

    return (
        <DadosContext.Provider
            value={{
                todosProdutos, setTodosProdutos,
                telaProdutos, setTelaProdutos,
                numeroProdutosTela, setNumeroProdutosTela,
                produtosVisiveis, setProdutosVisiveis,
                produtosPorVez
            }}
        >
            {children}
        </DadosContext.Provider>
    )
}

export function useDados() {
    const context = useContext(DadosContext);

    return context
}