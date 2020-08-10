import React from 'react'
import {connect} from 'react-redux'
import {deleteSingleProduct} from '../../../../../store/products'

const SingleInfoProduct = ({product, deleteProduct, foodType}) => {
  return (
    <div className="settings_singleProduct">
      <div className="settings_singleProduct_image">
        <div className="settings_singleProduct_image-imageBox">
          <img src={product.image} />
        </div>
      </div>

      <div className="settings_singleProduct_details">
        <div className="settings_singleProduct_details_content">
          <h3 id="product-name-color">{product.name}</h3>
          <h3>{product.quantity}</h3>
          <h3 id="price-color">{`$${product.price}`}</h3>
        </div>
      </div>

      <div className="settings_singleProduct_buttons">
        <div className="settings_singleProduct_buttons_edit">
          <h3>edit</h3>
        </div>
        <div
          onClick={() => {
            deleteProduct(product.id, foodType)
          }}
          className="settings_singleProduct_buttons_delete"
        >
          <h3>delete</h3>
        </div>
      </div>
    </div>
  )
}
const dispatchState = dispatch => {
  return {
    deleteProduct: (id, foodType) => dispatch(deleteSingleProduct(id, foodType))
  }
}
const mapStateToProps = store => {
  return {
    foodType: store.products.productTypeSetting
  }
}

export default connect(mapStateToProps, dispatchState)(SingleInfoProduct)
