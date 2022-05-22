import React from 'react'
import logoDw from '../../../assets/logo.png'

function BgLife() {
  return (
    <div className="flex justify-center sm:mt-10">
        <div class="grid font-bold sm:grid-cols-3 justify-around sm:gap-2 ml-8 place-content-around">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'><img src="https://foto.data.kemdikbud.go.id/getImage/20233792/4.jpg" className='w-40 h-40' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">SDN Bunter 1</h2>
                    <p>2008 - 2014</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/20b75410-2cf5-e011-af46-7d52b6365df1" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mS_k1qJveYb6mqmH2ZSftFd1rFURcIC9w4y9ysntfQ&s=36" className='w-40 h-40' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">MTs YASTA BUNTER</h2>
                    <p>2014 - 2017</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://referensi.data.kemdikbud.go.id/tabs.php?npsn=20278957" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-white'><img src="https://static.schoolmedia.id/assets/socmed/NI/photo/profil-smancimanggung.jpeg" className='w-25 h-40' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">SMAN CIMANGGUNG</h2>
                    <p>IPA BIOLOGY | 2017 - 2021</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://smancimanggung.sch.id/" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-white h-40'><img src="https://sipedo.sumedangkab.go.id/assets/template/img/sipedo.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">BLK SUMEDANG</h2>
                    <p>Cell Phone Technician | Jun 2021 - Jul 2021</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://sipedo.sumedangkab.go.id/" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-white w-full h-40'><img src={logoDw} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">BOOTCAMP DUMBWAYS</h2>
                    <p>Fullstack Developer | Des 2021 - Marc 2022</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://dumbways.id/" target='_blank'>View Profile</a></button>
                    </div>
                </div>
            </div> 
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
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
  )
}

export default BgLife