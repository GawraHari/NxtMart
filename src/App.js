import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/Login" component={Login} />
    <ProtectedRoute exact path="/" component={NotFound} />
  </Switch>
)

export default App
