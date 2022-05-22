import React, {useEffect, useState} from 'react'
import My from '../../../assets/My.jpg'
import BtnPage from '../../button-page'
import BgLife from '../background-life'



// const dataSaya = [
//     'Javascript',
//     'PostgreeSQL',
//     'Node JS',
//     'Express JS',
//     'React JS',
//     'React Native',
//     'MySQL',
//     'Git',
//     'Bootstrap 5',
//     'HTML',
//     'CSS Vanilla',
//     'Corel Draw X7',
//     'Ms Office',
//     'Teknisi Telepon Seluler'
// ]

function Portofo() {
    
    const [next, setNext] = useState(false)

  return (
    <div class="min-h-screen mockup-window py-8 px-6 border bg-base-200 pb-10">
        <div className="sm:container sm:mx-auto">
            <div className="sm:flex justify-center mt-20 sm:mt-10">
                <div className="flex justify-center mask mask-squircle">
                    <img src={My} className='w-60 h-60 sm:w-96 sm:h-96' alt="" />
                </div>
                <div class="hero-content text-center">
                    <div class="w-lg sm:max-w-sm md:max-wd-md">
                        <h1 class="text-2xl sm:text-5xl py-6 font-bold">Hello World!</h1>
                        <p class="sm:py-6">
                        My Name is Herdiyana Firmansyah, and I'am a Fullstack Developer who loves programming
                        especially JavaScript stacks and moderncomputers
                        technology. have a lot of experience in
                        programming since getting to know coding in
                        vocational high school. I'm currently attending
                        DumbWays online bootcamp in 6 weeks
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center sm:mt-10 mb-5">
                {next ? <p className='title-progress font-bold text-2xl'>My Education history :</p> :
                <p className='title-progress font-bold text-2xl'>My Knowledge percentage :</p>}
            </div>
            {next ? <BgLife/> :
            <div className="flex justify-center sm:mt-10">
                <div class="grid font-bold sm:grid-flow-col sm:grid-rows-4 sm:gap-2 ml-8 place-content-around">
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>Javascript</p>
                        <progress class="progress progress-primary hover:progress-accent w-56" value="90" max="100"></progress><span className='cursor-pointer'>90%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>React Js</p>
                        <progress class="progress progress-primary hover:progress-success w-56" value="99" max="100"></progress><span className='cursor-pointer'>95%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>React Native</p>
                        <progress class="progress progress-primary hover:progress-warning w-56" value="81" max="100"></progress><span className='cursor-pointer'>81%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>Node JS</p>
                        <progress class="progress progress-primary hover:progress-accent w-56" value="95" max="100"></progress><span className='cursor-pointer'>90%</span>
                    </div>
                    <div className='mr-20' id='viewMore'>
                        <p className='cursor-pointer hover:text-lime-300'>Bootstrap 5</p>
                        <progress class="progress progress-primary hover:progress-accent w-56" value="92" max="100"></progress><span className='cursor-pointer'>90%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>Tailwind</p>
                        <progress class="progress progress-primary hover:progress-warning w-56" value="75" max="100"></progress><span className='cursor-pointer'>75%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>HTML</p>
                        <progress class="progress progress-primary hover:progress-success w-56" value="97" max="100"></progress><span className='cursor-pointer'>97%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>CSS</p>
                        <progress class="progress progress-primary hover:progress-success w-56" value="95" max="100"></progress><span className='cursor-pointer'>95%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>PostgreeSQL</p>
                        <progress class="progress progress-primary hover:progress-warning w-56" value="79" max="100"></progress><span className='cursor-pointer'>79%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>MySQL</p>
                        <progress class="progress progress-primary hover:progress-success w-56" value="97" max="100"></progress><span className='cursor-pointer'>97%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>MongooDB</p>
                        <progress class="progress progress-primary hover:progress-secondary w-56" value="65" max="100"></progress><span className='cursor-pointer'>65%</span>
                    </div>
                    <div className='mr-20'>
                        <p className='cursor-pointer hover:text-lime-300'>Corel Draw X7</p>
                        <progress class="progress progress-primary hover:progress-warning w-56" value="80" max="100"></progress><span className='cursor-pointer'>80%</span>
                    </div>
                </div>
            </div>}
            <BtnPage setNext={()=>setNext(true)} setLess={()=>setNext(false)}/>
        </div>
    </div>
  )
}

export default Portofo