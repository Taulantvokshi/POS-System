import axios from 'axios'

const initalSatate = {
  employees: []
}

//Action Creator
const GET_EMPLOYEES = 'GET_EMPLOYEES'

export const getEmployees = () => {
  return async dispatch => {
    try {
      const employees = await axios.get('/api/users')
      dispatch({
        type: GET_EMPLOYEES,
        employees: employees.data
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default (state = initalSatate, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {...state, employees: action.employees}
    default: {
      return state
    }
  }
}
