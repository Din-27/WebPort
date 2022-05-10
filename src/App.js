import React, {useState} from "react";
import { Footer, Home, Login, Navbar, Stat, Avatar, Table} from "./components";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Rating from "./components/rating";

function AllContents() {

  const navigate = useNavigate()

  const [alertDai, setAlertDai] = useState(false)
  const [alertDai2, setAlertDai2] = useState(false)

  const handleLogin = () => {
    navigate('/login')
  }

  return (
  <div class="min-h-screen mockup-window border bg-base-200">
    <Navbar setAlert={setAlertDai} setAlert2={setAlertDai2}/>
    {alertDai && 
    <div class="alert alert-warning shadow-lg" onClick={()=>setAlertDai(false)}>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>New software update available.</span>
      </div>
    </div>}
    {alertDai2 && 
    <div class="alert shadow-lg" onClick={()=>setAlertDai2(false)}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>12 unread messages. Tap to see.</span>
      </div>
    </div>}
    <Home login={handleLogin}/>
    <div className="flex justify-center mb-10">
      <Avatar/>
    </div>
      <div className="flex justify-center mt-5 mb-5">
        <Rating/>
      </div>
    <div className="mb-10">
      <Table/>
    </div>
    <div className="flex justify-center mb-10">
      <Stat/>
    </div>
    <Footer/>
  </div>
  );
}

function App() {

  return (
  <Routes>
    <Route path='/' exact element={<AllContents/>}/>
    <Route path='/login' exact element={<Login/>}/>
  </Routes>
  );
}

export default App
