import React from 'react'
import Lottie from 'react-lottie'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../components'
import { getUser } from '../../features/chukstest/Chukstest'
import check from "../../lottie/check.json"

function ExamSuccess() {

    const navigate = useNavigate()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:check,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const user = useSelector(getUser)
    const goHome = () =>( navigate("/"))
  return (
    <div className="flex flex-col md:container  gap-4 place-items-center h-screen place-content-center w-full">
          <Lottie    
                options={defaultOptions}
                width={300}
                height={300}
                />
        <h1 className="text-4xl font-black text-black_trans">EXAMINATION COMPLETED</h1>
        <p className="text-lg text-black_light m-2">Dear {user.name} you have completed this examination successfully, you can now go
        ahead and check your result, we wish you success and GOODLUCK!!</p>
        <BigButton onClick={goHome}> BACK TO HOME </BigButton>
    </div>
  )
}

export default ExamSuccess