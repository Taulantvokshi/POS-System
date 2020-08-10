import React, {useRef, useState, useEffect} from 'react'
import {
  postProduct,
  clearImage,
  clearErrors,
  removeImageFromServer
} from '../../../../../store/products'
import {connect} from 'react-redux'
import {Upload} from '../../../../../icons/icon_component'
import hasError from '../../../../../../util/new_product_errors'
const NewProduct = ({
  newProduct,
  hasImage,
  errors,
  resetImage,
  postMessage,
  removeErrors,
  removeImage
}) => {
  const ref = useRef()
  const label = useRef()

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    type: 'appetizer'
  })

  useEffect(
    () => {
      if (postMessage) {
        setFormData({
          price: '',
          name: '',
          quantity: '',
          type: 'appetizer'
        })
        resetImage()
      }
    },
    [errors, postMessage, hasImage]
  )

  const onDisable = () => {
    if (!hasImage) {
      label.current.style.border = '3px solid red'
      setTimeout(() => {
        label.current.style.border = 'none'
      }, 200)
    }
  }

  return (
    <div className="new_product">
      <div className="new_product_header">
        <form
          onChange={() => ref.current.click()}
          className="new_product_header_image"
          action="/api/products"
          method="post"
          encType="multipart/form-data"
        >
          {hasImage && hasImage.id ? (
            ''
          ) : (
            <input
              type="file"
              name="picture"
              placeholder="image"
              id="file"
              style={{display: 'none'}}
            />
          )}

          <label
            ref={label}
            className="image_label"
            style={{cursor: 'pointer', width: '100%', height: '100%'}}
            htmlFor="file"
          >
            {hasImage && hasImage.id ? (
              <img
                style={{border: '2px solid white'}}
                id="output"
                src={hasImage.image}
              />
            ) : (
              ''
            )}
            <div>
              <Upload size="20px" color="grey" />
            </div>
          </label>

          <button style={{display: 'none'}} ref={ref} type="submit" />
        </form>
        <div className="new_product_header_upload">
          {hasImage && hasImage.id ? (
            <div
              className="new_product_header_upload--removeUpload"
              onClick={() => {
                removeImage()
                resetImage()
              }}
            >
              <h3>Remove</h3>
            </div>
          ) : (
            <h3>add-photo first</h3>
          )}
        </div>
      </div>

      <form className="new_product_form">
        <div onClick={onDisable} className="new_product_form_inputs">
          <label>
            <small>{hasError(errors, 'name') || 'enter food name'}</small>
          </label>
          <input
            style={{border: hasError(errors, 'name') ? '1px solid red' : ''}}
            disabled={Boolean(!hasImage)}
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            name="productName"
            type="text"
            placeholder="Product Name"
          />
        </div>

        <div className="inputs-duo">
          <div onClick={onDisable} className="new_product_form_inputs">
            <label>
              <small>
                {hasError(errors, 'price') || 'Price is set to dollar'}
              </small>
            </label>
            <input
              value={formData.price}
              style={{
                border: hasError(errors, 'price') ? '1px solid red' : ''
              }}
              disabled={Boolean(!hasImage)}
              onChange={e => setFormData({...formData, price: e.target.value})}
              className="new_product_form_inputs-price"
              name="price"
              type="text"
              placeholder="Price"
            />
          </div>
          <div onClick={onDisable} className="new_product_form_inputs">
            <label>
              <small>
                {hasError(errors, 'quantity') || 'Amount can be changed'}
              </small>
            </label>
            <input
              value={formData.quantity}
              style={{
                border: hasError(errors, 'quantity') ? '1px solid red' : ''
              }}
              disabled={Boolean(!hasImage)}
              onChange={e =>
                setFormData({...formData, quantity: e.target.value})
              }
              className="new_product_form_inputs-amount"
              name="amount"
              type="text"
              placeholder="Amount"
            />
          </div>
        </div>

        <div onClick={onDisable} className="new_product_form_inputs">
          <label>
            <small>default appetizer</small>
          </label>
          <select
            disabled={Boolean(!hasImage)}
            onChange={e => setFormData({...formData, type: e.target.value})}
            className="new_product_form_inputs-corse"
            name="language"
            id="options"
          >
            <option value="appetizer">Appetiser</option>
            <option value="main">Main</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drink</option>
          </select>
        </div>

        <div
          onClick={onDisable}
          className=" single_button  new_product_form_inputs "
        >
          <button
            disabled={Boolean(!hasImage)}
            onClick={e => {
              e.preventDefault()
              removeErrors()
              newProduct(formData)
            }}
            className="new_product_form_inputs-button"
          >
            <h3>ADD-PRODUCT</h3>
          </button>
        </div>
      </form>
    </div>
  )
}
const dispatchState = dispatch => {
  return {
    newProduct: data => dispatch(postProduct(data)),
    resetImage: () => dispatch(clearImage()),
    removeErrors: () => dispatch(clearErrors()),
    removeImage: () => dispatch(removeImageFromServer())
  }
}
const mapStateToProps = store => {
  return {
    hasImage: store.products.image,
    errors: store.products.errors,
    postMessage: store.products.postMessage
  }
}
export default connect(mapStateToProps, dispatchState)(NewProduct)
