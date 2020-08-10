import React, {useState} from 'react'
import {connect} from 'react-redux'
import {noteToggle} from '../../../../store/cart'
import {
  CheckoutPayment,
  CheckoutOrder,
  RemoveButton
} from '../../../../components'
const Checkout = ({note, toogleNote}) => {
  return (
    <section className="checkout">
      <div className="checkout_content">
        <div className="checkout_content-simbol">
          <h3>Cart</h3>
          <div
            style={{height: note ? '30rem' : '0', opacity: note ? '1' : '0'}}
            className="checkout_content-simbol--note"
          >
            <div
              onClick={toogleNote}
              style={{display: note ? 'flex' : 'none'}}
              className="checkout_content-simbol--note-rv"
            >
              <RemoveButton />
            </div>
            <form
              className="checkout_content-simbol--note-form"
              style={{display: note ? 'flex' : 'none'}}
            >
              <textarea
                rows="8"
                cols="25"
                name="note"
                placeholder="Add a note..."
              />

              <button
                className="checkout_content-simbol--note-form--button-small"
                type="submit"
              >
                add
              </button>
            </form>
          </div>
        </div>

        <div className="checkout_content-order">
          <CheckoutOrder />
        </div>

        <div className="checkout_content-details">
          <CheckoutPayment />
        </div>
      </div>
    </section>
  )
}
const mapState = store => {
  return {note: store.cart.note}
}
const dispatchState = dispatch => {
  return {toogleNote: () => dispatch(noteToggle())}
}
export default connect(mapState, dispatchState)(Checkout)
