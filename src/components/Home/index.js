import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

export default class Home extends Component {
  state = {
    activeCategory: 'All',
  }

  getData = async() => {
      const res = await fetch('https://apis2.ccbp.in/nxt-mart/category-list-details')
      const data = await res.json()
      console.log(data)
  }

  componentDidMount(){
    this.getData()
  }


  render() {
    const {activeCategory} = this.state

    return (
      <>
        <Header />
        <div>
          <div className="catPanel"></div>

        </div>
        <Footer />
      </>
    )
  }
}
