import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { RootReducer } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const favorito = useSelector(
    (state: RootReducer) => state.favorites.favoritos
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favorito.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  const { data: produtos, isLoading } = useGetProdutosQuery()
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
