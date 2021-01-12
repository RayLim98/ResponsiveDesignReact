import React from 'react'
import { Link  } from 'react-router-dom'

function NavMenuBar(prop) {
  return (
    <div className="fixed top-0 left-0 bg-green-100 w-4/5 h-full text-white text-xl font-bold p-3">
      <ul className="flex flex-col items-center">
        <li>
          <Link to="/" className="px-16 py-3 border-b-2 hover:bg-green-200 block" 
            onClick={prop.closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" className="px-16 py-3 border-b-2 hover:bg-green-200 block" 
            onClick={prop.closeMenu}>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenuBar