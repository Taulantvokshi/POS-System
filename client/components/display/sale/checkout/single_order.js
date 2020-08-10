import React, {useState, useEffect} from 'react'
import {Plus, Minus, Note} from '../../../../icons/icon_component'
import {RemoveButton} from '../../../../components'
import {
  removeCartItem,
  noteToggle,
  getCurrentOrder
} from '../../../../store/cart'
import {connect} from 'react-redux'

const SingleOrder = ({
  item,
  removeItem,
  toggleNote,
  getTotal,
  getOrder,
  order
}) => {
  const [amount, setAmount] = useState(1)

  useEffect(
    () => {
      getOrder(false, {
        ...order,
        [item.id]: {
          total: amount * item.price,
          id: item.id,
          price: item.price,
          image: item.image,
          name: item.name,
          amount
        }
      })
    },
    [amount]
  )

  const addOne = () => {
    setAmount(amount + 1)
    getOrder(false, {
      ...order,
      [item.id]: {
        total: amount * item.price
      }
    })
  }

  const removeOne = () => {
    if (amount !== 1) {
      setAmount(amount - 1)
      getOrder(false, {
        ...order,
        [item.id]: {
          total: amount * item.price
        }
      })
    }
  }

  return (
    <div className="orders_order">
      <div className="orders_order_image">
        <img src={item.image} />
      </div>

      <div className="orders_order_quantity">
        <h3>{item.name}</h3>

        <div className="orders_order_quantity-navigation">
          <div onClick={addOne} id="plus">
            <Plus />
          </div>
          <div id="sum">{amount}</div>
          <div onClick={removeOne} id="minus">
            <Minus />
          </div>
        </div>
      </div>

      <div className="orders_order_price">
        <h3>{`$${(item.price * amount).toFixed(2)}`}</h3>
      </div>
      <div onClick={toggleNote} className="orders_order_note">
        <Note />
      </div>
      <div
        onClick={e => {
          removeItem(item.id)
          getOrder(item.id, {...order})
        }}
      >
        <RemoveButton />
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {order: state.cart.currentOrder}
}

const dispatchState = dispatch => {
  return {
    removeItem: id => dispatch(removeCartItem(id)),
    toggleNote: () => dispatch(noteToggle()),
    getOrder: (id, order) => dispatch(getCurrentOrder(id, order))
  }
}

export default connect(mapStateToProps, dispatchState)(SingleOrder)
