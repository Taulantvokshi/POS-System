import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../../../../../store/products'
import {InfobarNavigation, SingleInfoProduct} from '../../../../../components'
const ProductInfo = ({foodType, allProducts, products}) => {
  useEffect(
    () => {
      allProducts(foodType, true)
    },
    [foodType]
  )

  return (
    <div className="products_info">
      <div className="products_info_nav">
        <InfobarNavigation origin="settings" />
      </div>
      <div className="products_info_container">
        {products.map(product => {
          return <SingleInfoProduct key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    allProducts: (type, option) => dispatch(getAllProducts(type, option))
  }
}

const mapStateToProps = store => {
  return {
    foodType: store.products.productTypeSetting,
    products: store.products.settingsProducts
  }
}

export default connect(mapStateToProps, dispatchState)(ProductInfo)
