import {IoIosArrowForward} from 'react-icons/io'

import './index.css'

import ProductItem from '../ProductItem'

const HomeProduct = props => {
  const {allProducts} = props

  return (
    <div className="dataBg">
      <ul className="dataBg-ul">
        {allProducts.categories.map(eachCat => (
          <li key={eachCat.name} id={eachCat.name} className="dataBg-li">
            <div className="catIcon">
              <p className="catname">{eachCat.name}</p>
              <IoIosArrowForward size={23} color="black" />
            </div>
            <ul className="eachCatItems">
              {eachCat.products.map(eachItem => (
                <ProductItem key={eachItem.id} details={eachItem} />
              ))}
            </ul>
            <hr className="horizon" />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomeProduct
