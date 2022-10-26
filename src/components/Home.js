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
            <p>World's first cryptocurrency project providing digital marketing solutions & faciliteies 
              to all the the growing companies.</p>
          </div>
        </div>
      </div>
    )
}

export default Home