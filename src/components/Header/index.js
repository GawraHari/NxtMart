import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {TbLogout2} from 'react-icons/tb'
import {FiHome} from 'react-icons/fi'
import {CiShoppingCart} from 'react-icons/ci'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  state = {
    activeTab: 'Home',
  }

  activeTabHome = () => {
    this.setState({activeTab: 'Home'})
  }

  activeTabCart = () => {
    this.setState({activeTab: 'Cart'})
  }

  gotoLogin = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {activeTab} = this.state
    console.log(activeTab)

    const activeHome = activeTab === 'Home' ? 'highlightHome' : ''
    const activeCart = activeTab === 'Cart' ? 'highlightCart' : ''

    const activeHomeIcon = activeTab === 'Home' ? 'homeIcon' : ''
    const activeCartIcon = activeTab === 'Cart' ? 'cartIcon' : ''

    return (
      <>
        <nav>
          <div>
            <Link className="navLink" to="/">
              <img
                className="website-logo"
                src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761044119/Logo_1_g4peag.png"
                alt="website logo"
              />
            </Link>
          </div>
          <ul className="listContainer">
            <Link className="navLink" to="/">
              <li
                className={`navListItem ${activeHome}`}
                onClick={this.activeTabHome}
              >
                Home
              </li>
            </Link>
            <Link className="navLink" to="/cart">
              <li
                className={`navListItem ${activeCart}`}
                onClick={this.activeTabCart}
              >
                Cart
              </li>
            </Link>
            <li className="navListItem">
              <button type="button" onClick={this.gotoLogin}>
                <TbLogout2 className="logout" /> <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="mobileFooterBg">
          <Link className="navLink" to="/">
            <FiHome
              size={25}
              className={activeHomeIcon}
              onClick={this.activeTabHome}
            />
          </Link>
          <Link className="navLink" to="/cart">
            <CiShoppingCart
              size={25}
              className={activeCartIcon}
              onClick={this.activeTabCart}
            />
          </Link>
          <TbLogout2 size={25} onClick={this.gotoLogin} />
        </div>
      </>
    )
  }
}
export default withRouter(Header)
