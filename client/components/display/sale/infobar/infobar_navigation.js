import React, {useState} from 'react'
import {connect} from 'react-redux'
import {
  getProductType,
  getProductTypeSettings
} from '../../../../store/products'
const InfobarNavigation = ({getFoodType, getFoodTypeSettings, origin}) => {
  const [isCorseSelected, setCorse] = useState('appetizer')
  const hangeleClick = e => {
    setCorse(e.target.textContent.toLowerCase())
    if (origin == 'sale') {
      getFoodType(e.target.textContent.toLowerCase())
    }
    if (origin == 'settings') {
      getFoodTypeSettings(e.target.textContent.toLowerCase())
    }
  }

  return (
    <div className="infobar_content_offerings">
      <div className="infobar_content_offerings-container">
        <div
          onClick={hangeleClick}
          className="infobar_content_offerings-container--app"
          style={{
            borderBottom:
              isCorseSelected === 'appetizer' ? '2px solid #91157e' : ''
          }}
        >
          <p>APPETIZER</p>
        </div>
        <div
          onClick={hangeleClick}
          className="infobar_content_offerings-container--main"
          style={{
            borderBottom: isCorseSelected === 'main' ? '2px solid #91157e' : ''
          }}
        >
          <p>MAIN</p>
        </div>
        <div
          onClick={hangeleClick}
          style={{
            borderBottom:
              isCorseSelected === 'dessert' ? '2px solid #91157e' : ''
          }}
          className="infobar_content_offerings-container--dess"
        >
          <p>DESSERT</p>
        </div>
      </div>
    </div>
  )
}

const dispatchState = dispatch => {
  return {
    getFoodType: type => dispatch(getProductType(type)),
    getFoodTypeSettings: type => dispatch(getProductTypeSettings(type))
  }
}

export default connect(null, dispatchState)(InfobarNavigation)
