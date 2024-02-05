import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/theme'

const reducer = {
  theme: themeReducer
}

const store = configureStore({ reducer })
const rootReducer = combineReducers({ reducer: {} })

export default store;
export type RootState = ReturnType<typeof rootReducer>;
/**
 * import { configureStore, combineReducers } from '@reduxjs/toolkit'

import userReducer from "./features/user"
import cartItemsReducer from './features/cartItems'
import favorite from './features/whishList'

const store = configureStore({
  reducer: {
    user: userReducer,
    cartItems: cartItemsReducer,
    whishList: favorite
  }
})

const rootReducer = combineReducers({
  user: userReducer,
  cartItems: cartItemsReducer,
  whishList: favorite
})

export default store;
export type RootState = ReturnType<typeof rootReducer>;
 */