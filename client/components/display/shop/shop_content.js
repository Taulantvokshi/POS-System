import React from 'react'
import {ShopSingleItem} from '../../../components'

const ShopOrderContent = ({products}) => {
  return (
    <div className="order_contents">
      <div className="order_contents_info">
        <h5 />
        <h5>name</h5>
        <h5>amount</h5>
        <h5>price</h5>
        <h5>total</h5>
      </div>
      <div className="order_contents_details">
        {products.map(product => {
          return <ShopSingleItem key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default ShopOrderContent
