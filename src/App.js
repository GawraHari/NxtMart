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
    activeTab: 'Home',
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab} = this.state
    return (
      <MartContext.Provider
        value={{
          activeTab,
          changeTab: this.changeTab,
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
