// import {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/Login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <NotFound />
  </Switch>
)

export default App
