import React from 'react'
import { useNavigate } from 'react-router-dom'

function BtnPage({setNext, setLess}) {

  const navigate = useNavigate()

  return (
    <div className="btn-page flex justify-center mt-10">
        <button className='btn btn-primary mr-3' onClick={setLess}>&lt;</button>
        <button className='btn btn-primary mx-3' onClick={()=>navigate('/')}>Home</button>
        <button className='btn btn-primary ml-3' onClick={setNext}>&gt;</button>
    </div>
  )
}

export default BtnPage