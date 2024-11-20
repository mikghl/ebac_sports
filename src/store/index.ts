import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import favoriteReducer from './reducers/favorites'
import api from '../services/api'

export const loja = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof loja.getState>
