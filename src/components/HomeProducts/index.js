import './index.css'

import ProductItem from '../ProductItem'

const HomeProduct = props => {
  const {allProducts} = props
  return (
    <div className="dataBg">
      <ul className="dataBg-ul">
        {allProducts.map(eachCat => (
          <li key={eachCat.name} id={eachCat.name} className="dataBg-li">
            <p className="">{eachCat.name}</p>
            <ul className="eachCatItems">
              {eachCat.products.map(eachItem => (
                <ProductItem key={eachItem.id} details={eachItem} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomeProduct
