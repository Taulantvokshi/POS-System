import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {ShopSingleOrder} from '../../../components'
import socket from '../../../socket'

const ShopOrders = ({orders}) => {
  return (
    <div className="single_order">
      {orders.map(order => {
        return <ShopSingleOrder key={order.id} order={order} />
      })}
    </div>
  )
}

const mapState = state => {
  return {
    orders: state.orders.orders
  }
}
export default connect(mapState)(ShopOrders)
