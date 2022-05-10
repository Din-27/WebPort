import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../footer'

function Login() {

  const navigate = useNavigate()

  const hanldeHome = () => {
    navigate('/')
  }

  return (
      <div class="min-h-screen mockup-window border bg-base-200">
        <div className="flex justify-end" onClick={hanldeHome}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}} class="stroke-current btn btn-ghost flex-shrink-0 h-30 w-30 mr-20" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div className="content mb-40 mt-20">
          <div className="flex text-center justify-center underline">
            <p className='text-3xl underline decoration-sky-500'>Login To Access Your Portofolio</p>
          </div>
          <div className='flex-row justify-center flex'>
            <div className='mt-10'>
              <div className='flex flex-col'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Your @email" class="input input-bordered input-primary w-80" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Your password" class="input input-bordered input-primary w-80" />
              </div>
              <button className='btn btn-primary w-80 mt-5'>Login</button>
              <p className='flex justify-center'>have account?<a href='' class="link link-primary">click here</a></p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Login