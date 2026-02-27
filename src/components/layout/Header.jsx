import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const links = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "about",
    route: "/about",
  },
  {
    name: "business",
    route: "/business",
    hasIcon: true,
  },
  {
    name: "services",
    route: "/services",
  },
  {
    name: "login",
    route: "/login"
  }
]

const Header = () => {
  return (
    <header className='w-full fixed h-14 bg-background-footer text-white flex items-center justify-between z-[1000] px-4'>
      <div className='w-[15%] flex justify-center items-center text-xl font-bold'>FasTitan</div>
      <div className='w-[40%] flex gap-8 items-center'>
        {links.map((link, index) => (
          <Link to={link.route} className="capitalize flex items-center gap-1" key={index}>
            {link.name}
            {link.hasIcon && <BiChevronDown size={24} />}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
