import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoriteState = {
  favoritos: Produto[]
}

const initialStateFavorite: FavoriteState = {
  favoritos: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialStateFavorite,
  reducers: {
    adicionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((f) => f.id === produto.id)) {
        state.favoritos = state.favoritos.filter((f) => f.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionarFavoritos } = favoriteSlice.actions
export default favoriteSlice.reducer
