
import React, { Component } from 'react';
import Social from './Social';
import './Home.css'


class Home extends Component {
    render() {
        return (
            <main className="home">
                <div className="home-con"> 
                    <p className="home-text">
                    ― Hi there, My name is Jayoung Lee.
                    <br/>
                    I'am a Web Developer based in Seoul, South Korea 
                    </p>
                    <Social/>
                </div>
            </main>
        );
    }
}

export default Home;