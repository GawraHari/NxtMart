import React from 'react'

const MartContext = React.createContext({
  cartItemsArray: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  incrementCartProductQuantity: () => {},
  decrementCartProductQuantity: () => {},
})
export default MartContext

// <div>
//     <img
//       src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761977463/Group_7417_cr3yqy.png"
//       alt="payment successful"
//     />
//     <h1>Payment Successful</h1>
//     <p>Thank you for ordering.</p>
//     <p>Your payment is successfully completed.</p>
//     <button type="button" onClick={this.returnToHome}>
//       Return to Homepage
//     </button>
// </div>
