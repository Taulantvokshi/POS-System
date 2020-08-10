import React from 'react'
import {Checkout, Infobar, Products} from '../../../components'

const Sale = () => {
  return (
    <div className="saleMain">
      <Checkout />
      <Infobar />
      <Products />
    </div>
  )
}

export default Sale
