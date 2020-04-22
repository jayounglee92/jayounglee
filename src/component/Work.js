
import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
    render() {
        return (
            <main className="work">
                <div className="work-con">
                    <ul className="work-list">
                        <li className="work-list__item">
                           <div class="work-list__screen">
                            <video poster="https://nykim.net/images/posters/poster-2.png" playsinline="" autoplay="" loop="" muted="">
                                <source data-src="https://nykim.net/videos/video-design.mp4" type="video/mp4" src="https://nykim.net/videos/video-design.mp4"/>
                                    (앗, 비디오가 잘 나오지 않는 모양이에요. 다른 브라우저로 접속해보시겠어요?)
                                </video>
                            </div> 
                            <div class="work-list__text">
                                <strong className="work-list__title">Mobiconnect API Index</strong>
                                <a className="work-list__gotosite" href="https://www.mobiconnect.co.kr/api/" target="_blank" rel="noopener noreferrer" title="Go to Site">Go to Site</a>
                                <p className="work-list__desc">
                                    Site providing API key for an international marketplace platform where global mobile traffic all around the world comes together.<br/>
                                </p>
                                <div className="work-list__ability">
                                    <span># HTM</span>
                                    <span># CSS</span>
                                    <span># jQuery</span><br/>
                                    <span># BootStrap</span>
                                    <span># highlight.js</span><br/>
                                    <span># GitLab</span>
                                    <span># Netlify</span>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <nav class="index-navigation" role="navigation">
                    <a class="index-nav-link index-all-link link-next-up" href="/" data-ajax-loader="ajax-loader-binded">All</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/luscious" data-ajax-loader="ajax-loader-binded">Luscious</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/cisco" data-ajax-loader="ajax-loader-binded">CISCO</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/demo-reel" data-ajax-loader="ajax-loader-binded">Demo Reel</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/wsjfoe" data-ajax-loader="ajax-loader-binded">WSJ-Future of  Everything Festival</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/tag" data-ajax-loader="ajax-loader-binded">The Wall Street Journal-Original Stories</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/peace-1" data-ajax-loader="ajax-loader-binded">Peace</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/culture-shock" data-ajax-loader="ajax-loader-binded">Cultureshock - Show Package</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/taaab" data-ajax-loader="ajax-loader-binded">Taaab - Explainer Video</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/hearst" data-ajax-loader="ajax-loader-binded">Hearst Magazine Snapchat</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/rain-in-new-york-1" data-ajax-loader="ajax-loader-binded">Rain in New York</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/sunday-mood-1" data-ajax-loader="ajax-loader-binded">Sunday Mood</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/cat" data-ajax-loader="ajax-loader-binded">CAT</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/nri" data-ajax-loader="ajax-loader-binded">NRI</a>
                    <a class="index-nav-link project-collection index-page-transition-link" href="/growing-up-super-model" data-ajax-loader="ajax-loader-binded">Growing Up Supermodel - Main Title</a>
                    <a class="index-nav-link project-collection active-link index-page-transition-link" href="/tdg-logo-animation" data-ajax-loader="ajax-loader-binded">TDG Logo Animation</a>
                </nav> */}
                {/* <div className="work-con">
                    <section>
                        <h2>REAL WORK</h2>
                        <ul className="work-list">
                            <li>
                                
                                    <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>
                                    <a href="#">
                                    <strong>mobiconnect</strong>
                                    </a>
                            </li>
                            <li>
                            <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                <a href="#">
                                    <strong>mobiconnect-api-site</strong>
                                </a>
                            </li>
                            <li>
                            <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                <a href="#">
                                    <strong>mobidays-admin-borad</strong>
                                </a>
                            </li>
                        </ul>
                        </section>
                        <section>
                            <h2>PERSONAL WORK</h2>
                            <ul className="work-list">
                                <li>                                    <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                    <a href="#">
                                        <strong>Tate</strong>
                                        </a>
                                </li>
                                <li>                                    <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                    <a href="#">
                                        <strong>Muisic Tates</strong>
                                    </a>
                                </li>
                                <li>                                    <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                    <a href="#">
                                        <strong>kakao chat app</strong>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2>ANIMATION WORK</h2>
                            <ul className="work-list">
                                <li>                                    <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                    <a href="#">
                                        <strong>Tate</strong>
                                        </a>
                                </li>
                                <li>                                    <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                    <a href="#">
                                        <strong>Muisic Tates</strong>
                                    </a>
                                </li>
                                <li>                                    <img src={process.env.PUBLIC_URL+'/images/work01.png'} alt="profile"/>

                                    <a href="#">
                                        <strong>kakao chat app</strong>
                                    </a>
                                </li>
                            </ul>
                        </section>
                </div> */}
            </main>
        );
    }
}

export default Work;