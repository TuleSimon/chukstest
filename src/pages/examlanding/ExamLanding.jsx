import React, { useEffect } from "react";
import Exam from "../../images/exam2.png";
import { BigButton, Divider } from "../../components";
import { useSelector } from "react-redux";
import { getUser } from "../../features/chukstest/Chukstest";
import { useNavigate } from "react-router-dom";

function ExamLanding() {
  const user = useSelector(getUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user]);

  const start=() => {
      navigate(`/examination/${user.name}`)
  }

  return (
    <div className="flex flex-col h-full place-content-center">
      <div
        className="flex place-items-start mt-4 md:mt-0 md:place-items-center place-content-center w-full
     bg-#00FFFFFF backdrop-blur-md rounded-lg shadow-xl py-4 "
      >
        <div className="me md:flex hidden place-items-center place-content-center md:basis-1/2 h-full w-full">
          <img src={Exam} alt="Student Login Page" width="100%" height="100%" />
        </div>
        <div className="md:basis-1/2 flex flex-col place-items-center">
          <img
            src={user?.profilePicture.url}
            className="rounded-full border-4 border-pink-500 h-48 object-cover w-48 drop-shadow-xl"
          />

          <div>
            <h1 className="text-2xl  font-black text-white m-2 bg-primary px-2">
              {" "}
              WELCOME {user?.name.toUpperCase()}{" "}
            </h1>
          </div>
          <div className="flex p-1 rounded-lg m-2  text-lg ">
                {user.department.haveExam? <div className="flex flex-col text-xl text-black_light place-items-center"> 
                    <span> <p className="font-bold"> DEPARTMENT: </p> {user.department.name} </span>
                    <span> <p className="font-bold"> FACULTY: </p> {user.department.faculty.name} </span>
                    <span> <p className="font-bold"> EXAM TO WRITE: </p> {user.department.examcourse.courseName} </span>
                    <Divider style="m-2"/>
                    <p className="text-red-700 font-bold text-lg">N/B DO NOT CLICK ON THE START BUTTON WHEN YOU ARENT READY</p>
                    </div>

                    :<p>
                    {" "}
                    YOU DO NOT HAVE ANY EXAMINATIONS TO WRITE AT THE MOMMENT, PLESE
                    CHECK BACK LATTER
                    </p>
                }
          </div>
          <div className="w-full px-2">
            <BigButton onClick={start} styles="w-full " disabled={!user.department.haveExam}> START EXAM</BigButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamLanding;
