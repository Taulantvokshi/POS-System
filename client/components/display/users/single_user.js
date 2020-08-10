import React, {useState, Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import {login} from '../../../store'
import {logout} from '../../../store'
import {Link} from 'react-router-dom'

const SingelUser = ({user, logInEmployee, currentUser, logUserOut, error}) => {
  const [openForm, setForm] = useState(false)
  const [formData, setFormData] = useState('')

  const onSubmit = () => {
    if (!currentUser.id) {
      logInEmployee({
        employee: user.employee,
        password: formData
      })
    }
  }
  useEffect(
    () => {
      if (formData.length === 3) {
        onSubmit()
      }
    },
    [formData]
  )

  const handleChange = e => {
    e.preventDefault()
    setFormData(e.target.value)
  }

  return (
    <div
      onClick={e => {
        e.stopPropagation()
        setForm(!openForm)
      }}
      className="single_employee"
    >
      <div className="single_employee_profile">
        <div className="single_employee_profile-image">
          <img
            style={{
              transition: 'all 0.2s',
              boxShadow:
                error === formData ? '0px 0px 0px 4px rgba(255,0,72,1)' : ''
            }}
            src={user.image}
          />
        </div>
      </div>
      <div
        className="single_employee_status"
        style={{
          backgroundColor:
            user.id === (currentUser && currentUser.id)
              ? '#91bd3a'
              : 'var( --color-grey-light-4)'
        }}
      >
        <h3>
          {user.id === (currentUser && currentUser.id) ? 'active' : 'offline'}
        </h3>
      </div>
      <div className="single_employee_name">
        <h1>{user.employee.toUpperCase()}</h1>
        <h5>{user.jobTitle}</h5>
      </div>
      <div
        style={{height: openForm ? '5rem' : '0'}}
        className="single_employee_login"
      >
        {user.id !== (currentUser && currentUser.id) && !user.admin ? (
          <Fragment>
            <form
              onClick={e => {
                e.stopPropagation()
              }}
              style={{
                visibility: openForm ? 'visible' : 'hidden',
                opacity: openForm ? '1' : '0'
              }}
              className="single_employee_login-form"
            >
              <input
                maxLength="3"
                placeholder="Pin"
                onChange={handleChange}
                type="text"
              />
            </form>
          </Fragment>
        ) : currentUser.jobTitle === 'employee' || currentUser.admin ? (
          <div
            onClick={logUserOut}
            style={{
              visibility: openForm ? 'visible' : 'hidden',
              opacity: openForm ? '1' : '0'
            }}
            className="single_employee_login-out"
          >
            <h3>Logout</h3>
          </div>
        ) : (
          <div
            style={{
              visibility: openForm ? 'visible' : 'hidden',
              opacity: openForm ? '1' : '0'
            }}
            className="single_employee_login-out"
          >
            <Link
              style={{
                color: 'white',
                fontSize: '1.1rem',
                textDecoration: 'none'
              }}
              to="/settings"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    logInEmployee: data => dispatch(login(data)),
    logUserOut: () => dispatch(logout())
  }
}

const mapStateToProps = store => {
  return {currentUser: store.user, error: store.user.error}
}

export default connect(mapStateToProps, dispatchState)(SingelUser)
