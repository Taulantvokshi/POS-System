import React from 'react'
import {Search} from '../../../../icons/icon_component'
import {ProductSearch} from '../../../../store/products'
import {connect} from 'react-redux'
const InfobarSearch = ({searchProduct}) => {
  return (
    <div className="toolbar_navigation-search">
      <form action="#" className="search">
        <input
          onChange={e => searchProduct(e.target.value)}
          type="text"
          className="search__input"
          placeholder="Search Food Item"
          name="search"
        />
        <button disabled type="submit" className="search__button">
          <Search size="17" color="var(--color-grey-dark-3)" />
        </button>
      </form>
    </div>
  )
}
const dispatchState = dispatch => {
  return {searchProduct: text => dispatch(ProductSearch(text))}
}
export default connect(null, dispatchState)(InfobarSearch)
