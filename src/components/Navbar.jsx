import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-around items-center p-4 w-full fixed top-0 left-0 right-0 bg-teal-600'>
      <div className='text-3xl text-white font-bold'>
        <Link to='/'>Greate Quotes</Link>
      </div>

      <ul className='flex flex-row items-center'>
        <li className='text-lg font-medium text-white mx-3'>
          <Link to='/quotes'>All Quotes</Link>
        </li>
        <li className='text-lg font-medium text-gray-200 mx-3'>
          <Link to='/add-new-quote'>Add Quotes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
