import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Project</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;