import React from 'react';
import './About.css';
import skillData from 'data/skillData';
import { SkillItem } from 'component';

const About = () => {
  return (
    <main className='about'>
      <div className='about-con'>
        <section>
          <h1>about me</h1>
          <div className='about-me'>
            <div className='about-me-text'>
              <p className='about-me-intro'>
                I'm a front end web developer based in Seoul, South Korea.
              </p>
              <p className='about-me-desc'>
                I enjoy developing good websites for nice people.
                <br />I believe good websites could give a good experience to millions of people.
                <br />
                That's the goal of my life.
                <br />
                I'm a running and travel lover.
              </p>
            </div>
            <div className='about-me-img'>
              <img src={process.env.PUBLIC_URL + '/images/me2.png'} alt='profile' />
              <a href="javascript:alert('showing pdf!')" className='about-me-pdf'>
                View my CV
              </a>
            </div>
          </div>
        </section>
        <section>
          <h1>What I can do</h1>
          <div className='skill-wrap'>
            {skillData.data.map(({ name, color, volume }) => (
              <SkillItem name={name} color={color} volume={volume} />
            ))}
          </div>
        </section>
        {/* <p>Iheanyi Ekechukwu is a NYC-based software engineer, currently working at GitHub.</p> */}
      </div>
    </main>
  );
};

export default About;
