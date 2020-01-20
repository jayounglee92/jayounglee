
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Iheanyi Ekechukwu is a NYC-based software engineer, currently working at GitHub.</p>
                </div>
                <div>
                    <h2>Latest Writing</h2>
                    <ul>
                        <li>Engineering Products vs. Engineering Primitives</li>
                        <li>Lessons from Design School for Software Engineers</li>
                        <li>Reflections on 2018</li>
                        <li>The G-Unit Stack: Go, GraphQL, and gRPC</li>
                    </ul>
                </div>
                <div>
                    <h2>Latest Projects</h2>
                    <dl>
                        <dt>DigitalOcean Community</dt>
                        <dd>My work on the DigitalOcean Community website and team.</dd>
                        <dt>Interface Lovers</dt>
                        <dd>An online magazine for creative professionals.</dd>
                        <dt>DigitalOcean Hacktoberfest 2016</dt>
                        <dd>A month long celebration of open-source software.</dd>
                        <dt>Fade Pics</dt>
                        <dd>Generate a four-panel fading transition between two images.</dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default Home;