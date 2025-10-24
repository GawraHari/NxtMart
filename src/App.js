import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/Login" component={Login} />
    <ProtectedRoute exact path="/" component={NotFound} />
    <ProtectedRoute exact path="/cart" component={Cart} />
  </Switch>
)

export default App
