import React, {useState} from 'react'
import {Confirm} from '../../../../icons/icon_component'
import {addCartProduct} from '../../../../store/cart'
import {connect} from 'react-redux'
const SingleProduct = ({product, addItemToCart, cartItems}) => {
  const doesItemExist = !!cartItems.filter(item => item.id === product.id)
    .length

  const handleClick = () => {
    addItemToCart(product)
  }

  return (
    <div onClick={handleClick} className="products_items-item">
      <figure className="products_items-item--image">
        <img
          style={{filter: doesItemExist ? 'brightness(60%)' : ''}}
          src={product.image}
        />
        <figcaption
          style={{opacity: doesItemExist ? '1' : '0'}}
          className="products_items-item--image-caption"
        >
          <Confirm />
        </figcaption>
      </figure>
      <div className="products_items-item--info">
        <h3>{product.name}</h3>
        <h3 style={{color: 'var(--color-primary)'}}>{`$${product.price}`}</h3>
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    addItemToCart: item => dispatch(addCartProduct(item))
  }
}

const mapStateToProps = store => {
  return {cartItems: store.cart.cart}
}

export default connect(mapStateToProps, dispatchState)(SingleProduct)
