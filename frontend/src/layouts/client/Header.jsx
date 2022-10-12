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
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'


const Header = () => {

  const history = useHistory()

  const links = [
    { name: "Home",       path: "/" },
    { name: "Loans",      path: "/loans" },
    { name: "About Us",   path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" }
  ]

  const [open, setOpen] = useState(false)

  const logoutSubmmit = (e) => {
    e.preventDefault()

    axios.post(`/api/logout`).then(res => {
      if(res.data.status === 200){
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_firstname')
        swal('Success', res.data.message, 'success')
        history.push('/')
      }
    })
  }

  var AuthBtn = ''
  if(!localStorage.getItem('auth_token')){
    AuthBtn = (
      <Link to="/login" className='hover:bg-[#e62e00] bg-[#ff3300] duration-500 text-[#fff] font-semibold px-6 py-3 uppercase rounded-full drop-shadow-lg'>Member's Portal</Link>
    )
  }else{
    AuthBtn = (
<button type='button' onClick={logoutSubmmit} className='hover:bg-[#e62e00] bg-[#ff3300] duration-500 text-[#fff] font-semibold px-6 py-3 uppercase rounded-full drop-shadow-lg'>Logout</button>
    )
  }

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
            <Link to='/'>
              <FaFacebookF />
            </Link>
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
            <li>
              <NavLink to='/' className="inline-block py-7 px-3 hover:bg-[#ff3300] hover:text-[#fff]">Home</NavLink>
            </li>
        </ul>
        <div className='md:block hidden space-x-5'>
          { AuthBtn }
        </div>
      </div>
    </nav>
  )
}

export default Header