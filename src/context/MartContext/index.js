import React from 'react'

const MartContext = React.createContext({
  cartItemsArray: [],
  addProductToCart: () => {},
  incrementCartProductQuantity: () => {},
  decrementCartProductQuantity: () => {},
})
export default MartContext
