import React from 'react'

const ShopEmployeeImage = ({name}) => {
  return (
    <div className="order_employee">
      {/* <div className='order_employee_image' >
                <img src='images/tallea.jpg' />
            </div> */}
      <div className="order_employee_name">
        <h4>{name.toUpperCase()}</h4>
        <h5>employee</h5>
      </div>

      <div className="order_employee_orderNumber">
        <h5 className="order_employee_orderNumber-number">order : 0021</h5>
      </div>
    </div>
  )
}

export default ShopEmployeeImage
