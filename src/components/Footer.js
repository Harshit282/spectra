import React from 'react'
import './styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='topFooter'>
            <div className='leftFooter'>
                <div className='logocontent'>
                    <div className='logo'>
                        <img src='./Images/logo.png' alt=''></img>
                    </div>
                    <div className='logoName'>
                        <h2>Spectra Labs</h2>
                        <p>A Spectrum of Innovations</p>
                    </div>
                </div>
            </div>
            <p>Extremely active community that loves our mission! Our telegram channel is filled with community moderators 24/7 that would love to help you. Do not trust random messages of people claiming to be “support” or ever give out your wallet info to anyone.</p>
        </div>
        <div className='socials'>
                    <a href='https://www.facebook.com'><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://www.telegram.com'><i class="fa-brands fa-telegram"></i></a>
                    <a href='https://www.instagram.com'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.youtube.com'><i class="fa-brands fa-youtube"></i></a>
                    <a href='https://www.twitter.com'><i class="fa-brands fa-twitter"></i></a>
        </div>
        <hr />
        <p>	&#169; Spectra Labs all rights reserved.</p>
    </div>  
  )
}

export default Footer