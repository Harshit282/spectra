import React from 'react';
import './styles/Roadmap.css';

function Roadmap1() {
    return (
        <div className='roadmap' id='Roadmap'>
            <h1 className='revealTop'>Roadmap</h1>
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                <ul className="timeline timeline-centered">
                    <li className="timeline-item period revealTop">
                        <div className="timeline-info"></div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h2 className="timeline-title">2022</h2>
                        </div>
                    </li>
                    <li></li>
                    <li className="timeline-item revealRight">
                        <div className="timeline-info">
                            <span>2023-Q1</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Phase 1</h3>
                            <p><br />
                            Private presale <br /><br />
                            Marketing campaigns <br /><br />
                            Influencers <br /><br />
                            Huge social media boost <br /><br />
                            3000 telegram members <br /><br />
                            Presale 200BNB HC <br /><br />
                            PancakeSwap Launch</p>
                        </div>
                    </li>
                    <li className="timeline-item revealLeft">
                        <div className="timeline-info">
                            <span>2023-Q2</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Phase 2</h3>
                            <p><br/>
                            CMC LISTING <br /><br />
                            Aggressive marketing <br /><br />
                            CG LISTING <br /><br />
                            Trustwallet logo <br /><br />
                            YouTube promotions <br /><br />
                            2000 Holders of Spectra Labs <br /><br />
                            Alternative Exchange Listings <br /><br />
                            </p>
                        </div>
                    </li>
                    <li className="timeline-item revealRight">
                        <div className="timeline-info">
                            <span>2023-Q3</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Phase 3</h3>
                            <p><br />
                            Community contests and Giveaways <br /><br />
                            Influencer promotions <br /><br />
                            Billboard advertisements <br /><br />
                            High budget marketing campaigns <br /><br />
                            Merchandising <br /><br />
                            Collaborations within the BSC <br /><br />
                            5000 Holders of Spectra labs <br /><br />
                            </p>
                        </div>
                    </li>
                    {/* <li className="timeline-item revealLeft">
                        <div className="timeline-info">
                            <span>2022-Q4</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Event Title</h3>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                eu pede mollis pretium.Pellentesque ut neque.</p>
                        </div>
                    </li>
                    <li className="timeline-item period revealLeft">
                        <div className="timeline-info"></div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h2 className="timeline-title">2023</h2>
                        </div>
                    </li>
                    <li></li>
                    <li className="timeline-item revealRight">
                        <div className="timeline-info">
                            <span>2023-Q1</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Event Title</h3>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                eu pede mollis pretium.Pellentesque ut neque.</p>
                        </div>
                    </li>
                    <li className="timeline-item revealLeft">
                        <div className="timeline-info">
                            <span>2023-Q2</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Event Title</h3>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                eu pede mollis pretium.Pellentesque ut neque.</p>
                        </div>
                    </li>
                    <li className="timeline-item revealRight">
                        <div className="timeline-info">
                            <span>2023-Q3</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Event Title</h3>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                eu pede mollis pretium.Pellentesque ut neque.</p>
                        </div>
                    </li>
                    <li className="timeline-item revealLeft">
                        <div className="timeline-info">
                            <span>2023-Q4</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Event Title</h3>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                eu pede mollis pretium.Pellentesque ut neque.</p>
                        </div>
                    </li>
                    <li className="timeline-item period revealLeft">
                        <div className="timeline-info"></div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h2 className="timeline-title">2024</h2>
                        </div>
                    </li>
                    <li></li>
                    <li className="timeline-item revealRight">
                        <div className="timeline-info">
                            <span>2024-Q1</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Event Title</h3>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                eu pede mollis pretium.Pellentesque ut neque.</p>
                        </div>
                    </li>
                    <li className="timeline-item revealLeft">
                        <div className="timeline-info">
                            <span>2024-Q2</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Event Title</h3>
                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                eu pede mollis pretium.Pellentesque ut neque.</p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Roadmap1