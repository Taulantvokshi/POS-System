import clearObject from '../../util/clear_object'
import axios from 'axios'
const initalSatate = {
  cart: [],
  note: false,
  postOrder: {},
  currentOrder: {},
}

//Form creator

const ADD_CART_ITEM = 'ADD_CART_ITEM'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const NOTE_MESSAGE = 'NOTE_MESSAGE'
const CLEAN_CART_ITEMS = 'CLEAN_CART_ITEMS'
const CURRENT_ORDER = 'CURRENT_ORDER '
//Action Creator

export const getCurrentOrder = (deleteId, order) => {
  if (deleteId) {
    order = clearObject({...order, [deleteId]: null})
  }

  return (dispatch) => {
    dispatch({
      type: CURRENT_ORDER,
      order,
    })
  }
}

//Dispatch
export const addCartProduct = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CART_ITEM,
      item,
    })
  }
}

export const removeCartItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      id,
    })
  }
}
export const noteToggle = () => {
  return (dispatch) => {
    dispatch({
      type: NOTE_MESSAGE,
    })
  }
}

export const postOrder = (order) => {
  return async (dispatch) => {
    try {
      await axios.post('api/orders', order)
      dispatch({
        type: CURRENT_ORDER,
        order: {},
      })
      dispatch({
        type: CLEAN_CART_ITEMS,
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const doesItemExist = !!state.cart.filter(
        (item) => item.id === action.item.id
      ).length
      if (!doesItemExist) {
        return {...state, cart: [...state.cart, action.item]}
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      }
    case NOTE_MESSAGE:
      return {...state, note: !state.note}
    case CLEAN_CART_ITEMS:
      return {...state, cart: []}
    case CURRENT_ORDER:
      return {...state, currentOrder: action.order}
    default: {
      return state
    }
  }
}
