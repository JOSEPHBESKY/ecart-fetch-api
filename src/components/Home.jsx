import React from 'react'
import Products from './Products'
function Home() {
    return (
        <div className='hero'><div class="card text-bg-dark" border="0">
            <img src="/asset/bg.jpg" class="card-img" alt="Background" height="500px" />
            <div class="card-img-overlay d-flex flex-column
            justify-content-center">
               <div className='container'> <h5 class="card-title text-danger border-info display-3 fw-bolder mb-0">HUGE SALE %</h5>
               <p class="card-text text-dark lead fs-2">CHECK OUT ALL THE TRENZ</p></div>
            </div>
        </div>
        <Products/>
        </div>
    )
}

export default Home