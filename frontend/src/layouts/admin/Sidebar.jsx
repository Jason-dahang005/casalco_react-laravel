import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

// IMPORT ICONS 
import { HiMenuAlt3, HiOutlineUsers } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { BsClipboardCheck, BsCardChecklist, BsCardList } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const Sidebar = () => {
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
    <aside className={`bg-[#000033] min-h-screen ${open ? 'w-60': 'w-16'} duration-500 text-gray-100 px-4`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer text-veryLightGray" onClick={() => setOpen(!open) } />
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
  )
}

export default Sidebar