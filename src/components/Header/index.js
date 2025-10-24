import {Link, withRouter} from 'react-router-dom'
import {TbLogout2} from 'react-icons/tb'
import {FiHome} from 'react-icons/fi'
import {CiShoppingCart} from 'react-icons/ci'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props
  console.log(history)

  const gotoLogin = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

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
          <li className="navListItem">
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="navLink" to="/cart">
              Cart
            </Link>
          </li>
          <li className="navListItem">
            <button type="button" onClick={gotoLogin}>
              <TbLogout2 className="logout" /> Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="mobileFooterBg">
        <Link className="navLink" to="/">
          <FiHome size={25} />
        </Link>
        <Link className="navLink" to="/cart">
          <CiShoppingCart size={25} />
        </Link>
        <TbLogout2 size={25} onClick={gotoLogin} />
      </div>
    </>
  )
}
export default withRouter(Header)
