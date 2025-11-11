import './index.css'

const CatBar = props => {
  const {activeCatId, changeCatId, allProducts} = props
  const highlightCls = activeCatId === 'All' ? 'highlight' : 'normal'
  const allA = activeCatId === 'All' ? 'color' : ''
  // console.log(activeCatId)

  const extractedNamesArray = allProducts.categories.map(each => each.name)
  // console.log(extractedNamesArray)

  return (
    <div className="catBarBg">
      <h1>Categories</h1>
      <ul className="catBar-ul">
        <li
          key="All"
          onClick={() => changeCatId('All')}
          className={`${highlightCls}`}
        >
          <a className={`${allA} anchorTag`} href="#Fruits & Vegetables">
            All
          </a>
        </li>
        {extractedNamesArray.map(eachItem => {
          const highlightClass =
            activeCatId === eachItem ? 'highlight' : 'normal'
          const anhColor = activeCatId === eachItem ? 'color' : ''
          return (
            <li
              key={eachItem}
              onClick={() => changeCatId(`${eachItem}`)}
              className={`${highlightClass}`}
            >
              <a className={`${anhColor} anchorTag`} href={`#${eachItem}`}>
                {eachItem}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default CatBar
