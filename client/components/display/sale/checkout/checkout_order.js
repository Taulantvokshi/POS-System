import React from 'react'
import {connect} from 'react-redux'
import {SingleOrder} from '../../../../components'

const CheckoutOrder = ({cartItems}) => {
  if (cartItems.length) {
    return (
      <div className="orders">
        {cartItems.map(item => {
          return <SingleOrder key={item.id} item={item} />
        })}
      </div>
    )
  } else {
    return (
      <div className="orders">
        <div className="orders-png-empty">
          <h1>Cart is empty...</h1>
        </div>
      </div>
    )
  }
}
const mapStateToProps = store => {
  return {
    cartItems: store.cart.cart,
    currentEmploye: store.user,
    isClear: store.orders.clearOrder
  }
}

export default connect(mapStateToProps)(CheckoutOrder)
