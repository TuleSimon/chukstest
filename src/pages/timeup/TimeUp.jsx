import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../components'
import timeup from '../../images/timeup2.png'

function TimeUp() {

    const navigate = useNavigate()

    const goHome = () =>( navigate("/"))
  return (
    <div className="flex flex-col gap-4 place-items-center h-screen place-content-center">
        <img src={timeup} className="h-88 w-88 object-contain"/>
        <h1 className="text-8xl font-black text-black_trans"> EXAM IS OVER</h1>
        <p className="text-lg text-black_light">Sorry but the time for this examination is over</p>
        <BigButton onClick={goHome}> BACK TO HOME </BigButton>
    </div>
  )
}

export default TimeUp