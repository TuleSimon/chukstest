import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from './components';
import { Loading } from './pages';
import ErrorPage from './pages/404/ErrorPage';
import { getUser } from "./features/chukstest/Chukstest";
import { useSelector } from 'react-redux';

function App() {
  const  LandingPage = React.lazy(() => import('./pages/landingpage/LandingPage'));
  const  ExamLanding = React.lazy(() => import('./pages/examlanding/ExamLanding'));
  const  StudentLogin = React.lazy(() => import('./pages/studentlogin/StudentLogin'));
  const  Examination = React.lazy(() => import('./pages/examination/Examination'));
  const  TimeUp = React.lazy(() => import('./pages/timeup/TimeUp'));
  const  ExamSuccess = React.lazy(() => import('./pages/examsuccess/ExamSuccess'));
  const  AlertDialog = React.lazy(() => import('./components/dialogs/AlertDialog'));
  const  CheckResults = React.lazy(() => import('./pages/checkresult/CheckResult'));

  const user = useSelector(getUser)

  return (
    <div className="App">
      <Suspense fallback={<Container><Loading/></Container>}>
        <Routes>
          <Route path='/' exact element={<Container><LandingPage/></Container>}/>
          <Route path='login' exact element={<Container><StudentLogin/></Container>}/>
          <Route path='welcome' exact element={<Container><ExamLanding/></Container>}/>
          {user &&
          <Route path='examination' element={<Examination/>}>
            <Route path=':regno' exact element={<Examination/>}/>
            </Route>
          }
          <Route path='*' exact element={<Container> <ErrorPage/></Container>}/>
          <Route path='examover' exact element={<TimeUp/>}/>
          <Route path='examsuccess' exact element={<ExamSuccess/>}/>
          <Route path='checkresult' exact element={<Container> <CheckResults/></Container> }/>
        </Routes>
        <AlertDialog/>
      </Suspense>
    </div>
  );
}

export default App;
