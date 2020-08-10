import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import navigation from './navigation'
import products from './products'
import cart from './cart'
import orders from './orders'
import employees from './employees'
const reducer = combineReducers({
  user,
  navigation,
  products,
  cart,
  orders,
  employees
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
