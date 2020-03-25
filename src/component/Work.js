
import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
    render() {
        return (
            <main className="work">
                <div className="work-con">
                    <section>
                        <h2>RECENT WORK</h2>
                        <ul>
                            <li>
                            mobiconnect
                            </li>
                            <li>
                                mobiconnect-api-site
                            </li>
                            <li>
                                mobidays-admin-borad
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>PERSONAL WORK</h2>
                        <ul>
                            <li>
                            Tate
                            </li>
                            <li>
                            Muisic Tates
                            </li>
                            <li>
                            kakao chat app
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>ANIMATION WORK</h2>
                        <ul>
                            <li>blabla</li>
                            <li>blabla</li>
                            <li>blabla</li>
                        </ul>
                    </section>
                </div>
            </main>
        );
    }
}

export default Work;