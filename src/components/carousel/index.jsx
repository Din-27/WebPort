import React from 'react'
import a from '../../assets/birth.jpeg'
import b from '../../assets/WhatsApp Image 2022-01-22 at 19.42.36.jpeg'
import c from '../../assets/WhatsApp Image 2022-01-22 at 19.42.37 (2).jpeg'
import d from '../../assets/WhatsApp Image 2022-01-22 at 19.42.37.jpeg'
import e from '../../assets/WhatsApp Image 2022-01-22 at 19.42.38 (1).jpeg'

function Carousel() {
  return (
    <div class="carousel rounded-box w-96">
        <div class="carousel-item w-1/2">
            <img src={a} class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src={b} class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src={c} class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src={d} class="w-full" />
        </div> 
        <div class="carousel-item w-1/2">
            <img src={e} class="w-full" />
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