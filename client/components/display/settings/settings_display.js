import React from 'react'
import {Route, withRouter, Switch} from 'react-router-dom'
import {
  SettingsStore,
  SettingsEmployees,
  SettingsProducts
} from '../../../components'

const SettingsDisplay = () => {
  return (
    <div className="settings_display">
      <Switch>
        <Route path="/settings/store" component={SettingsStore} />
        <Route path="/settings/employees" component={SettingsEmployees} />
        <Route path="/settings/products" component={SettingsProducts} />
      </Switch>
    </div>
  )
}

export default withRouter(SettingsDisplay)
