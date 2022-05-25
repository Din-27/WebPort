import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoDw from '../../../assets/logo.png'
import gra from '../../../assets/edu.png'
import BtnPage from '../../button-page'


function BgLife() {

    const navigate = useNavigate()

    const handleNext2 =() => {
        navigate('/project')
        // swal("Page Unknown!", "Clicked the button!", "error");/
    }
    const handleLess2 =() => {
        navigate('/portofolio')
    }

  return (
    <div class="min-h-screen mockup-window py-8 px-6 border bg-base-200 pb-10">
    <div className="sm:container sm:mx-auto">
        <div className="sm:flex justify-center mt-20 sm:mt-10">
            <div className="flex justify-center">
                <img src={gra} className='w-80 h-80 mt-0 sm:w-80 sm:h-80' alt="" />
            </div>
            <div class="hero-content text-center mt-0">
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
        <p className='title-progress font-bold text-2xl'>My Background Education :</p>
    </div>
    <div className="flex justify-center sm:mt-10">
        <div class="grid font-bold grid-cols-1 sm:grid-cols-3 justify-center sm:gap-2 sm:ml-8 place-content-around">
            <div class="card card-compact w-80 my-5 sm:w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'><img src="data:image/jpeg;base64,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" className='w-40 h-40' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">SDN Bunter 1</h2>
                    <p>2008 - 2014</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/20b75410-2cf5-e011-af46-7d52b6365df1" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-80 my-5 sm:w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mS_k1qJveYb6mqmH2ZSftFd1rFURcIC9w4y9ysntfQ&s=36" className='w-40 h-40' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">MTs YASTA BUNTER</h2>
                    <p>2014 - 2017</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://referensi.data.kemdikbud.go.id/tabs.php?npsn=20278957" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-80 my-5 sm:w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'><img src="https://static.schoolmedia.id/assets/socmed/NI/photo/profil-smancimanggung.jpeg" className='w-25 h-40' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">SMAN CIMANGGUNG</h2>
                    <p>IPA BIOLOGY | 2017 - 2021</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://smancimanggung.sch.id/" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-80 my-5 sm:w-96 bg-base-100 shadow-xl">
                <figure className='bg-white h-40'><img src="https://sipedo.sumedangkab.go.id/assets/template/img/sipedo.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">BLK SUMEDANG</h2>
                    <p>Cell Phone Technician | Jun 2021 - Jul 2021</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://sipedo.sumedangkab.go.id/" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-80 my-5 sm:w-96 bg-base-100 shadow-xl">
                <figure className='bg-white w-full h-40'><img src={logoDw} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">BOOTCAMP DUMBWAYS</h2>
                    <p>Fullstack Developer | Des 2021 - Marc 2022</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://dumbways.id/" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div> 
            <div class="card card-compact w-80 my-5 sm:w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'><img src="https://alta.id/wp-content/uploads/2021/11/logo-alta.svg" className='w-40 h-40' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Altera Academy</h2>
                    <p>Flutter | 2022</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://smancimanggung.sch.id/" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <BtnPage setNext={handleNext2} setLess={handleLess2}/>
    </div>
</div>
  )
}

export default BgLife