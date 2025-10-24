import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notFoundBg">
    <Header />
    <div className="nfContent">
      <img
        src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761042681/Group_7520_cw8v1x.png"
        alt="not found"
      />
      <h1>Page Not Found.</h1>
      <p>We are sorry, the page you requested could not be found.</p>
    </div>
  </div>
)
export default NotFound
