import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../../../../store/products'
import {SingleProduct} from '../../../../components'

const Products = ({products, getProducts, foodType, searchText}) => {
  useEffect(
    () => {
      getProducts(foodType, false)
    },
    [foodType]
  )

  const newProducts = products.filter(product => {
    if (product.name.toLowerCase().startsWith(searchText.toLowerCase())) {
      return product
    }
  })

  return (
    <div className="products">
      <div className="products_items">
        {newProducts.length ? (
          newProducts.map(product => {
            return <SingleProduct key={product.id} product={product} />
          })
        ) : (
          <h1>No Products</h1>
        )}
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {getProducts: (type, option) => dispatch(getAllProducts(type, option))}
}

const mapStateToProps = store => {
  return {
    products: store.products.products,
    cartItems: store.cart.cart,
    foodType: store.products.productType,
    searchText: store.products.productSearch
  }
}

export default connect(mapStateToProps, dispatchState)(Products)
