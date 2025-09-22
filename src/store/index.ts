import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './slices/carrinhoSlice'
import favoritosReducer from './slices/favoritosSlice'

<<<<<<< HEAD
export const store = configureStore({
=======
const store = configureStore({
>>>>>>> 56dd0460a4324d57753102bf40bc0e1e301e5e60
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
