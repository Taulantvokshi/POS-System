import React from 'react'
import {InfobarSearch, InfobarNavigation} from '../../../../components'
const InfobarContent = () => {
  return (
    <div className="infobar_content">
      <InfobarSearch />
      <InfobarNavigation origin="sale" />
    </div>
  )
}

export default InfobarContent
