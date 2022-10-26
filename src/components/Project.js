import React from 'react'
import './styles/Project.css'

function Project() {
  return (
    <div className='project' id='Project'>
        <h1>Project Info</h1> 
        <div className='projectContainer'>
          <div className='projectSales cards'>
            <h2 className='headings'>SALES</h2>
            <p>Launch Date - 30th October</p>
            <p>Seed Sale - 50BNB (Advisors and Influencers)</p>
            <p>Private Sale - 100BNB (100% Marketing)</p>
            <p>Fair Launch PinkSale - (Audit KYC Safu)</p>
          </div>

          <div className='projectTokenomics cards'>
            <h2 className='headings'>Tokenomics</h2>
            <p>Total Supply - 500 Million</p>
            <p>LP - 60%</p>
            <p>Marketing - 20%</p>
            <p>Development - 20%</p>
          </div>

          <div className='projectTaxes cards'>
            <h2 className='headings'>Taxes</h2>
            <p>Tax - 6% (in & out)</p>
            <p>Tax Distribution - </p>
            <p>2% LP</p>
            <p>2% Marketing</p>
            <p>2% Maintainance</p>
          </div>
        </div>

        <div className='projectContainerContinued'>
          <div className='projectCoreAdvisory cards'>
            <h2 className='headings'>Core Advisory</h2>
            <p><a href='https://twitter.com/LaCryptoMonkey'>LaCryptoMonkey</a></p>
            <p><a href='https://twitter.com/ShibaInuHolder'>ShibaInuHolder</a></p>
            <p><a href='https://twitter.com/unclebobcrypto'>unclebobcrypto</a></p>
            <p>Advisory Board and partners in talks,
              but they will be huge and will be announced 
              before presale.
            </p>
          </div>

          <div className='projectMoreInfo cards'>
            <h2 className='headings'>More Info</h2>
            <p>We will be running the seed round first for Influencers / Advisors in the space, this will be a 50 BNB sale, with a 
              fixed price of 2BNB per contribution. 25% Advantage.
            </p>
            <p>Following this we will be raising a small private sale of 100BNB to help fund the pre launch Marketing and Development.
              This will be 1BNB minumum and 2BNB maximum per contribution (one contribution only). 10% Advantage.
            </p>
          </div>

        </div>

    </div>
  )
}

export default Project