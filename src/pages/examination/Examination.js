import { ArrowForward } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { MdArrowLeft, MdArrowRight, MdComputer, MdTimer } from 'react-icons/md'
import { RiCheckboxCircleLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { BigButton } from '../../components'
import { getIndex, getUser, setDialog,increment, resetScore, incrementScore, reset, setOption, getOption, getScore } from '../../features/chukstest/Chukstest'
import Countdown from 'react-countdown';
import { getQuestion, publishResult, submitResult } from '../../services'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Examination() {

  const user = useSelector(getUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const index = useSelector(getIndex)
  const [questions, setQuestions] = useState({})
  const selectedOption = useSelector(getOption)
  
  useEffect(() => {
      getQuestion(user.department.examcourse.id).then((datas) => {
          setQuestions(datas.course.questions)
      })
  
      dispatch(resetScore())
      dispatch(reset())
      dispatch(setDialog({
          "open":true,
          "message":".",
          "error":false,
          "title":"THIS IS A TEST",
          "instruction":true,
          "alert":true,
      }))
    return () => {
      
    }
  }, [])
  
  
 const select = (option) => {
    return dispatch(setOption(option))
 }

const increments = () => {
 if(selectedOption.correct===true){
   incrementScores()
 }
 if(index+1==questions.length){
  submitResult()
 }
 else
 dispatch(increment())
}

const scores = useSelector(getScore)

const [loading,setLoading] = useState(false)

const submitResults = () => {
  setLoading(true)
  submitResult( 
   scores,
   user.matno,
   user.department.examcourse.id
 ).then(()=>{
   publishResult(user.matno,).then(() => {
  navigate("/examsuccess")     
  setLoading(false)
   }).catch((err) => {
    console.log(err.name)
    setLoading(false)
  })
 }).catch((err) => {
   console.log(err)
   setLoading(false)
 })
}



const incrementScores = () => (
  dispatch(incrementScore())
)


const Appbar = () =>(
  <div className={`flex flex-col overflow-hidden mt-6 
  md:flex-row place-items-center md:place-content-between place-content-center`}>
    <div className='flex flex-row md:place-content-start  place-content-center '>
    {/* Header Text and Logo */}
      <h1 className='text-primary font-bold text-xl rounded-xl flex place-items-center'>
        <MdComputer className='h-10/12 mr-2 text-primary'/> ChuksTest</h1>
    </div>

    <div className='flex flex-row md:gap-4 gap-2 mt-1 md:mt-0 '>
      <img src={user.profilePicture.url}
          className="rounded-full h-6 w-6" alt="user image"/> <p> {user.name} </p> || <p> {user.matno}</p>
    </div>
  </div>
)

const Option = ({option}) => {
  return  <button onClick={e => select(option)} 
  className={`bg-primary ${selectedOption.value===option.value && "bg-secondary"}
   p-2 px-4 font-bold text-xl text-white hover:bg-secondary w-full basis-1/3 grow`}> 
       {option.value}  
  </button>
}
const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    navigate("/examover")
    return <h1>  OVER</h1>
  } else {
    // Render a countdown
    return <div className="rounded-full flex flex-col p-2 place-items-center 
    bg-primary fixed  top-6 right-2 text-xl font-black text-white">
         <MdTimer/> <span className=""> {minutes} : {seconds} </span> </div>;
  }
};

const Countdowns = () => <Countdown
  date={new Date(user.department.examtime).getTime()+ 3600000} renderer={renderer}/>
  const MemoCountdown = React.memo(Countdowns);

    return (
    <div className="h-screen w-screen flex flex-col container gap-4 relative">
      <MemoCountdown/>
        <div>
            <Appbar/>
        </div>
        <div className="flex flex-col place-items-start bg-white grow p-4 drop-shadow-2xl shadow-gray-200 rounded shadow-xl">
            <h1 className="font-bold text-primary text-xl"> ANSWER ALL QUESTIONS </h1>
            <div className="h-full m-2 flex flex-col w-full"> 
                <p> Question {index+1} of {questions?.length}</p>
                <div className="h-full m-2 grow flex flex-col place-content-center"> 
                <p className="font-bold text-xl m-2"> 
                  {questions[index]?.questionBody}
                </p>
                </div>
               <div className="flex flex-col md:flex-row flex-wrap gap-4 place-content-center w-full">
               {questions[index]?.options.map((data, index) => (
                    <Option key={index} option={data}/>
               ))}
                </div>
                 <div>
            </div>
            </div>
        </div>
        <div className="flex md:flex-row flex-col place-content-between w-full gap-4 mb-2">
        <div className="flex gap-2 grow">
            <BigButton onClick={increments} styles="flex place-items-center place-content-center h-max p-2 md:basis-1 basis-1/2">
               NEXT <MdArrowRight/> </BigButton> 
            </div>
            <BigButton disabled={loading} onClick={submitResults} styles="flex place-items-center place-content-center gap-2 h-max p-2">
                 <RiCheckboxCircleLine/> {loading?"Submitting":"SUBMIT"} </BigButton>
        </div>
    </div>
  )
}

export default Examination