import React from 'react'
import './layout.css'
import SideBar from '../../SideBar/SideBar'

const Layout = ({children}) => {
  return (
    <div className="layout">
    <SideBar />
    <div className="content">
      {children}
    </div>
  </div>
  )
}

export default Layout;