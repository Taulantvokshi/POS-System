import React from 'react'
import {
  ShopEmployeeImage,
  ShopButtons,
  ShopOrderContent
} from '../../../components'
const ShopSingleOrder = ({order}) => {
  return (
    <div className="single_order-single">
      <ShopEmployeeImage name={order.employeeName} />
      <ShopOrderContent products={order.products} />
      <ShopButtons order={order} />
    </div>
  )
}

export default ShopSingleOrder
