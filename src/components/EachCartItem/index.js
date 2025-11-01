import MartContext from '../../context/MartContext'
import './index.css'

const EachCartItem = props => (
  <MartContext.Consumer>
    {value => {
      const {
        decrementCartProductQuantity,
        incrementCartProductQuantity,
        removeProductFromCart,
      } = value
      const {cartItem} = props
      const {id, name, weight, price, image, count} = cartItem
      console.log(count)
      if (count === 0) removeProductFromCart(id)

      return (
        <li className="cartItemLi" data-testid="cartItem">
          <div className="imgPara">
            <img src={image} alt={name} className="img" />
            <div>
              <p>{name}</p>
              <p>{weight}</p>
              <p>₹ {price.slice(1)}.00</p>
            </div>
          </div>
          <div className="cartItemBtnCnt">
            <button
              data-testid="decrement-quantity"
              type="button"
              onClick={() => decrementCartProductQuantity(id)}
            >
              -
            </button>
            <div data-testid="item-quantity">{count}</div>
            <button
              data-testid="increment-quantity"
              type="button"
              onClick={() => incrementCartProductQuantity(id)}
            >
              +
            </button>
          </div>
          <hr />
        </li>
      )
    }}
  </MartContext.Consumer>
)

export default EachCartItem
