import axios from 'axios'

const initalSatate = {
  settingsProducts: [],
  products: [],
  productType: 'appetizer',
  productTypeSetting: 'appetizer',
  productSearch: '',
  image: '',
  errors: [],
  postMessage: ''
}

//Form creator

const GET_PRODUCT_IMAGE = 'GET_PRODUCT_IMAGE'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT_TYPE_SALE = 'GET_PRODUCT_TYPE_SALE'
const GET_PRODUCT_TYPE_SETTINGS = 'GET_PRODUCT_TYPE_SETTINGS'
const PRODUCT_SEARCH = 'PRODUCT_SEARCH'
const NEW_PRODUCT_FROM_ERRORS = 'NEW_PRODUCT_FROM_ERRORS'
const CLEAR_IMAGE = 'CLEAR_IMAGE'
const POST_MESSAGE = 'POST_MESSAGE'
const CLEAR_ERRORS = 'CLEAR_ERRORS'
const SETTINGS_PRODUCTS = 'SETTINGS_PRODUCTS'

//Action Creator
const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

export const removeImageFromServer = () => {
  return async () => {
    try {
      await axios.delete('/api/products')
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const deleteSingleProduct = (id, foodType) => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/remove_product/${id}`)
      const products = await axios.get('/api/products', {
        params: foodType
      })

      dispatch({
        type: SETTINGS_PRODUCTS,
        products: products.data
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const postProduct = data => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/products/new-product', {...data})
      dispatch({
        type: POST_MESSAGE,
        response: response.data
      })
      const products = await axios.get('/api/products', {
        params: initalSatate.productTypeSetting
      })
      dispatch({
        type: SETTINGS_PRODUCTS,
        products: products.data
      })
    } catch (error) {
      dispatch({
        type: NEW_PRODUCT_FROM_ERRORS,
        errors: error.response.data.errors
      })
    }
  }
}

//the option param is for checking if we want allProduct for seetting section or for display
export const getAllProducts = (type, option) => {
  return async dispatch => {
    try {
      const products = await axios.get('/api/products', {
        params: type
      })
      if (option) {
        dispatch({
          type: SETTINGS_PRODUCTS,
          products: products.data
        })
      } else {
        dispatch(getProducts(products.data))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const ProductSearch = search => {
  return dispatch => {
    dispatch({
      type: PRODUCT_SEARCH,
      search
    })
  }
}

export const getProductType = foodType => {
  return dispatch => {
    dispatch({
      type: GET_PRODUCT_TYPE_SALE,
      foodType
    })
  }
}

export const getProductTypeSettings = foodType => {
  return dispatch => {
    dispatch({
      type: GET_PRODUCT_TYPE_SETTINGS,
      foodType
    })
  }
}

export const getProductImage = () => {
  return async dispatch => {
    try {
      const image = await axios.get('/api/products/image')
      dispatch({
        type: GET_PRODUCT_IMAGE,
        image: image.data
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export const clearImage = () => {
  return dispatch => {
    return dispatch({
      type: CLEAR_IMAGE
    })
  }
}

export const clearErrors = () => {
  return dispatch => {
    return dispatch({
      type: CLEAR_ERRORS
    })
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.products}
    case GET_PRODUCT_TYPE_SALE:
      return {...state, productType: action.foodType}
    case GET_PRODUCT_TYPE_SETTINGS:
      return {...state, productTypeSetting: action.foodType}
    case PRODUCT_SEARCH:
      return {...state, productSearch: action.search}
    case GET_PRODUCT_IMAGE:
      return {...state, image: action.image}
    case NEW_PRODUCT_FROM_ERRORS:
      return {...state, errors: action.errors}
    case POST_MESSAGE:
      return {...state, postMessage: action.response}
    case CLEAR_IMAGE:
      return {...state, image: ''}
    case CLEAR_ERRORS:
      return {...state, errors: []}
    case SETTINGS_PRODUCTS:
      return {...state, settingsProducts: action.products}
    default: {
      return state
    }
  }
}
