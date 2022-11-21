import React from "react";
import './styles/Roadmap.css';
import './styles/Roadmap.scss';

function Roadmap() {
    var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
window.addEventListener("scroll", callbackFunc);


    return (
        <div className="roadmap" id="Roadmap">
            <h1 className='revealTop roadmap_h1'>Roadmap</h1>
            <section class="timeline">
      <ul>
        <li>
          <div>
            <time>2022-Q1</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Laws of motion
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Newton</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1785</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Law of electrostatic attraction
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Coulomb</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1827</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Law of Electric Resistance
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>G.S Ohm</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1831</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Electromagnetic Induction
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Michael Faraday</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1867</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Dynamite
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Alfred Nobel</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1895</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                X Rays
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Roentgen</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1897</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Electron
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>J.J.Thomson</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1898</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Radium
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Madam Curie</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1900</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Quantum Theory
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Max Plank</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Principle of Relativity
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Albert Einstein</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Photo electric effect
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Albert Einstein</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1942</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Nuclear Reactor
              </p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Anrico Fermi</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
        {/* <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "linear-gradient(to right, rgb(241, 0, 241), #F9004D)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #F9004D" }}
            date="2022 - present"
            iconStyle={{ background: "linear-gradient(to right, rgb(241, 0, 241), #F9004D);", color: "#fff" }}
            //   icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
            </h4>
            <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            // icon={<StarIcon />}
            />
        </VerticalTimeline> */}
        </div>
    );
}

export default Roadmap;
