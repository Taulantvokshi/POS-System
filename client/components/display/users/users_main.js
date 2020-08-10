import React, {useEffect} from 'react'
import {SingelUser} from '../../../components'
import {logout} from '../../../store'
import {getEmployees} from '../../../store/employees'
import {connect} from 'react-redux'

const Users = ({logUserOut, displayUsers, employees, user}) => {
  useEffect(() => {
    displayUsers()
  }, [])

  return (
    <div className="employees">
      <div className="employees_nav">
        <h1>EMPLOYEES</h1>
      </div>

      <div className="employees_employee">
        {employees.map(employee => {
          return <SingelUser key={employee.id} user={employee} />
        })}
      </div>
    </div>
  )
}
const dispatchState = dispatch => {
  return {
    logUserOut: () => dispatch(logout()),
    displayUsers: () => dispatch(getEmployees())
  }
}

const mapStateToProps = store => {
  return {employees: store.employees.employees, user: store.user}
}
export default connect(mapStateToProps, dispatchState)(Users)
