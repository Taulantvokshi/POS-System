import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    res.request.timeout = 1000
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const login = ({employee, password}, option) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/login`, {employee, password})
  } catch (authError) {
    return dispatch(getUser({error: password}))
  }

  try {
    dispatch(getUser(res.data))
    if (option) {
      history.push('/settings/products')
    } else {
      history.push('/sale')
    }
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const signIn = (
  {employee, password, code},
  option
) => async dispatch => {
  let res
  try {
    if (option) {
      if (code === '12345') {
        res = await axios.post(`/auth/signup`, {
          employee,
          password,
          admin: true,
          jobTitle: 'manager'
        })
      } else {
        return dispatch(getUser({error: 'wrong code'}))
      }
    } else {
      res = await axios.post(`/auth/signup`, {employee, password})
    }
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }
  try {
    dispatch(getUser(res.data))
    history.push('/sale')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/users')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
