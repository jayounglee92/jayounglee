
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons"
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
                <a href="https://lzy6853.gitbook.io/devlog/" target="_blank" rel="noopener noreferrer" title="gitbook">
                    <FontAwesomeIcon icon={faBook} />
                </a>
                <a href="mailto:lzy6853@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        );
    }
}

export default Social;
