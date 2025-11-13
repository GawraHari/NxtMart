import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {TbLogout2} from 'react-icons/tb'
import {FiHome} from 'react-icons/fi'
import {GrCart} from 'react-icons/gr'
import Cookies from 'js-cookie'
import MartContext from '../../context/MartContext'

import './index.css'

class Header extends Component {
  gotoLogin = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <MartContext.Consumer>
        {value => {
          const {activeTab, changeTab} = value
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
                      onClick={() => changeTab('Home')}
                    >
                      Home
                    </li>
                  </Link>
                  <Link className="navLink" to="/cart">
                    <li
                      className={`navListItem ${activeCart}`}
                      onClick={() => changeTab('Cart')}
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
                    onClick={() => changeTab('Home')}
                  />
                </Link>
                <Link className="navLink" to="/cart">
                  <GrCart
                    size={25}
                    className={activeCartIcon}
                    onClick={() => changeTab('Cart')}
                  />
                </Link>
                <TbLogout2 size={25} onClick={this.gotoLogin} />
              </div>
            </>
          )
        }}
      </MartContext.Consumer>
    )
    // const {activeTab} = this.state
    // console.log(activeTab)
  }
}
export default withRouter(Header)
