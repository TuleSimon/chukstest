import React, { useState } from 'react'
import { NavLink } from '..'
import {RiMenu3Fill} from 'react-icons/ri'
import {MdComputer} from 'react-icons/md'

export default function Navbar({styles}) {
    const Links = [{"title":"Home", "link":"/"},{"title":"Login", "link":"/login"},{"title":"Check Result", "link":"/checkresult"}
  ]

    const [toggleNav, setToggleNav] = useState(false)

    const setToggle = () => {
        setToggleNav(!toggleNav)
    }

  return (
    <div className={`flex flex-col overflow-hidden md:flex-row place-items-center place-content-between transition-all ease-in-out duration-1000
    ${toggleNav && 'h-20'} ${!toggleNav && 'h-8'} `}>


      <div className='flex flex-row w-full place-content-between grow'>
      {/* Header Text and Logo */}
        <h1 className='text-primary font-bold text-xl rounded-xl flex place-items-center'>
          <MdComputer className='h-10/12 mr-2 text-primary'/> ChuksTest</h1>

        {/* Navigation Button */}
        <RiMenu3Fill className='h-6 block md:hidden w-6 hover:text-primary ' onClick={setToggle}/>

      </div>

  
      <div className='flex  flex-row md:gap-4 gap-2 w-full justify-end mt-1 md:mt-0 grow place-items-center'>
        {Links.map((nav,index) => (
          <NavLink title={nav.title} to={nav.link} key={index}/>
        ))}
      </div>
    </div>
  )
}
