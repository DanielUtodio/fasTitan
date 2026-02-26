import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full fixed h-14 bg-background-footer text-white flex items-center justify-between z-[1000] px-4'>
      <div className='w-[15%] flex justify-center items-center text-xl font-bold'>FasTitan</div>
      <div className='w-[40%] flex gap-8 items-center'>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/business" className='flex items-center gap-1'>business <BiChevronDown size={20} /></Link>
        <Link to="/services">services</Link>
        <button>login</button>
      </div>
    </header>
  )
}

export default Header
