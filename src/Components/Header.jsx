import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar flex justify-between items-center w-full h-12 px-4 bg-slate-700 '>
      <div className="logo text-white text-lg">S-Kit Cart</div>
      <ul className='flex gap-3 text-white'>
        <li className='list-none'>
            <Link to={"/"}>Home</Link>
        </li>
        <li className='list-none'>
            <Link to={"/Cart"}>View Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
