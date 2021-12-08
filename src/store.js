import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetalsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetalsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  user: {userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
