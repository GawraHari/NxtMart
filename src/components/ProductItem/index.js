import {Component} from 'react'

import './index.css'

class ProductItem extends Component {
  state = {count: 0}

  componentDidMount() {
    if (!localStorage.getItem('cartData')) {
      const emptyCart = []
      localStorage.setItem('cartData', JSON.stringify(emptyCart))
    }
  }

  addProductToCart = prd => {
    const storedCartItemsList = JSON.parse(localStorage.getItem('cartData'))
    const membershipCheck = storedCartItemsList.find(each => each.id === prd.id)
    if (membershipCheck) {
      const udtList = storedCartItemsList.map(each => {
        if (each.id === prd.id) {
          const uptCount = each.count + 1
          this.setState({count: 1})
          return {...each, count: uptCount}
        }
        return each
      })
      localStorage.setItem('cartData', JSON.stringify(udtList))
    } else {
      const product = {...prd, count: 1}
      this.setState({count: 1})
      const updList = [...storedCartItemsList, product]
      localStorage.setItem('cartData', JSON.stringify(updList))
    }
  }

  removeProductFromCart = id => {
    const storedCartItemsList = localStorage.getItem('cartData')

    const updatedCartList = JSON.parse(storedCartItemsList).filter(
      each => each.id !== id,
    )
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
    localStorage.setItem('cartData', JSON.stringify(uptList))
  }

  plusCount = id => {
    this.setState(
      prev => ({count: prev.count + 1}),
      this.incrementCartProductQuantity(id),
    )
  }

  minusCount = id => {
    this.setState(
      prev => ({count: prev.count - 1}),
      this.decrementCartProductQuantity(id),
    )
  }

  decrementCartProductQuantity = id => {
    const storedCartItemsList = JSON.parse(localStorage.getItem('cartData'))
    const prd = storedCartItemsList.find(each => each.id === id)
    if (prd && prd.count === 1) {
      this.removeProductFromCart(id)
    } else {
      const uptList = storedCartItemsList.map(each => {
        if (id === each.id && each.count > 0) {
          const updatedQuant = each.count - 1
          return {...each, count: updatedQuant}
        }
        return each
      })
      localStorage.setItem('cartData', JSON.stringify(uptList))
    }
  }

  render() {
    const {details} = this.props
    const {name, weight, price, image, id} = details
    const {count} = this.state

    return (
      <li className="productLi" data-testid="product">
        <img src={image} alt={name} className="productImg" />
        <div className="bottomCart">
          <div>
            <p className="paragraph1">{name}</p>
            <p className="paragraph2">{weight}</p>
            <p className="paragraph3">₹ {price.slice(1)}.00</p>
          </div>
          {count > 0 ? (
            <div className="btnBg">
              <button
                className="btn-minus"
                data-testid="decrement-count"
                type="button"
                onClick={() => this.minusCount(id)}
              >
                -
              </button>
              <span className="bgspan" data-testid="active-count">
                {count}
              </span>
              <button
                className="btn-plus"
                data-testid="increment-count"
                type="button"
                onClick={() => this.plusCount(id)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              data-testid="add-button"
              type="button"
              className="addBtn"
              onClick={() => this.addProductToCart(details)}
            >
              Add
            </button>
          )}
        </div>
      </li>
    )
  }
}
export default ProductItem
