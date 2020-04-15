
import React, { Component } from 'react';
import { faHtml5, faCss3, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';


class About extends Component {
    render() {
        return (
            <main className="about">
                <div className="about-con">
                    <section>
                        <h1>about me</h1>
                        <div className="about-me">
                            <div className="about-me-text">
                                <p className="about-me-intro">
                                    I'm a front end web developer based in Seoul, South Korea.
                                </p>
                                <p className="about-me-desc">
                                    I enjoy developing good websites for nice people.
                                    <br/>I believe good websites could give a good experience to millions of people.
                                    <br/>That's the goal of my life.
                                    <br/>When I'm not coding, running in park and listening music.
                                </p>
                            </div>
                            <div className="about-me-img">
                                <img src={process.env.PUBLIC_URL+'/images/me.png'} alt="profile"/>
                                <a href="javascript:alert('showing pdf!')" className="about-me-pdf">CV.pdf</a>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>What I can do</h1>
                        <div className="skill-wrap">
                            <div className="skill">
                                <div className="skill-title">
                                    <FontAwesomeIcon icon={faHtml5} size="2x"/>
                                    <div className="skill-name">HTML 5</div>
                                </div>
                                <div className="skill-bar">
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div style={{"background":"rgb(237, 85, 101)"}}></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <FontAwesomeIcon icon={faCss3} size="2x"/>
                                    <div className="skill-name">CSS 3</div>
                                </div>
                                <div className="skill-bar">
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div style={{"background":"rgb(233, 87, 63)"}}></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <FontAwesomeIcon icon={faJs} size="2x"/>
                                    <div className="skill-name">JAVASCRIPT</div>
                                </div>
                                <div className="skill-bar">
                                    <div style={{"background":"rgb(246, 187, 66)"}}></div>
                                    <div style={{"background":"rgb(246, 187, 66)"}}></div>
                                    <div style={{"background":"rgb(246, 187, 66)"}}></div>
                                    <div style={{"background":"rgb(246, 187, 66)"}}></div>
                                    <div style={{"background":"rgb(246, 187, 66)"}}></div>
                                    <div style={{"background":"rgb(246, 187, 66)"}}></div>
                                    <div style={{"background":"rgb(246, 187, 66)"}}></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <img src={process.env.PUBLIC_URL+'/images/jquery-vertical.svg'} alt="profile" style={{"width":"33px"}}/>
                                    <div className="skill-name">jQuery</div>
                                </div>
                                <div className="skill-bar">
                                    <div style={{"background":"#0868AB"}}></div>
                                    <div style={{"background":"#0868AB"}}></div>
                                    <div style={{"background":"#0868AB"}}></div>
                                    <div style={{"background":"#0868AB"}}></div>
                                    <div style={{"background":"#0868AB"}}></div>
                                    <div style={{"background":"#0868AB"}}></div>
                                    <div style={{"background":"#0868AB"}}></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <FontAwesomeIcon icon={faReact} size="2x"/>
                                    <div className="skill-name">REACT</div>
                                </div>
                                <div className="skill-bar">
                                    <div style={{"background":"rgb(72, 207, 248)"}}></div>
                                    <div style={{"background":"rgb(72, 207, 248)"}}></div>
                                    <div style={{"background":"rgb(72, 207, 248)"}}></div>
                                    <div style={{"background":"rgb(72, 207, 248)"}}></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <p>Iheanyi Ekechukwu is a NYC-based software engineer, currently working at GitHub.</p> */}
                </div>
            </main>
        );
    }
}

export default About;