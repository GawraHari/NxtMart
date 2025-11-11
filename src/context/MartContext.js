import React from 'react'

const MartContext = React.createContext({
  activeTab: 'Home',
  changeTab: () => {},
})
export default MartContext
