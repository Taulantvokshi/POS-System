import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {login, me} from '../../../store'

const AdminLogin = ({signInEmployee, isAdmin, isLogin}) => {
  const handleSubmit = evt => {
    evt.preventDefault()
    signInEmployee(
      {
        employee: evt.target.employee.value,
        password: evt.target.password.value
      },
      true
    )
  }

  const [loader, setLoader] = useState(false)

  setTimeout(() => {
    setLoader(true)
  }, 200)

  if (!loader) {
    return (
      <div className="loader">
        <img src="../images/Loader.gif" />
      </div>
    )
  } else {
    return (
      <div className="admin_login">
        <div className="admin_login_image">
          <img src="images/avatar.jpg" />
        </div>

        <form className="admin_login_form" onSubmit={handleSubmit}>
          <input name="employee" type="text" placeholder="user-name" />
          <input name="password" placeholder="password" type="password" />

          <button type="submit">
            <h4>login</h4>
          </button>
        </form>
        <Link to="/signup" className="admin_login_link">
          new addmin
        </Link>
        <h3
          onClick={() => {
            signInEmployee(
              {
                employee: 'Guest',
                password: '1234'
              },
              true
            )
          }}
          className="Guest"
        >
          Guest
        </h3>
      </div>
    )
  }
}

const dispatchState = dispatch => {
  return {
    signInEmployee: (data, option) => dispatch(login(data, option)),
    currentUser: () => dispatch(me())
  }
}

const mapState = store => {
  return {isLogin: !!store.user, isAdmin: store.user}
}

export default connect(mapState, dispatchState)(AdminLogin)
