import React, {useState} from "react";
import { Footer, Home, Navbar, Stat, Avatar, Table, BgLife, Portofo, Project, Contact} from "./components";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Rating from "./components/rating";
import swal from "sweetalert";


function AllContents({handleStart}) {

  return (
  <div class="min-h-screen mockup-window border bg-base-200">
    <Navbar 
    setAlert={()=>swal("Fitur Unknown!", "Clicked the button!", "warning")} 
    setAlert2={()=>swal("Fitur Unknown!", "Clicked the button!", "warning")}/>
    <div className="w-full">
      <Home start={handleStart}/>
    </div>
    <div className="flex justify-center mb-10">
      <Avatar/>
    </div>
    <div className="mb-5">
      <Table/>
    </div>
      <div className="flex justify-center mb-10">
        <Rating/>
      </div>
    <div className="flex justify-center mb-10">
      <Stat/>
    </div>
    <Footer/>
  </div>
  );
}

function App() {


  const navigate = useNavigate()

  const handleNext = () => {
    navigate('/education')
  }

  const handleLess = () => {
    navigate('/portofolio')
  }

  return (

    <Routes>
      <Route path='/' exact element={<AllContents handleStart={handleLess}/>}/>
      <Route path='/portofolio' exact element={<Portofo handleNext={handleNext} handleLess={handleLess}/>}/>
      <Route path='/education' exact element={<BgLife/>}/>
      <Route path='/project' exact element={<Project/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
    </Routes>
  );
}

export default App
