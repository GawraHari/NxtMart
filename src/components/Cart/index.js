import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cartBg">
      <div>
        <img
          src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761286103/Logo_blccl3.png"
          alt="empty cart"
          className="emptyCartImage"
        />
        <p className="emptyText">Your cart is empty</p>
      </div>
    </div>
    <Footer />
  </>
)
export default Cart
