import React, {useState} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../../store'

const SigninForm = ({signInEmployee, error}) => {
  const handleSubmit = evt => {
    evt.preventDefault()

    signInEmployee(
      {
        code: evt.target.code.value,
        employee: evt.target.employee.value,
        password: evt.target.password.value
      },
      true
    )
  }
  return (
    <div className="settings_login">
      <form className="admin_signup" onSubmit={handleSubmit}>
        <div className="admin_signup-title">
          <h1>New Addimin</h1>
        </div>
        <input name="code" placeholder="code" type="text" />
        <input name="employee" placeholder="name" type="text" />
        <input name="password" placeholder="password" type="text" />
        <button type="submit">
          <h2>Signup</h2>
        </button>
      </form>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    signInEmployee: (data, newAddmin) => dispatch(signIn(data, newAddmin))
  }
}
const mapStateToProps = store => {
  return {user: store.user, error: store.user.error}
}
export default connect(mapStateToProps, dispatchState)(SigninForm)
