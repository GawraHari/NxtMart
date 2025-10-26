import MartContext from '../../context/MartContext'
import './index.css'

const EachCartItem = props => (
  <MartContext.Consumer>
    {value => {
      const {decrementCartProductQuantity, incrementCartProductQuantity} = value

      const {id, name, weight, price, image, count} = props

      return (
        <li>
          <img src={image} alt={name} />
        </li>
      )
    }}
  </MartContext.Consumer>
)

export default EachCartItem
