import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Menu} from '../../icons/icon_component'
const Dropdown = ({user}) => {
  const [nav, setNav] = useState(false)
  const handleClick = e => {
    setNav(!nav)
  }
  return (
    <div onClick={handleClick} className="toolbar_content_dropdown">
      <Menu size="22" color="white" />
      <div
        style={{display: nav ? 'inline-block' : 'none'}}
        className="toolbar_content_dropdown-hidden"
      >
        <p onClick={() => console.log('hello')}>Hello</p>
      </div>
    </div>
  )
}

export default Dropdown
