import React, {Fragment, useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {postOrder} from '../../../../store/cart'

const CheckoutPayment = ({order, orderPost}) => {
  const [total, setTotal] = useState(0)

  const getTotal = Object.values(order).reduce((sum, amount) => {
    sum += amount.total
    return sum
  }, 0)

  useEffect(
    () => {
      setTotal(getTotal)
    },
    [order]
  )

  return (
    <Fragment>
      <div className="detail_first">
        <p>Sale</p>
      </div>
      <div className="detail_calc">
        <div>
          <h4>Discount</h4>
          <h4>0%</h4>
        </div>
        <div>
          <h4>Subtotal</h4>

          <h4>{`$ ${total.toFixed(2)}`}</h4>
        </div>
        <div>
          <h4>Tax</h4>
          <h4>{`$ ${(total * 0.12).toFixed(2)}`}</h4>
        </div>
      </div>

      <div className="detail_total">
        <div>
          <h2>Total</h2>
          <h3>${(total + total * 0.12).toFixed(2)}</h3>
        </div>
      </div>

      <div
        onClick={e => {
          orderPost(order)
        }}
        className="detail_button"
      >
        <h1>PAY</h1>
      </div>
    </Fragment>
  )
}

const mapState = store => {
  return {order: store.cart.currentOrder}
}
const dispatchState = dispatch => {
  return {orderPost: order => dispatch(postOrder(order))}
}
export default connect(mapState, dispatchState)(CheckoutPayment)
