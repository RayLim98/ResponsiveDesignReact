import React, { useEffect, useState } from 'react'
import logo from '../Images/sleeping_panda.png'
import { Link } from "react-router-dom"

function Banner() {
  return (
    <div className="flex items-center">
      <img className="p-3 w-28 sm:w-20" src={logo}/>
      <Link to="/" className="text-white font-bold text-3xl hidden sm:contents">
        App Name
      </Link>
    </div>
  )
}
//test commit
export default Banner