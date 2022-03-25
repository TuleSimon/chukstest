import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BigButton, Divider } from '../../components';
import girl from '../../images/girl2.png'
function LandingPage() {

  const navigate = useNavigate()

  const navigateToLogin = () => navigate("/login")

  return (
    
    <div className='flex flex-row place-items-center grow landingpage_bg'>
          <div className='md:basis-1/2 flex flex-col place-items-center'>
            <h1 className='md:text-6xl text-4xl font-black'> WELCOME TO <br></br><span className='text-primary'>CHUKS TEST</span></h1>
            <Divider style="mt-4 mb-4"/>
            <p className="text-xl mt-2"> We are charged with making sure you are prepared for the trials ahead, our online tests are efficient, accurate and
              reliable.
            </p>

            <BigButton onClick={navigateToLogin}> START EXAMINATION </BigButton>


          </div>
            <div className='me md:block hidden'>
            <img src={girl} alt="Landing Page"  width="550px"/>
            </div>
      </div>
  
  )
}

export default LandingPage