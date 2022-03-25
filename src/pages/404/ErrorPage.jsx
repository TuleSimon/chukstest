import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../components'

function ErrorPage() {

    const navigate = useNavigate()

    const goHome = () =>( navigate("/"))
  return (
    <div className="flex flex-col gap-4 place-items-center h-full place-content-center">
        <h1 className="text-8xl font-black text-black_trans"> 404</h1>
        <h1 className="text-4xl font-black text-black_trans"> PAGE NOT FOUND</h1>
        <p className="text-lg text-black_light">We tried to find this page, but its seems to have been swallowed by a snake</p>
        <BigButton onClick={goHome}> BACK TO HOME </BigButton>
    </div>
  )
}

export default ErrorPage