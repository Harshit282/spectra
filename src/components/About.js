/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles/About.css";

function About() {
    //  Up To Top Btn
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
          upToTop.classList.toggle("active", window.scrollY > 0)
      });
  return (
    <div className="about" id="About">
      <div className="mainAbout">
        <h1 className="revealTop">About Us</h1>
        <p className="revealTop">
          With a well known team on board, including notable twitter
          influencers, we believe with our huge network and contacts we can
          scale this very quickly to become a profitable and sustainable working
          model.
        </p>
      </div>
      <div className="firstInfo revealLeft">
        <h1>Spectra Seed Round Pitchdeck</h1>
        <p>
          Spectra labs is an Incubation and Marketing based project, having it's
          main token being 'SPECTRA' with a very clever buy back function.
          Launching on the Binance Smart Chain. Spectra LAbs will run marketing
          campaigns through all social medias and varrious proven sources for
          top projects, with all proceeds being used to make regular buybacks.
          Doing this we will be constantly spreading awareness for our own
          projectand also get new eyes on our project from any collaborations.
          Spectra labs already has a huge network of influencers and top notch
          marketing experts.
        </p>
      </div>
      <div className="firstInfo reverse revealRight">
        <p>
          When projects would see the effective marketing done by Spectra Labs
          and the good word spreads over the space, Spectra Labs would be doing
          marketing campaigns for top projects as well as the fairly new ones.
          Roughly 10% of the total marketing campaigns cost would go straight
          into buying Spectra. As the number of campaigns increase the buybacks
          would increase and hence driving the price of Spectra Up.
        </p>
        <h1>Buybacks Explained</h1>
      </div>
      <div className="firstInfo revealLeft">
        <h1>Why Choose Spectra Labs?</h1>
        <p>
          <ul>
            <li>
              The Spectra community would pitch it to projects in order to get
              more buybacks.
            </li>
            <li>Word of Mouth.</li>
            <li>Results of the Spectra Launch.</li>
            <li>Big Contacts of the core advisory.</li>
            <li>
              Spectra Labs having biggest influencer network over the whole
              space.
            </li>
          </ul>
        </p>
      </div>
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
