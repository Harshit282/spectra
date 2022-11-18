import React from 'react'
import './styles/Exchanges.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Exchanges() {
  const Prevbtn = (props)=>{
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa-solid fa-chevron-left prevbtn"></i>
      </div>
    )
  }
  
  const Nextbtn = (props)=>{
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa-solid fa-chevron-right nextbtn"></i>
      </div>
    )
  }
  
  var settings = {
    autoplay : true,
    autoplaySpeed : 1000,
    initialSlide : 5,
    dots : false,
    infinite : true,
    dotsClass : 'slick-dots dots',
    prevArrow : <Prevbtn/>,
    nextArrow : <Nextbtn/>
  }
  return (
    <div className='exchanges' id='Exchanges'>
        <h1 className='revealTop'>Exchanges</h1>
      <Slider { ...settings }>
        <div className="h1 h">
          <div className="homecontent">
            <img src='./Images/binance.png' alt=''></img>
          </div>
        </div>
        <div className="h2 h">
          <div className="homecontent">
            <img src='./Images/wazirx.jpg' alt=''></img>
          </div>
        </div>
        <div className="h3 h">
          <div className="homecontent">
            <img src='./Images/cmc.png' alt=''></img>
          </div>
        </div>
        <div className="h4 h">
          <div className="homecontent">
            <img src='./Images/wazirx.jpg' alt=''></img>
          </div>
        </div>
        <div className="h5 h">
          <div className="homecontent">
          <img src='./Images/bitmart.png' alt=''></img>
          </div>  
        </div>
      </Slider>
    </div>
  )
}

export default Exchanges