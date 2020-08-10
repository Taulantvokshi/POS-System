import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import util from '../../../util/is_icon_clicked'
import {
  Shop,
  ShopingCard,
  Wrench,
  Users,
  Clock,
  AddUser,
  Products
} from '../../icons/icon_component'

const SidebarNavigation = ({currentUrl, isLoggedIn, isAdmin}) => {
  return (
    <div className="sidebar_content">
      <Link
        style={{backgroundColor: util.isClicked(currentUrl, 'sale')}}
        className="sidebar_content-items store"
        to={isLoggedIn ? '/sale' : 'users'}
      >
        <ShopingCard color={util.isIconClicked(currentUrl, 'sale')} />
        <h4 style={util.isTextClicked(currentUrl, 'sale')}>Sale</h4>
      </Link>
      <Link
        style={{backgroundColor: util.isClicked(currentUrl, 'shop')}}
        className="sidebar_content-items cash"
        to={isLoggedIn ? '/shop' : '/users'}
      >
        <Shop color={util.isIconClicked(currentUrl, 'shop')} />
        <h4 style={util.isTextClicked(currentUrl, 'shop')}>Orders</h4>
      </Link>
      <Link
        style={{backgroundColor: util.isClicked(currentUrl, 'users', true)}}
        className="sidebar_content-items employe"
        to="/users"
      >
        <Users color={util.isIconClicked(currentUrl, 'users', true)} />
        <h4 style={util.isTextClicked(currentUrl, 'users', true)}>Employees</h4>
      </Link>
      <Link
        style={{backgroundColor: util.isClicked(currentUrl, 'settings')}}
        className="sidebar_content-items employe"
        to={isLoggedIn ? '/settings/products' : '/settings'}
      >
        <Wrench color={util.isIconClicked(currentUrl, 'settings')} />
        <h4 style={util.isTextClicked(currentUrl, 'settings')}>Settings</h4>
      </Link>
    </div>
  )
}

const mapState = store => {
  return {
    currentUrl: store.navigation.url,
    isLoggedIn: !!store.user.id,
    isAdmin: store.user.admin
  }
}

export default connect(mapState)(SidebarNavigation)
