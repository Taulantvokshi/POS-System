import React, {useEffect} from 'react'
import {ProductInfo, NewProduct} from '../../../../components'
import {getProductImage} from '../../../../store/products'
import {connect} from 'react-redux'
const SettingsProducts = ({getImage}) => {
  useEffect(() => {
    getImage()
  }, [])
  return (
    <div className="main_products">
      <NewProduct />
      <ProductInfo />
    </div>
  )
}

const dispatchState = dispach => {
  return {getImage: () => dispach(getProductImage())}
}
export default connect(null, dispatchState)(SettingsProducts)
