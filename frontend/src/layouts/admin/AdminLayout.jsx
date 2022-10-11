import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import logo from '../../assets/client/header/logo.png'


// IMPORT ICONS 
import { HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { BsClipboardCheck, BsCardChecklist, BsCardList } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

// IMPORT ROUTES
import routes from '../../routes/routes'

const AdminLayout = () => {

  const menus = [
    { name: "Dashboard", path: "/admin/dashboard", icon: MdOutlineDashboard },
    { name: "Membership Application", path: "/admin/membership-application", icon: AiOutlineFolderOpen },
    { name: "Loan Application", path: "/admin/loan-application", icon: BsCardList },
    { name: "List of Members", path: "/admin/members", icon: HiOutlineUsers },
    { name: "Approved Memberships", path: "/admin/approved-membership", icon: BsCardChecklist },
    { name: "Approved Loans", path: "/admin/approved-loan", icon: BsClipboardCheck },
  ]

  const [open, setOpen] = useState(true);

  return (
    <div className="relative md:flex h-screen overflow-hidden">
      <aside className={`bg-[#000033] min-h-screen  ${open ? 'w-60': 'w-16'} duration-500 text-gray-100 px-4`}>
        <div className="py-3 flex justify-start border-b border-veryLightGray">
          <img src={logo} className='w-8' alt="" />
          <h1 className={`whitespace-pre px-3 font-serif font-bold text-2xl flex justify-center items-center text-veryLightGray duration-1000 ${!open && 'opacity-0'}`}>CASALCO</h1>
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          { menus?.map((menu, i) => (
            <NavLink activeClassName='bg-[#00001a]' to={menu?.path} key={i} className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#00001a] rounded-md">
              <div className="text-veryLightGray">{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2 style={{ transitionDelay:`${i + 3}00ms` }} className={`whitespace-pre text-veryLightGray duration-500 ${!open && 'opacity-0 translate-x-72 overflow-hidden'}`}>{ menu?.name }</h2>
              <h2 className={`${ open && "hidden"} absolute left-48 bg-[#000033] font-semibold whitespace-pre text-[#fff] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                { menu?.name }
              </h2>
            </NavLink>
          ))}
        </div>
      </aside>
      <div className="flex-1 h-screen overflow-y-auto">
        <header className='sticky top-0 z-50 bg-[#fff] px-2 py-2 drop-shadow-lg'>
          <div className="flex">
            <GiHamburgerMenu size={26} className="cursor-pointer" onClick={() => setOpen(!open) } />
            <h1 className='font-bold px-5'>{menus.name}</h1>
          </div>
        </header>
        <main className="relative p-3 min-h-full bg-[#f3f3f2]">
      <Switch>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => (
                  <route.component {...props} />
                )}
              />
            )
          )
        })}
        <Redirect from="/admin" to="/admin/dashboard"/>
      </Switch>
      </main>

      <footer className="sticky bottom-0 z-50 bg-[#fff] px-2 py-1.5">
        <h1>This is the footer</h1>
      </footer>
      </div>
    </div>
  )
}

export default AdminLayout