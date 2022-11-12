import React from 'react'
import './styles/Project.css'

function Project() {
  return (
    <div className='project' id='Project'>
        <h1>Project Info</h1> 

        <div className='cardsContainer'>

          <div class="container">
            <div class="card">
              <div class="front">
                <div class="content">
                  <img src="./Images/Sales.svg" alt=''/>
                  <h2>SALES</h2>
                </div>
              </div>
              <div class="back">
                <div class="content">
                <p>Launch Date - 30th October</p>
                <p>Seed Sale - 50BNB (Advisors and Influencers)</p>
                <p>Private Sale - 100BNB (100% Marketing)</p>
                <p>Fair Launch PinkSale - (Audit KYC Safu)</p>
                </div>
              </div>
            </div>
          </div>


        <div class="container">
          <div class="card">
            <div class="front">
              <div class="content">
                <img src="./Images/Sales.svg" alt=''/>
                <h2>TOKENOMICS</h2>
              </div>
            </div>
            <div class="back">
              <div class="content">
                <p>Total Supply - 500 Million</p>
                <p>LP - 60%</p>
                <p>Marketing - 20%</p>
                <p>Development - 20%</p>
              </div>
            </div>
          </div>
        </div>
        
        
        <div class="container">
          <div class="card">
            <div class="front">
              <div class="content">
                <img src="./Images/Sales.svg" alt=''/>
                <h2>TAXES</h2>
              </div>
            </div>
            <div class="back">
              <div class="content">
                <p>Tax - 6% (in & out)</p>
                <p>Tax Distribution - </p>
                <p>2% LP</p>
                <p>2% Marketing</p>
                <p>2% Maintainance</p>
              </div>
            </div>
          </div>
        </div>


        <div class="container">
        <div class="card">
          <div class="front">
            <div class="content">
              <img src="./Images/Sales.svg" alt=''/>
              <h2>CORE ADVISORY</h2>
            </div>
          </div>
          <div class="back">
            <div class="content">
              <p><a href='https://twitter.com/LaCryptoMonkey'>LaCryptoMonkey</a></p>
              <p><a href='https://twitter.com/ShibaInuHolder'>ShibaInuHolder</a></p>
              <p><a href='https://twitter.com/unclebobcrypto'>unclebobcrypto</a></p>
              <p>Advisory Board and partners in talks,
                but they will be huge and will be announced 
                before presale.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div class="container">
        <div class="card">
          <div class="front">
            <div class="content">
              <img src="./Images/Sales.svg" alt=''/>
              <h2>MORE INFO</h2>
            </div>
          </div>
          <div class="back">
            <div class="content">
              <p>We will be running the seed round first for Influencers / Advisors in the space, this will be a 50 BNB sale, with a 
                fixed price of 2BNB per contribution. 25% Advantage.
              </p>
              <p>Following this we will be raising a small private sale of 100BNB to help fund the pre launch Marketing and Development.
                This will be 1BNB minumum and 2BNB maximum per contribution (one contribution only). 10% Advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    
      </div>

    </div>
  )
}

export default Project