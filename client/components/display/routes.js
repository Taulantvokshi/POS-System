import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Sale,
  Shop,
  Schedule,
  Users,
  Settings,
  SigninForm
} from '../../components'
import {navigationIconClicked} from '../../store/navigation'
import {me} from '../../store'
import history from '../../history'

const Display = ({isLoggedIn, loadInitialData, historyUrl}) => {
  useEffect(
    () => {
      loadInitialData()
      historyUrl(history.location.pathname)
    },
    [history.location.pathname]
  )
  return (
    <section className="display">
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}
        {/* <Route path="/sale" component={Sale} />
        <Route path="/shop" component={Shop} /> */}
        <Route path="/users" component={Users} />
        <Route path="/settings/" component={Settings} />
        <Route exact path="/signup" component={SigninForm} />
        <Route exact path="/" component={Users} />
        {/* <Route path="/schedule" component={Schedule} />
        <Route path="/settings" component={Settings} /> */}

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/sale" component={Sale} />
            <Route path="/shop" component={Shop} />
            <Route path="/users" component={Users} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/settings" component={Settings} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    </section>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    historyUrl: data => dispatch(navigationIconClicked(data)),
    loadInitialData() {
      dispatch(me())
    }
  }
}
// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Display))
