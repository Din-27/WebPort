import React from 'react'
import Footer from '../footer'

function Login() {
  return (
      <div class="min-h-screen mockup-window border bg-base-200">
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