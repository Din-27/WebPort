import React from 'react'

function BtnPage({setNext, setLess}) {
  return (
    <div className="btn-page flex justify-center mt-10">
        <button className='btn btn-primary mr-3' onClick={setLess}>&lt;</button>
        <button className='btn btn-primary ml-3' onClick={setNext}>&gt;</button>
    </div>
  )
}

export default BtnPage