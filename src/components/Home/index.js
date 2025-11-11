import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import HomeProducts from '../HomeProducts'
import CatBar from '../CatBar'

import './index.css'

const apiStatus = {
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  init: 'INITIAL',
}
export default class Home extends Component {
  state = {
    activeApiStatus: apiStatus.init,
    activeCatId: 'All',
    allProducts: {},
  }

  componentDidMount() {
    this.getData()
  }

  changeCatId = cat => {
    this.setState({activeCatId: cat})
  }

  getData = async () => {
    this.setState({activeApiStatus: apiStatus.inprogress})
    const res = await fetch(
      'https://apis2.ccbp.in/nxt-mart/category-list-details',
    )
    const data = await res.json()
    console.log(data)
    if (res.ok) {
      this.setState({
        activeApiStatus: apiStatus.success,
        allProducts: data,
      })
    } else {
      this.setState({activeApiStatus: apiStatus.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#263868" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="fView">
      <img
        src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761466207/Group_7519failureView_eyrapx.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button type="button" onClick={this.getData}>
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => {
    const {activeCatId, allProducts} = this.state
    return (
      <div className="productsBg">
        <CatBar
          activeCatId={activeCatId}
          changeCatId={this.changeCatId}
          allProducts={allProducts}
        />
        <HomeProducts allProducts={allProducts} />
      </div>
    )
  }

  renderSwitch = () => {
    const {activeApiStatus} = this.state
    switch (activeApiStatus) {
      case apiStatus.failure:
        return this.renderFailureView()
      case apiStatus.inprogress:
        return this.renderLoadingView()
      case apiStatus.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="homeBgCard">{this.renderSwitch()}</div>
        <Footer />
      </>
    )
  }
}
