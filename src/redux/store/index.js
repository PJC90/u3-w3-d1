import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const store = configureStore({
  reducer: mainReducer, // non ce l'abbiamo ancora!
})

export default store
