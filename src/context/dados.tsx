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
    filtros: IFiltros,
    setFiltros: (filtros:IFiltros)=> void,

}

interface IFiltros {
    'cores': string[],
    'tamanhos': string[],
    'faixaPrecos': string[]
}

export const DadosContext = createContext({} as DadosContextProps )

export const DadosProvider = ({ children }: DadosProps) => {

    const [todosProdutos, setTodosProdutos] = useState<Array<IProduto>>([]);
    const [telaProdutos, setTelaProdutos] = useState<Array<IProduto>>([]);
    const produtosPorVez = 5;
    const [numeroProdutosTela, setNumeroProdutosTela] = useState<number>(produtosPorVez);
    const [produtosVisiveis, setProdutosVisiveis] = useState<Array<IProduto>>([]);
    const [filtros, setFiltros] = useState<IFiltros>({cores:[], tamanhos:[], faixaPrecos:[]})

    useEffect(() => {
        setProdutosVisiveis(telaProdutos.slice(0, numeroProdutosTela));
    
        
    }, [telaProdutos, numeroProdutosTela])


    useEffect(() => {
        
        const listItemsFiltered = todosProdutos.filter((item) => {
            if (filtros.cores.length > 0) {
              if (!filtros.cores.includes(item.color.toLowerCase())) return false;
            }
            if (filtros.tamanhos.length > 0) {
              const has = item.size.find((size) =>
                filtros.tamanhos.includes(size.toUpperCase())
              );
        
              if (!has) return false;
            }
            if (filtros.faixaPrecos.length > 0) {
             let [minNumber, maxNumber] = filtros.faixaPrecos[0].split('_').map(Number=>+Number);
        
              if (item.price < minNumber || item.price > maxNumber) return false;
            }
            return true;
          });

          console.log(listItemsFiltered);

          setTelaProdutos([...listItemsFiltered]);

          

    } , [filtros])

    return (
        <DadosContext.Provider
            value={{
                todosProdutos, setTodosProdutos,
                telaProdutos, setTelaProdutos,
                numeroProdutosTela, setNumeroProdutosTela,
                produtosVisiveis, setProdutosVisiveis,
                filtros, setFiltros,
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