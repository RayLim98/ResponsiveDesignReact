import React, { useState } from 'react'
import NavMenuBar from './NavMenuBar' 
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function NavMenu() {
  const [showMenu,setShowMenu] = useState(false)
  let menu = null
  if(showMenu) {
    menu = 
    <div>
      <div className="fixed top-0 left-0 h-full w-full bg-green-t-50"
           onClick={() => setShowMenu(!showMenu)}>
      </div>
      <NavMenuBar closeMenu={() => setShowMenu(false)}/>
    </div>
  }
  return (
    <nav>
      <div className="text-white font-bold p-3 hidden sm:contents">
        <ul className="flex flex-col sm:flex-row">
          <li>
            <Link to="/" className="p-3">Home</Link>
          </li>
          <li>
            <Link to="/about" className="p-3">About</Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <FontAwesomeIcon icon={faBars} className="text-4xl" onClick={() => setShowMenu(!showMenu)}/>
        {menu}
      </div>
    </nav>
  )
}

export default NavMenu