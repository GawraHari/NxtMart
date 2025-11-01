import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import EachCartItem from '../EachCartItem'
import MartContext from '../../context/MartContext'

import './index.css'

class Cart extends Component {
  state = {
    isCheckout: false,
  }

  checkoutTheCart = () => {
    this.setState({isCheckout: true})
  }

  returnToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <MartContext.Consumer>
        {value => {
          const {cartItemsArray} = value
          const {isCheckout} = this.state
          const isCartEmpty = cartItemsArray.length === 0
          const totalCartItems = cartItemsArray.length
          let totalAmount = 0
          cartItemsArray.forEach(eachItem => {
            // const priceEach = eachItem.price.slice(1)
            totalAmount += eachItem.count * parseInt(eachItem.price.slice(1))
          })
          // console.log(isCartEmpty, totalCartItems, totalAmount)

          return (
            <>
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
                      <div>
                        <h1>Items</h1>
                        <div className="cartItemsContainer">
                          <ul className="unOrderedList">
                            {cartItemsArray.map(cartItem => (
                              <EachCartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                              />
                            ))}
                          </ul>
                          <div>
                            <h1>Total ({totalCartItems} items) :</h1>
                            <p data-testid="total-price">₹ {totalAmount}</p>
                            <button
                              type="button"
                              onClick={this.checkoutTheCart}
                            >
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div>
                  <img
                    src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761977463/Group_7417_cr3yqy.png"
                    alt="payment successful"
                  />
                  <h1>Payment Successful</h1>
                  <p>Thank you for ordering</p>
                  <p>Your payment is successfully completed</p>
                  <button type="button" onClick={this.returnToHome}>
                    Return to Homepage
                  </button>
                </div>
              )}

              <Footer />
            </>
          )
        }}
      </MartContext.Consumer>
    )
  }
}
export default withRouter(Cart)
