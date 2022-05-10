import React from 'react'
import b from '../../assets/MyCV(New)_page-0002.jpg'
import c from '../../assets/MyCV(New)_page-0003.jpg'
import d from '../../assets/MyCV(New)_page-0004.jpg'
import e from '../../assets/MyCV(New)_page-0005.jpg'

function Carousel() {
  return (
    <div class="carousel rounded-box w-full">
        <div class="carousel-item w-1/2">
            <img src={b} class="w-full" alt='' />
        </div> 
        <div class="carousel-item w-1/2">
            <img src={c} class="w-full" alt='' />
        </div> 
        <div class="carousel-item w-1/2">
            <img src={d} class="w-full" alt='' />
        </div> 
        <div class="carousel-item w-1/2">
            <img src={e} class="w-full" alt='' />
        </div> 
        {/* <div class="carousel-item w-1/2">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" class="w-full" />
        </div> */}
    </div>
  )
}

export default Carousel