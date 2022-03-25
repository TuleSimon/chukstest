import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  getUser,
  setDialog,
  setUser,
} from "../../features/chukstest/Chukstest";
import { checkResult } from "../../services";
import { BigButton, Divider, TextFields } from "../../components";

function CheckResult() {
  const [regNo, setJambRegNo] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [password, setPassword] = useState("");
  const [loading, Setloading] = useState(false);

  const signin = () => {
    Setloading(true);
    checkResult(regNo, password).then((datas) => {
      Setloading(false);
      if (datas.students[0] != null) {
        const user = datas.students[0];
        dispatch(setUser(user));
      } else {
        dispatch(
          setDialog({
            open: true,
            message: "INVALID PASSWORD OR USERNAME",
            error: true,
            title: "ERROR VERIFYING STUDENT",
            instruction: false,
            alert: false,
          })
        );
      }
    });
  };

  const [course, setCourse] = React.useState({});

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const CoursesDropDown = () => {
    if (user?.courses?.length > 0)
      return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Courses</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="Age"
              onChange={handleChange}
            >
              {user?.courses?.map((course) => (
                <MenuItem value={course}>{course.courseName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      );
    else return <p className="font-bold text-xl"> NO COURSES AVAILABLE</p>;
  };

const ResultViewer = () =>{
    if(course.studentScores==null){
        return <p className="font-bold text-xl h-full place-self-center text-center"> YOU HAVE NO RESULT FOR THIS COURSE</p>;
    }
    else{
      
        return  <div className="h-full mt-8 place-items-center place-content-center">
            <h1 className="bg-gray-200 font-bold text-lg my-2"> EXAMINATION RESULT FOR {course.courseName.toUpperCase()}</h1>
            <div className="grid grid-cols-2 gap-4 text-left  font-bold text-sm w-full place-content-between">
                <span>NAME: </span> <p className="font-normal">{user.name.toUpperCase()} </p>
                <span>EMAIL: </span> <p className="font-normal">{user.email.toUpperCase()} </p>
                <span>MATRICULATION NO: </span> <p className="font-normal">{user.matno.toUpperCase()} </p>
                <span>DEPARTMENT: </span> <p className="font-normal">{course.department.name.toUpperCase()} </p>
                <span>FACULTY: </span> <p className="font-normal">{course.department.faculty.name.toUpperCase()} </p>

                <span>COURSE: </span> <p className="font-normal">{course.courseName.toUpperCase()} </p>
                <div className="col-span-2 p-4 rounded-full border-primary border-2 flex place-items-center gap-2 place-content-center">
                <span>SCORE: </span> <p className="font-bold text-xl">{course.studentScores.map((score) => {
                    if(score.studentMatNo==user.matno)
                        return score.score
                })} </p>
                </div>
            </div>
        </div>
    }
}


  return (
    <div className=" grid grid-cols-1 md:grid-cols-2">
      <div className="md:basis-1/2 flex flex-col place-items-center bg-white rounded-xl md:p-8 p-4 md:px-12">
        <h1 className="md:text-2xl text-xl font-bold">CHECK RESULT </h1>
        <p className="text-lg md:text-xl mt-2 text-black_light">
          {" "}
          Please complete the fields to process your result{" "}
        </p>
        <Divider style="mt-4 mb-4" />

        <form className="flex flex-col gap-2 w-full">
          <TextFields
            name="reg_number"
            placeholder="Enter Matriculation Number"
            value={regNo}
            type="text"
            setValue={setJambRegNo}
          />
          <TextFields
            name="reg_number"
            placeholder="Enter Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
        </form>
        <p className="mt-2">
          {" "}
          Forogot Password?{" "}
          <span className="text-primary cursor-pointer hover:font-bold">
            {" "}
            Reset Password
          </span>{" "}
        </p>
        <BigButton
          disabled={loading}
          onClick={signin}
          styles="w-full h-max py-4"
        >
          {" "}
          {loading ? "verifying" : "VERIFY"}{" "}
        </BigButton>

        <Divider style="mt-4 mb-4" />

        <CoursesDropDown />
      </div>
      <div className="w-full">
      <ResultViewer/>
      </div>
    </div>
  );
}

export default CheckResult;
