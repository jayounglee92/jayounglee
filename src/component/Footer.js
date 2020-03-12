import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <small>Jayoung Lee &copy; 2020</small>
                <ul>
                    <li><a href="https://github.com/jayounglee92" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://lzy6853.gitbook.io/devlog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li><a href="https://www.linkedin.com/in/jayoung-lee-11783519b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </footer>
        );
    }
}

export default Footer;