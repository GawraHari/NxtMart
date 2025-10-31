import {Component} from 'react'
import MartContext from '../../context/MartContext'
import './index.css'

class ProductItem extends Component {
  state = {count: 0}

  render() {
    return (
      <MartContext.Consumer>
        {value => {
          const {
            addProductToCart,
            removeProductFromCart,
            incrementCartProductQuantity,
            decrementCartProductQuantity,
          } = value
          const {details} = this.props
          const {name, weight, price, image, id} = details
          const {count} = this.state

          const addToCart = () => {
            this.setState(
              prev => ({count: prev.count + 1}),
              addProductToCart({...details, count}),
            )
            console.log(count)
          }

          const minusCount = () => {
            if (count === 1) {
              this.setState(
                prev => ({count: prev.count - 1}),
                removeProductFromCart(id),
              )
            } else {
              this.setState(
                prev => ({count: prev.count - 1}),
                decrementCartProductQuantity(id),
              )
            }
          }

          const plusCount = () => {
            this.setState(
              prev => ({count: prev.count + 1}),
              incrementCartProductQuantity(id),
            )
          }

          return (
            <li className="productLi" data-testid="product">
              <img src={image} alt={name} className="productImg" />
              <div>
                <div>
                  <p>{name}</p>
                  <p>{weight}</p>
                  <p>₹ {price.slice(1)} .00</p>
                </div>
                {count > 0 ? (
                  <div>
                    <button
                      data-testid="decrement-count"
                      type="button"
                      onClick={minusCount}
                    >
                      -
                    </button>
                    <span data-testid="active-count">{count}</span>
                    <button
                      data-testid="increment-count"
                      type="button"
                      onClick={plusCount}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={addToCart}
                    data-testid="add-button"
                  >
                    Add
                  </button>
                )}
              </div>
            </li>
          )
        }}
      </MartContext.Consumer>
    )
  }
}
export default ProductItem
