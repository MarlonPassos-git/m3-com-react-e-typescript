import { useEffect } from "react";
import { Container } from "./estilo";
import { Produto } from "../Produto";
import { useDados } from "../../context/dados";
 


export function ListaProdutos () {

  const { 
    setTodosProdutos, 
    setTelaProdutos, 
    produtosVisiveis,
  } = useDados();


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MarlonPassos-git/m3-com-react-e-typescript/products')
      .then(response => response.json())
      .then(data => {
        setTodosProdutos(data);
        setTelaProdutos(data);
      });
  }, [])

  
  return (
    <Container
      data-cy='listaProdutos'
    >
      {produtosVisiveis.map((produto)=> (
        <Produto 
        
          key={produto.id} 
          dadosProduto={produto}
        />
      ))} 
    </Container>
  )
}