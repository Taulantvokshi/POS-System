import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

import {SettingsHeader, AdminLogin, SettingsDisplay} from '../../../components'
const Settings = ({user}) => {
  if (user && user.admin) {
    return (
      <div className="settings">
        <SettingsHeader />
        <SettingsDisplay />
      </div>
    )
  } else {
    return (
      <div className="settings_login">
        <AdminLogin />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {user: store.user}
}

export default connect(mapStateToProps)(Settings)
