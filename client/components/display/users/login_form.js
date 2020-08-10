import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../../store'

const LoginForm = ({logInEmployee}) => {
  const handleSubmit = evt => {
    evt.preventDefault()
    logInEmployee(
      {
        employee: evt.target.employee.value,
        password: evt.target.password.value
      },
      false
    )
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="employee" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" />
        </div>
        <div>
          <button type="submit">click</button>
        </div>
        {/* {error && error.response && <div> {error.response.data} 
                    </div>} */}
      </form>
    </div>
  )
}

const dispatchState = dispatch => {
  return {logInEmployee: (data, option) => dispatch(login(data, option))}
}

export default connect(null, dispatchState)(LoginForm)
