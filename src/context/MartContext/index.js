import React from 'react'

const MartContext = React.createContext({
  cartItemsArray: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  incrementCartProductQuantity: () => {},
  decrementCartProductQuantity: () => {},
})
export default MartContext
