import React from 'react'
import My from '../../../assets/My.jpg'

function Portofo() {
  return (
    <div class="min-h-screen mockup-window border bg-base-200 pb-10">
        <div className="md:container md:mx-auto px-6">
            <div className="flex justify-center mask mask-squircle">
                <img src={My} className='w-96 h-96' alt="" />
            </div>
            <div className="flex justify-start mt-10">
                <div class="grid gap-5 place-content-around ...">
                    <div className='mr-40'>
                        <p>Javascript fundamental</p>
                        <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                    </div>
                    <div className='mr-40'>
                        <p>Javascript fundamental</p>
                        <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                    </div>
                    <div className='mr-40'>
                        <p>Javascript fundamental</p>
                        <progress class="progress progress-primary w-56" value="100" max="100"></progress>
                    </div>
                    <div className='mr-40'>
                        <p>Javascript fundamental</p>
                        <progress class="progress progress-primary w-56" value="100" max="100"></progress>
                    </div>
                    <div className='mr-40'>
                        <p>Javascript fundamental</p>
                        <progress class="progress progress-primary w-56" value="100" max="100"></progress>
                    </div>
                    <div className='mr-40'>
                        <p>Javascript fundamental</p>
                        <progress class="progress progress-primary w-56" value="100" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portofo