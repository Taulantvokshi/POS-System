import React from 'react'
import {Dropdown} from '../../components'
const ToolbarUser = () => {
  return (
    <div className="toolbar_user">
      <div className="toolbar_user-info">
        <Dropdown />
        <div className="toolbar_user-info--image">
          <img src="../images/tallea.jpg" />
        </div>
        <div className="toolbar_user-info--name">
          <div className="toolbar_user-info--name-inf">
            <h3>Taulant</h3>
            <p className="employe">employee</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolbarUser
