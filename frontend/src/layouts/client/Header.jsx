import React from 'react'
import logo from '../../assets/client/header/CasalcoLogo-7.png'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { AiFillPhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail} from 'react-icons/md'
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
    <nav className="bg-white shadow-lg">
      <div className='grid grid-cols-4 text-[#fff]'>
        <div className="col-span-3 bg-[#ff3300] py-2">
          <div className="flex justify-center items-center space-x-5">

            <div className="flex justify-center items-center space-x-1">
              <MdEmail/>
              <h1>casalco.coop@gmail.com</h1>
            </div>
            
            <div className="w-[1px] h-[20px] bg-[#fff]"></div>
            
            <div className="flex justify-center items-center space-x-1">
              <ImLocation2 />
              <h1>Capitol University Compound, Corrales Ext. CDOC 9000</h1>
            </div>

            <div className="w-[1px] h-[20px] bg-[#fff]"></div>        
            
            <div className="flex justify-center items-center space-x-1">
              <AiFillPhone/>
              <h1>(088) 856-2710</h1>
            </div>
            
          </div>
        </div>
        <div className="bg-[#262626] py-2">
          <div className="flex justify-center items-center space-x-5 pt-1">
            <h1>Follow Us:</h1>
            <Link>
              <FaFacebookF />
            </Link>
            {/* <Link>
              <BsInstagram/>
            </Link>
            <Link>
              <BsTwitter/>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="flex items-center font-medium justify-around">
        <div className="z-50 md:w-auto w-full flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            { open ? <GrClose /> : <GiHamburgerMenu /> } 
          </div>
        </div>
        <ul className='md:flex hidden capitalize items-center' id='nav-links'>
          {links.map((link) => (
            <li>
              <NavLink to={link.path} className="inline-block py-7 px-3 hover:bg-[#ff3300] hover:text-[#fff]">{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className='md:block hidden space-x-5'>
          {/* <Link to="/register" className='hover:text-[#e62e00] uppercase font-bold'>Sign Up</Link> */}
          <Link to="/login" className='hover:bg-[#e62e00] bg-[#ff3300] duration-500 text-[#fff] font-semibold capitalize px-6 py-3 uppercase rounded-full drop-shadow-lg'>Member's Portal</Link>
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