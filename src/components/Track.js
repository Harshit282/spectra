import React from "react";
import "./styles/Track.css";

function Track() {
  return (
    <div className="track" id="Track">
      <h1 className="revealTop">Track $Spectra</h1>
      <div className="trackTokenDiv">
        <a href="#">
          <div className="trackBSCScan cards revealLeft">BSC Scan</div>
        </a>
        <a href="#">
          <div className="trackCMC cards revealTop">Coin Market Cap</div>
        </a>
        <a href="#">
          <div className="trackCGK cards revealRight">CoinGecko</div>
        </a>
      </div>

      <div className="trackTokenDivContinued cards revealTop">
        <div className="trackCirculatingToken">
          <h2>Circulating Supply</h2>
          <p>500 Million</p>
        </div>
        <div className="trackDeveloperHoldings">
          <h2>Developer Holdings</h2>
          <p>30%</p>
        </div>
      </div>
    </div>
  );
}

export default Track;
