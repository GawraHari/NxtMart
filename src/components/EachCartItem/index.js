import MartContext from '../../context/MartContext'
import './index.css'

const EachCartItem = props => (
  <MartContext.Consumer>
    {value => {
      const {decrementCartProductQuantity, incrementCartProductQuantity} = value
      const {cartItem} = props
      const {id, name, weight, price, image, count} = cartItem
      console.log(id, count, weight, price)

      return (
        <li data-testid="cartItem">
          <img src={image} alt={name} />
          {value}
        </li>
      )
    }}
  </MartContext.Consumer>
)

export default EachCartItem
