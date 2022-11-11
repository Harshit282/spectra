import React from 'react'
import Particle from '../Particle'
import './styles/Home.css'

function Home() {
  return (
      <div>
        <div className='home' id='Home'>
          <Particle />
          <div className='heading'>
            <h1>Spectra Labs</h1>
            <p>A Spectrum of Innovations</p>
            <div className='contract'>
              Copy Contract Address
            </div>
            <div className='buyNow'>
              Buy on PancakeSwap
            </div>
          </div>
          <div className='imageDiv'>
            {/* ---------------- */}
          </div>
        </div>
      </div>
    )
}

export default Home