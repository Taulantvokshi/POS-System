import React, {useEffect} from 'react'
import {Display, Sidebar, Toolbar} from '../../components'
import {me} from '../../store'
import {connect} from 'react-redux'
import {Logos} from '../../icons/icon_component'
const Dashboard = ({logMe, user, currentUrl}) => {
  useEffect(
    () => {
      logMe()
    },
    [currentUrl]
  )

  return (
    <div className="dashboard">
      <div className="main_logo">
        <h1>PayDay</h1>
      </div>
      <Toolbar />
      <Sidebar />
      <Display currUser={user} />
    </div>
  )
}
const dispatchState = dispatch => {
  return {logMe: () => dispatch(me())}
}

const mapState = store => {
  return {
    user: store.user,
    currentUrl: store.navigation.url
  }
}
export default connect(mapState, dispatchState)(Dashboard)
