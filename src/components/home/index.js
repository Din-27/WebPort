import React from 'react'
import Carousel from '../carousel'


function Home() {
  return (
    <div className='bg-base-200 pb-40'> 
        <div class="hero min-h-screen ">
            <div class="hero-content text-center">
                <div class="max-w-3xl">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi, nulla provident inventore quaerat culpa voluptate aliquam incidunt nisi atque alias ex suscipit eos aut obcaecati modi nihil rerum a. Voluptatem, consequuntur reprehenderit esse quia repellat reiciendis, ex dicta perspiciatis eaque dolor iure eum officia soluta qui, aliquid ratione? Ex, cupiditate illum enim sed esse facilis culpa ratione aut quae dolor quibusdam obcaecati corrupti soluta ullam doloribus voluptatum! Debitis maxime officia, facere, nesciunt, eligendi aut vitae in autem alias veritatis dolorem vero sit doloribus? Ducimus, ad ut! Vero sit, iusto recusandae doloribus nemo quibusdam asperiores eos culpa dolorem itaque repellat? Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
          <Carousel/>
        </div>
        <div className="flex text-center justify-center mt-20">
          <h1 className='font-bold decoration-red-800 underline'>SHIFT + SCROOL MOUSE FOR SEE CONTENT (WINDOWS)</h1>
        </div>
        <div className="flex justify-center">
          <h1 className='font-bold decoration-red-800 underline'>SWIPE LEFT (PHONE)</h1>
        </div>
    </div>
  )
}

export default Home