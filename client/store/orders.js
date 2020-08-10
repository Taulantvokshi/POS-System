import axios from 'axios'
const initalSatate = {
  orders: []
}

//Action Creator
const ALL_ORDERS = 'ALL_ORDERS'

export const getAllOrders = () => {
  return async dispatch => {
    try {
      const orders = await axios.get('/api/orders')
      dispatch({
        type: ALL_ORDERS,
        orders: orders.data
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const deleteWholeOrderThunk = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/orders/${id}`)
      const orders = await axios.get('/api/orders')
      dispatch({
        type: ALL_ORDERS,
        orders: orders.data
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    case ALL_ORDERS:
      return {...state, orders: action.orders}
    default: {
      return state
    }
  }
}
