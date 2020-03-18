import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <ul>
                    <li><Link to="/">Work</Link></li>
                    <li><h1><Link to="/">JAYOUNG LEE</Link></h1></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;