import React, { useState, useEffect } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { MdMenu, MdClose } from "react-icons/md";

const links = [
  { name: "home", route: "/" },
  { name: "about", route: "/about" },
  { name: "business", route: "/business", hasIcon: true },
  { name: "services", route: "/services" },
  { name: "login", route: "/login" }
]

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // close menu when resizing back to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 h-20 bg-background-footer text-white z-[1000]">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-12 w-28 sm:w-36 flex-shrink-0">
            <img src="/assets/images/logo.png" alt="FasTitan Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-end gap-6">
          {links.map((link, index) => (
            <Link 
              to={link.route} 
              className="capitalize flex items-center gap-1 whitespace-nowrap text-sm md:text-base" 
              key={index}
            >
              {link.name}
              {link.hasIcon && <BiChevronDown size={20} />}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        )}
      </div>

      {/* Mobile Nav */}
      {isMobile && isMenuOpen && (
        <nav className="md:hidden bg-background-footer flex flex-col items-start gap-4 px-6 py-4">
          {links.map((link, index) => (
            <Link 
              to={link.route} 
              className="capitalize flex items-center gap-1 text-base" 
              key={index}
              onClick={() => setIsMenuOpen(false)} // close menu after click
            >
              {link.name}
              {link.hasIcon && <BiChevronDown size={20} />}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
