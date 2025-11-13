import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa6'
import Header from '../Header'
import Footer from '../Footer'
import EachCartItem from '../EachCartItem'

import './index.css'

class Cart extends Component {
  state = {
    isCheckout: false,
    cartDataArray: [],
  }

  componentDidMount() {
    if (localStorage.getItem('cartData')) {
      const storedCartItems = JSON.parse(localStorage.getItem('cartData'))
      this.setState({cartDataArray: storedCartItems})
    }
  }

  removeProductFromCart = id => {
    const storedCartItemsList = localStorage.getItem('cartData')

    const updatedCartList = JSON.parse(storedCartItemsList).filter(
      each => each.id !== id,
    )
    this.setState({cartDataArray: updatedCartList})
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
  }

  incrementCartProductQuantity = id => {
    const storedCartItemsList = JSON.parse(localStorage.getItem('cartData'))
    const uptList = storedCartItemsList.map(each => {
      if (id === each.id) {
        const updatedQuant = each.count + 1
        return {...each, count: updatedQuant}
      }
      return each
    })
    this.setState({cartDataArray: uptList})
    localStorage.setItem('cartData', JSON.stringify(uptList))
  }

  decrementCartProductQuantity = id => {
    const storedCartItemsList = JSON.parse(localStorage.getItem('cartData'))
    const uptList = storedCartItemsList.map(each => {
      if (id === each.id && each.count > 0) {
        const updatedQuant = each.count - 1
        return {...each, count: updatedQuant}
      }

      return each
    })
    this.setState({cartDataArray: uptList})
    localStorage.setItem('cartData', JSON.stringify(uptList))
  }

  checkoutTheCart = () => {
    this.setState({isCheckout: true})
  }

  returnToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isCheckout, cartDataArray} = this.state
    const isCartEmpty = cartDataArray.length === 0
    const totalCartItems = cartDataArray.length
    let totalAmount = 0
    cartDataArray.forEach(eachItem => {
      totalAmount += eachItem.count * parseFloat(eachItem.price.slice(1))
    })
    totalAmount = totalAmount.toFixed(2)
    // console.log(cartDataArray)

    return (
      <div className="cartBackgroundCard">
        <Header />
        {!isCheckout ? (
          <>
            <div className="cartBg">
              {isCartEmpty ? (
                <div>
                  <img
                    src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761286103/Logo_blccl3.png"
                    alt="empty cart"
                    className="emptyCartImage"
                  />
                  <h1 className="emptyText">Your cart is empty</h1>
                </div>
              ) : (
                <div className="cartContainer">
                  <div className="mobileViewCartHeader">
                    <FaArrowLeft
                      size={20}
                      className="backArrow"
                      onClick={this.returnToHome}
                    />
                    <p className="checkoutHeading">Cart</p>
                  </div>
                  <h1 className="items">Items</h1>
                  <ul className="unOrderedList">
                    {cartDataArray.map(cartItem => (
                      <EachCartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        removeProductFromCart={this.removeProductFromCart}
                        decrementCartProductQuantity={
                          this.decrementCartProductQuantity
                        }
                        incrementCartProductQuantity={
                          this.incrementCartProductQuantity
                        }
                      />
                    ))}
                  </ul>
                  <div className="summaryCart">
                    <h1>Total ({totalCartItems} items) : </h1>
                    <p data-testid="total-price">₹ {totalAmount}</p>
                    <button
                      type="button"
                      onClick={this.checkoutTheCart}
                      className="checkout"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="pytSectionCart">
            <img
              src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761977463/Group_7417_cr3yqy.png"
              alt="payment successful"
            />
            <h1>Payment Successful</h1>
            <p>Thank you for ordering</p>
            <p>Your payment is successfully completed</p>
            <button
              type="button"
              onClick={this.returnToHome}
              className="rtnBtn"
            >
              Return to Homepage
            </button>
          </div>
        )}
        <Footer />
      </div>
    )
  }
}
export default withRouter(Cart)
