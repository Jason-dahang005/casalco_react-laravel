import React from 'react'
import logo from '../../assets/client/header/CasalcoLogo-7.png'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'

const Header = () => {

  const links = [
    { name: "Home",       path: "/" },
    { name: "Loans",      path: "/loans" },
    { name: "About Us",   path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" }
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white drop-shadow-lg">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 md:w-auto w-full flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            { open ? <GrClose /> : <GiHamburgerMenu /> } 
          </div>
        </div>
        <ul className='md:flex hidden uppercase items-center font-bold '>
          {links.map((link) => (
            <li>
              <NavLink to={link.path} className="inline-block py-6 px-3 hover:bg-orange-500 hover:text-[#fff]">{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className='md:block hidden space-x-5'>
          <Link to="/register" className='hover:text-orange-500 uppercase  font-bold'>Sign Up</Link>
          <Link to="/login" className='hover:bg-orange-600  bg-orange-500 text-[#fff] font-bold px-6 py-3 uppercase rounded-full drop-shadow-lg'>Member's Portal</Link>
        </div>

        {/*  MOBIEL NAV */}
        <ul className={`md:hidden bg-orange-500 text-[#fff] absolute w-full h-full bottom-0 py-24 pl-4 uppercase  font-bold duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
          {links.map((link) => (
            <li>
              <Link to={link.path} className="py-6 inline-block">{link.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/register" className='py-6 inline-block'>Sign Up</Link>
          </li>
          <div className='py-5 space-x-2'>
            <Link to="/login" className=' bg-orange-700 px-6 py-3 uppercase rounded-full drop-shadow-lg'>Member's Portal</Link>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Header