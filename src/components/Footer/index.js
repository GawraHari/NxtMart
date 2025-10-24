import {BiLogoFacebookSquare} from 'react-icons/bi'
import {FaSquarePinterest} from 'react-icons/fa6'
import {FaTwitter, FaInstagram} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footerbg">
    <div className="ft1">
      <p>
        For any queries, contact +91-9876543210 or mail us help@nxtmart.co.in
      </p>
      <div className="socialIconsContainer">
        <BiLogoFacebookSquare size={45} />
        <FaSquarePinterest size={45} />
        <FaTwitter size={45} />
        <FaInstagram size={45} />
      </div>
    </div>
    <p className="copy">Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd</p>
  </div>
)
export default Footer
