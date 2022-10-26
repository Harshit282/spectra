import React from 'react'
import './styles/Track.css'

function Track() {
  return (
    <div className='track' id="Track">
        <h1>Track $Spectra</h1>
        <div className='trackTokenDiv'>
            <div className='trackBSCScan cards'>
                <a href='#'>BSC Scan</a>    
            </div>
            <div className='trackCMC cards'>
                <a href='#'>Coin Market Cap</a>
            </div>
            <div className='trackCGK cards'>
                <a href='#'>CoinGecko</a>
            </div>
        </div>

        <div className='trackTokenDivContinued cards'>
            <div className='trackCirculatingToken'>
                <h2>Circulating Supply</h2>
                <p>500 Million</p>
            </div>
            <div className='trackDeveloperHoldings'>
                <h2>Developer Holdings</h2>
                <p>30%</p>
            </div>
        </div>
    </div>
  )
}

export default Track