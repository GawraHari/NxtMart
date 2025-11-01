import './index.css'

const CatBar = props => {
  const {activeCatId, changeCatId, allProducts} = props
  const highlightCls = activeCatId === 'All' ? 'highlight' : 'normal'
  // console.log(activeCatId)

  return (
    <div className="catBarBg">
      <h1>Categories</h1>
      <ul className="catBar-ul">
        <li
          key="All"
          onClick={() => changeCatId('All')}
          className={`${highlightCls}`}
        >
          <a className="anchorTag" href="#Fruits & Vegetables">
            All
          </a>
        </li>
        {allProducts.map(items => {
          const highlightClass =
            activeCatId === items.name ? 'highlight' : 'normal'
          return (
            <li
              key={items.name}
              onClick={() => changeCatId(`${items.name}`)}
              className={`${highlightClass}`}
            >
              <a className="anchorTag" href={`#${items.name}`}>
                {items.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default CatBar
