import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BigButton, Divider, TextFields } from "../../components";
import { setDialog, setUser } from "../../features/chukstest/Chukstest";
import login from '../../images/login_image.png'
import { loginStudent } from "../../services";

function StudentLogin() {

    const [regNo, setJambRegNo] = useState("")
    const [password, setPassword] = useState("")
    const [loading, Setloading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const signin = () => {
      Setloading(true)
      loginStudent(regNo,password).then((datas) => {
        Setloading(false)
        if(datas.students[0]!=null){
          const user = datas.students[0]
          console.log(user)
          dispatch(setUser(user))
          navigate(`/welcome`)
        }
        else{
          dispatch(setDialog({
            "open":true,
            "message":"INVALID PASSWORD OR USERNAME",
            "error":true,
            "title":"ERROR LOGGIN IN",
            "instruction":false,
            "alert":false,
        }))
        }
      })
   //   
    }

  //   useEffect(() => {

  //   return () => {
      
  //   }
  // }, [])

  return (
    <div className="flex flex-row place-items-center grow landingpage_bg">

      <div className="me md:block hidden md:basis-1/2">
        <img src={login} alt="Student Login Page" width="100%" />
      </div>

      <div className="md:basis-1/2 flex flex-col place-items-center bg-white rounded-xl md:p-8 p-4 md:px-12">
        <h1 className="md:text-2xl text-xl font-bold">Login </h1>
        <p className="text-lg md:text-xl mt-2 text-black_light">  Welcome Student, Please Login to access the examination </p>
        <Divider style="mt-4 mb-4" />
        
        <form className="flex flex-col gap-2 w-full">
            <TextFields name="reg_number" placeholder="Enter Matriculation Number" value={regNo} type="text" setValue={setJambRegNo}/>
            <TextFields name="reg_number" placeholder="Enter Password"  value={password} setValue={setPassword} type="password"/>
        </form>
        <p className="mt-2"> Forogot Password? <span className="text-primary cursor-pointer hover:font-bold"> Reset Password</span> </p>
        <BigButton disabled={loading} onClick={signin} styles="w-full h-max py-4"> {loading?"Signing in":"SIGN IN"} </BigButton>
        <p> Immediately you login, your exam starts immediately, don't login without being prepared for your examination</p>
      </div>
    </div>
  );
}

export default StudentLogin;
