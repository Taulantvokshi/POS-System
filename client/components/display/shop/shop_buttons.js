import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {deleteWholeOrderThunk} from '../../../store/orders'
import socket from '../../../socket'

const ShopButtons = ({deleteWholeOrder, order}) => {
  const [selected, setSelect] = useState(false)

  useEffect(() => {
    socket.on('chat', data => {
      setSocket(data.message)
    })
    socket.on('timer', data => {
      setTimer(data)
    })
  }, [])

  return (
    <div className="order_buttons">
      <div onClick={() => setSelect(true)} className="order_buttons_cancel">
        <h4>cancel</h4>
      </div>
      <div className="order_buttons_edit">
        <h4>edit</h4>
      </div>
      <div
        style={{height: selected ? '100%' : ''}}
        className="order_buttons_hidden"
      >
        <div
          onClick={() => deleteWholeOrder(order.id)}
          style={{
            opacity: selected ? '1' : '0',
            visibility: selected ? 'visible' : 'hidden'
          }}
          className="order_buttons_hidden-yes"
        >
          <h3>YES</h3>
        </div>
        <div
          onClick={() => setSelect(false)}
          style={{
            opacity: selected ? '1' : '0',
            visibility: selected ? 'visible' : 'hidden'
          }}
          className="order_buttons_hidden-no"
        >
          <h3>NO</h3>
        </div>
      </div>
    </div>
  )
}
const dispatchStateToProps = dispatch => {
  return {deleteWholeOrder: id => dispatch(deleteWholeOrderThunk(id))}
}
export default connect(null, dispatchStateToProps)(ShopButtons)
