import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Social.css';

class Social extends Component {

    render() {
        return (
            <div className="social"> 
                <a href="https://github.com/jayounglee92" target="_blank" rel="noopener noreferrer" title="github">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/jayoung-lee-11783519b/" target="_blank" rel="noopener noreferrer" title="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://jaddong.tistory.com/" target="_blank" rel="noopener noreferrer" title="blog">
                    <FontAwesomeIcon icon={faBlog} />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=lzy6853@gmail.com" target="_blank" rel="noopener noreferrer" title="mail">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
            
        );
    }
}

export default Social;
