import Header from '../Header'
import Footer from '../Footer'
import EachCartItem from '../EachCartItem'
import MartContext from '../../context/MartContext'
import './index.css'

const Cart = () => (
  <MartContext.Consumer>
    {value => {
      const {
        cartItemsArray,
        decrementCartProductQuantity,
        incrementCartProductQuantity,
      } = value
      const isCartEmpty = cartItemsArray.length === 0
      const totalCartItems = cartItemsArray.length
      let totalAmount = 0
      cartItemsArray.forEach(eachItem => {
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
                  {cartItemsArray.map(cartItem => (
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
    }}
  </MartContext.Consumer>
)
export default Cart
