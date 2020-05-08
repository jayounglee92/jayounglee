
import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
    render() {

        function alertCanNotAccess(e) {
            e.preventDefault();
            alert('Sorry, Can not access this admin site. ;) you are going to get front site.');
            window.open("http://www.mobidays.com/career/#process", "_blank")
        }

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
                                <div className="work-list__header">
                                    <div className="work-list__header-title">
                                    <strong className="work-list__header-title-back">Mobiconnect API Index</strong>
                                    <strong className="work-list__header-title-front">Mobiconnect API Index</strong>
                                </div>
                                <a className="work-list__view-website" href="https://www.mobiconnect.co.kr/api/" target="_blank" rel="noopener noreferrer" title="View this Website">View this Website<aside><span>→</span></aside></a>
                                </div>
                                <p className="work-list__desc">
                                    Responsive Website providing API key for an international marketplace platform where global mobile traffic all around the world comes together.<br/>
                                </p>
                                <div className="work-list__ability">
                                    <span># HTML</span>
                                    <span># CSS</span>
                                    <span># jQuery</span>
                                    <span># BootStrap</span>
                                    <span># highlight.js</span>
                                </div>
                                
                            </div>
                        </li>
                        <li className="work-list__item">
                           <div class="work-list__screen">
                            <video poster="https://nykim.net/images/posters/poster-2.png" playsinline="" autoplay="" loop="" muted="">
                                <source data-src="https://nykim.net/videos/video-design.mp4" type="video/mp4" src="https://nykim.net/videos/video-design.mp4"/>
                                    (앗, 비디오가 잘 나오지 않는 모양이에요. 다른 브라우저로 접속해보시겠어요?)
                                </video>
                            </div> 
                            <div class="work-list__text">
                                <div className="work-list__header">
                                    <div className="work-list__header-title">
                                    <strong className="work-list__header-title-back">Recruitment Administrator : Mobidays</strong>
                                    <strong className="work-list__header-title-front">Recruitment Administrator : Mobidays</strong>
                                </div>
                                <a className="work-list__view-website" href="#" onClick={alertCanNotAccess} target="_blank" rel="noopener noreferrer" title="View this Website">View this Website<aside><span>→</span></aside></a>
                                </div>
                                <p className="work-list__desc">
                                    Simple Recruitment Admin Site
                                </p>
                                <div className="work-list__ability">
                                    <span># HTML</span>
                                    <span># CSS</span>
                                    <span># jQuery</span>
                                    <span># BootStrap</span>
                                    <span># PHP</span>
                                    <span># MySql</span>
                                    <span># list.js</span>
                                    <span># summernote.js</span>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                    <aside className="work-list__title" style={{left:'-25%',top:'10%'}}>RECENT WORK</aside>
                </div>
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
                                <div className="work-list__header">
                                    <div className="work-list__header-title">
                                    <strong className="work-list__header-title-back">Mobiconnect API Index</strong>
                                    <strong className="work-list__header-title-front">Mobiconnect API Index</strong>
                                </div>
                                <a className="work-list__view-website" href="https://www.mobiconnect.co.kr/api/" target="_blank" rel="noopener noreferrer" title="View this Website">View this Website<aside><span>→</span></aside></a>
                                </div>
                                <p className="work-list__desc">
                                    Responsive Website providing API key for an international marketplace platform where global mobile traffic all around the world comes together.<br/>
                                </p>
                                <div className="work-list__ability">
                                    <span># HTML</span>
                                    <span># CSS</span>
                                    <span># jQuery</span>
                                    <span># BootStrap</span>
                                    <span># highlight.js</span>
                                </div>
                                
                            </div>
                        </li>
                        <li className="work-list__item">
                           <div class="work-list__screen">
                            <video poster="https://nykim.net/images/posters/poster-2.png" playsinline="" autoplay="" loop="" muted="">
                                <source data-src="https://nykim.net/videos/video-design.mp4" type="video/mp4" src="https://nykim.net/videos/video-design.mp4"/>
                                    (앗, 비디오가 잘 나오지 않는 모양이에요. 다른 브라우저로 접속해보시겠어요?)
                                </video>
                            </div> 
                            <div class="work-list__text">
                                <div className="work-list__header">
                                    <div className="work-list__header-title">
                                    <strong className="work-list__header-title-back">Recruitment Administrator : Mobidays</strong>
                                    <strong className="work-list__header-title-front">Recruitment Administrator : Mobidays</strong>
                                </div>
                                <a className="work-list__view-website" href="#" onClick={alertCanNotAccess} target="_blank" rel="noopener noreferrer" title="View this Website">View this Website<aside><span>→</span></aside></a>
                                </div>
                                <p className="work-list__desc">
                                    Simple Recruitment Admin Site
                                </p>
                                <div className="work-list__ability">
                                    <span># HTML</span>
                                    <span># CSS</span>
                                    <span># jQuery</span>
                                    <span># BootStrap</span>
                                    <span># PHP</span>
                                    <span># MySql</span>
                                    <span># list.js</span>
                                    <span># summernote.js</span>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                    <aside className="work-list__title" style={{left:'-29%',top:'12%'}}>PERSONAL WORK</aside>
                </div>
            </main>
        );
    }
}

export default Work;