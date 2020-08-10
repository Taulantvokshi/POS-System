import React, {useState} from 'react'
import {Products, AddUser, Shop} from '../../../icons/icon_component'
import {Link} from 'react-router-dom'

const SettingsHeader = () => {
  const [isIconSelected, setIcon] = useState('products')

  const hangeleClick = e => {
    setIcon(e.target.lastChild.textContent.toLowerCase())
  }
  return (
    <div className="settings_header">
      <div className="settings_header_icons">
        <Link
          to="/settings/products"
          style={{
            border:
              isIconSelected === 'products'
                ? '2px solid var(--color-primary)'
                : ''
          }}
          onClick={hangeleClick}
          className="settings_header_icons-products settings-items"
        >
          <Products size="16px" />
          <h4>Products</h4>
        </Link>
        <Link
          to="/settings/employees"
          style={{
            border:
              isIconSelected === 'employees'
                ? '2px solid var(--color-primary)'
                : ''
          }}
          onClick={hangeleClick}
          className="settings_header_icons-employees settings-items"
        >
          <AddUser size="16px" />
          <h4>Employees</h4>
        </Link>
        <Link
          style={{
            border:
              isIconSelected === 'store' ? '2px solid var(--color-primary)' : ''
          }}
          onClick={hangeleClick}
          to="/settings/shop"
          className="settings_header_icons-shop settings-items"
        >
          <Shop size="16px" />
          <h4>Store</h4>
        </Link>
      </div>
    </div>
  )
}

export default SettingsHeader
