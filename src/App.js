import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import MartContext from './context/MartContext'

import './App.css'

class App extends Component {
  state = {
    cartItemsArray: [],
  }

  // componentDidMount() {
  //   const cartItemsArrayFromLocalStorage = JSON.parse(
  //     localStorage.getItem('cartItems'),
  //   )
  //   if (cartItemsArrayFromLocalStorage !== undefined)
  //     this.setState({cartItemsArray: cartItemsArrayFromLocalStorage})
  // }

  addProductToCart = prd => {
    const {cartItemsArray} = this.state
    const product = {...prd, count: 1}
    // this.setState(prev => ({
    //   cartItemsArray: [...prev.cartItemsArray, product],
    // }))

    const updatedCart = [...cartItemsArray, product]
    this.setState({cartItemsArray: updatedCart})
  }

  removeProductFromCart = id => {
    const {cartItemsArray} = this.state
    const updatedCartList = cartItemsArray.filter(each => each.id !== id)
    this.setState({cartItemsArray: updatedCartList})
  }

  incrementCartProductQuantity = id => {
    this.setState(prev => ({
      cartItemsArray: prev.cartItemsArray.map(each => {
        if (id === each.id) {
          const updatedQuant = each.count + 1
          return {...each, count: updatedQuant}
        }
        return each
      }),
    }))
  }

  decrementCartProductQuantity = id => {
    this.setState(prev => ({
      cartItemsArray: prev.cartItemsArray.map(each => {
        if (id === each.id) {
          const updatedQuant = each.count - 1
          return {...each, count: updatedQuant}
        }
        return each
      }),
    }))
  }

  render() {
    const {cartItemsArray} = this.state
    // localStorage.setItem('cartItem', JSON.stringify(cartItemsArray))
    console.log(cartItemsArray)
    return (
      <MartContext.Provider
        value={{
          cartItemsArray,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
          incrementCartProductQuantity: this.incrementCartProductQuantity,
          decrementCartProductQuantity: this.decrementCartProductQuantity,
        }}
      >
        <Switch>
          <Route exact path="/Login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <NotFound />
        </Switch>
      </MartContext.Provider>
    )
  }
}

export default App
