import { useDados } from '../../context/dados';
import { IProduto } from '../../types/dadosProps'
import { Botao, Container, Img, Parcelamento, Preco, Tituto, WraperImg } from './estilo'

interface ProdutoProps {
  dadosProduto: IProduto
}

export function Produto({dadosProduto}: ProdutoProps ) {

  const {totalProdutosCarrinho, setTotalProdutosCarrinho} = useDados();
  const {image, name, price, parcelamento, date} = dadosProduto
  const precoFormatado = formataParaReal(price)
  const totalParcealas = parcelamento[0]
  const valorParcela = formataParaReal(parcelamento[1])
  

  return (
    <Container
      data-cy='produto'
      data-data={date}
    >
            <WraperImg href="#">
                <Img src={image} alt={name} />
            </WraperImg>
            <Tituto>
                {name}
            </Tituto>
            <Preco >
                {precoFormatado}
            </Preco>
            <Parcelamento>
                até {totalParcealas}x de {valorParcela}
            </Parcelamento>
            <Botao 
              aria-label={`Adicionar ${name} ao carrinho`}
              onClick={() => setTotalProdutosCarrinho(totalProdutosCarrinho + 1)}
            >
                Comprar
            </Botao>
    </Container>
  )
}


function formataParaReal(valor: number): string {
  const valorFormatado = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  return valorFormatado
}