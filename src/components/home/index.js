import React from 'react'
import Carousel from '../carousel'


function Home({start}) {
  return (
    <div className='bg-base-200 pb-20 container-fluid'> 
      <div class="hero my-10">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <Carousel/>
          <div>
            <h1 class="text-5xl font-bold">Herdiyana Portofolio!</h1>
            <p class="py-6">
              I'am a Fullstack Developer who loves programming
                    especially JavaScript stacks and modern computers
                    technology. have a lot of experience in
                    programming since getting to know coding in
                    vocational high school. I'm currently attending
                    DumbWays online bootcamp in 6 weeks
            </p>
            <button class="btn btn-primary" onClick={start} >Get Started</button>
          </div>
        </div>
      </div>
        {/* <div class="hero my-20">
            <div class="hero-content text-center">
                <div class="max-w-2xl">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">
                    I'am a Fullstack Developer who loves programming
                    especially JavaScript stacks and modern computers
                    technology. have a lot of experience in
                    programming since getting to know coding in
                    vocational high school. I'm currently attending
                    DumbWays online bootcamp in 6 weeks
                    </p>
                    <button class="btn btn-primary" onClick={login}>Get Started</button>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Home