import ToolbarMessage from './toolbar/toolbar_message'

/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
// export { default as Navbar } from './navbar'
// export { default as UserHome } from './user-home'
// export { Login, Signup } from './auth-form'
// ReusableComponents
export {default as RemoveButton} from './reusable_components/remove_button'

export {default as Main} from './mainPage'
export {default as SmallScreen} from './smallScreen'
export {default as Dashboard} from './home_page/dashboard'

//Sidebar
export {default as Sidebar} from './sidebar/sidebar_component'
export {default as SidebarNavigation} from './sidebar/sidebar_content'

//Toolbar
export {default as Toolbar} from './toolbar/toolbar_component'
export {default as ToolbarContent} from './toolbar/toolbar_content'

export {default as ToolbarLogo} from './toolbar/toolbar_logo'
export {default as ToolbarMessage} from './toolbar/toolbar_message'
export {default as ToolbarUser} from './toolbar/toolbar_user'
export {default as Dropdown} from './toolbar/toolbar_drobdown'

//Display
export {default as Display} from './display/routes'
//-------------------
//Display/Sale
export {default as Sale} from './display/sale/sale_main'
//Display/Sale/Sale_checkout
export {default as Checkout} from './display/sale/checkout/checkout_component'
export {
  default as CheckoutPayment
} from './display/sale/checkout/checkout_payment'
export {default as CheckoutOrder} from './display/sale/checkout/checkout_order'
export {default as SingleOrder} from './display/sale/checkout/single_order'
//Display/sale/infobar
export {default as Infobar} from './display/sale/infobar/infobar_component'
export {default as InfobarContent} from './display/sale/infobar/infobar_content'
export {default as InfobarSearch} from './display/sale/infobar/infobar_search'
export {
  default as InfobarNavigation
} from './display/sale/infobar/infobar_navigation'
//Display/sale/products
export {default as Products} from './display/sale/products/products_component'
export {default as SingleProduct} from './display/sale/products/single_product'

//-------------------

//Display/Shop
export {default as Shop} from './display/shop/shop_main'
export {default as ShopOrders} from './display/shop/shop_orders'
export {default as ShopSingleOrder} from './display/shop/shop_single_order'
export {default as ShopEmployeeImage} from './display/shop/shop_employee_image'
export {default as ShopOrderContent} from './display/shop/shop_content'
export {default as ShopButtons} from './display/shop/shop_buttons'
export {default as ShopSingleItem} from './display/shop/shop_single_item'

//Display/Users
export {default as Users} from './display/users/users_main'
export {default as SingelUser} from './display/users/single_user'
export {default as LoginForm} from './display/users/login_form'

//Display/Schedule
export {default as Schedule} from './display/schedule/schedule_main'
//Display/Settings
export {default as Settings} from './display/settings/settings_main'
export {default as SigninForm} from './display/settings/signin_form'
export {default as AdminLogin} from './display/settings/addmin_login'
export {default as SettingsHeader} from './display/settings/settings_header'
export {default as SettingsDisplay} from './display/settings/settings_display'
//Display/Settings/Admin
export {
  default as SettingsStore
} from './display/settings/settings_addmin/settings_store'
export {
  default as SettingsProducts
} from './display/settings/settings_addmin/settings_products'
export {
  default as SettingsEmployees
} from './display/settings/settings_addmin/settings_employees'
//Display/Settings/Admin/products
export {
  default as NewProduct
} from './display/settings/settings_addmin/admin_products/new_product'
export {
  default as ProductInfo
} from './display/settings/settings_addmin/admin_products/products_info'

export {
  default as UploadImage
} from './display/settings/settings_addmin/admin_products/upload_product_image'

export {
  default as SingleInfoProduct
} from './display/settings/settings_addmin/admin_products/single_product'
