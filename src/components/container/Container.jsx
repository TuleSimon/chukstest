import React from 'react'
import { Navbar } from '..'

function Container({children}) {
  return (
    <div className='container mx-auto mt-4 flex flex-col w-screen'>
        <div className="">
        <Navbar/>
        </div>
        {children}

      
    </div>
  )
}

export default Container