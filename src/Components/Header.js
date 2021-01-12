import React from 'react'
import NavMenu from './NavMenu'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
function Header() {
  return (
    <header>
        <div className="px-3 sm:px-32 bg-green-100 flex flex-row items-center justify-between">
          <Banner />
          <NavMenu />
        </div>
    </header>
  )
}

export default Header
