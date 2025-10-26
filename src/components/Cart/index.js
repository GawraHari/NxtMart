import Header from '../Header'
import Footer from '../Footer'
import EachCartItem from '../EachCartItem'

import './index.css'

const Cart = () => {
  const retreivedCartItemArray = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(retreivedCartItemArray)
  const isCartEmpty = cartItems.length === 0
  const totalCartItems = cartItems.length
  let totalAmount = 0
  cartItems.forEach(eachItem => {
    totalAmount += eachItem.count * eachItem.price
  })
  return (
    <>
      <Header />
      <div className="cartBg">
        {isCartEmpty ? (
          <div>
            <img
              src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761286103/Logo_blccl3.png"
              alt="empty cart"
              className="emptyCartImage"
            />
            <p className="emptyText">Your cart is empty</p>
          </div>
        ) : (
          <div>
            <h1>Items</h1>
            <ul>
              {cartItems.map(cartItem => (
                <EachCartItem key={cartItem.id} cartItem={cartItem} />
              ))}
              <div>
                <h1>
                  Total ({totalCartItems} items) :
                  <p data-testid="total-price">{totalAmount}</p>
                </h1>
                <button type="button">Checkout</button>
              </div>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Cart
