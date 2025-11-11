import './index.css'

const EachCartItem = props => {
  const {
    cartItem,
    removeProductFromCart,
    decrementCartProductQuantity,
    incrementCartProductQuantity,
  } = props
  const {id, name, weight, price, image, count} = cartItem

  const minusCount = () => {
    if (count === 1) removeProductFromCart(id)
    else decrementCartProductQuantity(id)
  }

  return (
    <>
      <li className="cartItemLi" data-testid="cartItem">
        <div className="imgPara">
          <img src={image} alt={name} className="img" />
          <div>
            <p className="paragraph1">{name}</p>
            <p className="paragraph2">{weight}</p>
            <p className="paragraph3">₹{price.slice(1)}</p>
          </div>
        </div>
        <div className="cartItemBtnCnt">
          <button
            className="btn-minus"
            data-testid="decrement-quantity"
            type="button"
            onClick={() => minusCount()}
          >
            -
          </button>
          <span className="bgspan" data-testid="item-quantity">
            {count}
          </span>
          <button
            className="btn-plus"
            data-testid="increment-quantity"
            type="button"
            onClick={() => incrementCartProductQuantity(id)}
          >
            +
          </button>
        </div>
      </li>
      <hr />
    </>
  )
}

export default EachCartItem
