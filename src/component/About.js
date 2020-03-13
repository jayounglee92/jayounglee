
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>이자영, 웹개발자, 2년차, 서울</p>
                    {/* <p>Iheanyi Ekechukwu is a NYC-based software engineer, currently working at GitHub.</p> */}
                </div>
                <div>
                    <h2>언어 및 사용경험</h2>
                    <dl>
                        <dt>언어</dt>
                        <dd>HTML, CSS, Javascript, JQuery</dd>
                        <dd>JSP, JAVA, SQL</dd>
                        <dt>사용경험</dt>
                        <dd>React</dd>
                        <dd>MySQL, tomcat</dd>
                        <dd>GitLab, GitHub, SVN</dd>
                        <dd>GA, GTM, Cafe24</dd>
                    </dl>
                </div>
                <div>
                    <h2>경력</h2>
                    <dl>
                        <dt>모비데이즈, Mobidays</dt>
                        <dd>기간 : 2018. 04 - 재직중</dd>
                        <dd>직무 : 웹 프론트 개발</dd>
                        <dd>업무 : 광고플랫폼 유지보수 및 개발 | 사내 웹서비스 구축 </dd>
                    </dl>
                </div>
                <div>
                    <h2>자격증</h2>
                    <ul>
                        <li>2014. 06. 03 정보처리기사 취득</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;