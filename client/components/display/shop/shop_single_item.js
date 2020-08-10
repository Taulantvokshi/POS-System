import React from 'react'

const ShopSingleItem = ({product}) => {
  return (
    <div className="order_contents_details--items">
      <div className="order_contents_details--items-images singleItems">
        <div className="order_contents_details--items-images-im">
          <img src={product.image} />
        </div>
      </div>
      <div className="order_contents_details--items-amount singleItems">
        {product.name}
      </div>
      <div className="order_contents_details--items-amount singleItems">
        {product.amount}
      </div>
      <div className="order_contents_details--items-price singleItems">
        {Number(product.price).toFixed(2)}
      </div>
      <div
        style={{color: '#91157e'}}
        className="order_contents_details--items-total singleItems"
      >
        {`$${product.total}`}
      </div>
    </div>
  )
}

export default ShopSingleItem
