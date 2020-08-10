import React, {useEffect} from 'react'
import {ShopOrders} from '../../../components'
import {getAllOrders} from '../../../store/orders'
import {connect} from 'react-redux'

const Shop = ({allOrders}) => {
  useEffect(() => {
    allOrders()
  }, [])

  return (
    <div className="orders">
      <div className="orders_title">
        <h1 className="orders_title-text">ORDERS</h1>
      </div>
      <ShopOrders />
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    allOrders: () => dispatch(getAllOrders())
  }
}
export default connect(null, dispatchState)(Shop)
