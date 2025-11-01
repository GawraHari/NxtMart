import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import MartContext from './context/MartContext'

import './App.css'

const App = () => {
  const [cartItemsArray, setCart] = useState([])

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems)) // Parse back to an array/object
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItemsArray)) // Stringify to store as a string
  }, [cartItemsArray]) // Dependency array ensures this runs when cartItems changes

  const addProductToCart = prd => {
    const product = {...prd, count: 1}
    // this.setState(prev => ({
    //   cartItemsArray: [...prev.cartItemsArray, product],
    // }))

    const updatedCart = [...cartItemsArray, product]
    setCart(updatedCart)
  }

  const removeProductFromCart = id => {
    const updatedCartList = cartItemsArray.filter(each => each.id !== id)
    setCart(updatedCartList)
  }

  const incrementCartProductQuantity = id => {
    const uptList = cartItemsArray.map(each => {
      if (id === each.id) {
        const updatedQuant = each.count + 1
        return {...each, count: updatedQuant}
      }
      return each
    })
    setCart(uptList)
  }

  const decrementCartProductQuantity = id => {
    const uptList = cartItemsArray.map(each => {
      if (id === each.id) {
        const updatedQuant = each.count - 1
        return {...each, count: updatedQuant}
      }
      return each
    })
    setCart(uptList)
  }

  // localStorage.setItem('cartItem', JSON.stringify(cartItemsArray))
  console.log(cartItemsArray)
  return (
    <MartContext.Provider
      value={{
        cartItemsArray,
        addProductToCart,
        removeProductFromCart,
        incrementCartProductQuantity,
        decrementCartProductQuantity,
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

export default App
