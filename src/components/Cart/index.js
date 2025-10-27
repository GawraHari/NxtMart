import Header from '../Header'
import Footer from '../Footer'
import EachCartItem from '../EachCartItem'

import './index.css'

const Cart = () => {
  // const retreivedCartItemArray = localStorage.getItem('cartItem')
  // const cartItemsArray = JSON.parse(retreivedCartItemArray)
  const cartItemsArray = []
  const isCartEmpty = cartItemsArray.length === 0
  const totalCartItems = cartItemsArray.length
  let totalAmount = 0
  cartItemsArray.forEach(eachItem => {
    // const priceEach = eachItem.price.slice(1)
    totalAmount += eachItem.count * parseInt(eachItem.price.slice(1))
  })
  console.log(isCartEmpty, totalCartItems, totalAmount)
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
            <div className="cartItemsContainer">
              <ul className="unOrderedList">
                {cartItemsArray.map(cartItem => (
                  <EachCartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </ul>
              <div className="summaryContainer">
                <h1>
                  Total ({totalCartItems} items) :
                  <p data-testid="total-price">₹ {totalAmount}</p>
                </h1>
                <button type="button">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Cart
