
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Yo there, I’m Iheanyi. I’m a product engineer currently living in Brooklyn, New York. Currently, I'm a Senior Software Engineer at GitHub on the Actions team. While I enjoy both designing and building products, I also enjoy co-hosting my podcast, Two Black Nerds, with my best friend Romeo.</p>
                </div>
                <div>
                    <blockquote>"My life is dope and I do dope shit."</blockquote>
                    <cite>- Kanye West</cite>
                </div>
                <div>
                    <h2>Experience</h2>
                    <dl>
                        <dt>GitHub August 2018 – now</dt>
                        <dd>Senior Software Engineer</dd>
                        <dt>DigitalOcean March 2016 – July 2018</dt>
                        <dd>Software Engineer II</dd>
                        <dt>IBM Watson February 2015 – February 2016</dt>
                        <dd>Software Engineer</dd>
                        <dt>iCeNSA February 2013 – December 2014</dt>
                        <dd>Research Assistant</dd>
                        <dt>IBM Systems May 2013/2014 – August 2013/2014</dt>
                        <dd>Software Engineering Intern</dd>
                        <dt>IBM Systems May 2013/2014 – August 2013/2014</dt>
                        <dd>Software Engineering Intern</dd>
                        <dt>Cooperative Computing Lab January 2012 – December 2012</dt>
                        <dd>Research Assistant</dd>
                    </dl>
                </div>
                <div>
                    <h2>Education</h2>
                    <dl>
                        <dt>University of Notre Dame, December 2014</dt>
                        <dd>B.S. Computer Science / B.A. Graphic Design</dd>    
                    </dl>
                </div>
            </div>
        );
    }
}

export default About;