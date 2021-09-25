import React from 'react';
import './WorkItem.css';
import { TagItem } from 'component';

const WorkItem = ({ title = '', desc = '', tags = [] }) => {
  const alertCanNotAccess = (e) => {
    e.preventDefault();
    alert('Sorry, Can not access this admin site. ;) you are going to get front site.');
    window.open('http://www.mobidays.com/career/#process', '_blank');
  };

  return (
    <li className='work-item'>
      <div class='work-item__screen'>
        <video
          poster='https://nykim.net/images/posters/poster-2.png'
          playsinline=''
          autoplay=''
          loop=''
          muted=''
        >
          <source
            data-src='https://nykim.net/videos/video-design.mp4'
            type='video/mp4'
            src='https://nykim.net/videos/video-design.mp4'
          />
          (앗, 비디오가 잘 나오지 않는 모양이에요. 다른 브라우저로 접속해보시겠어요?)
        </video>
      </div>
      <div class='work-item__text'>
        <div className='work-item__header'>
          <div className='work-item__header-title'>
            <strong className='work-item__header-title-back'>Mobiconnect Admin </strong>
            <strong className='work-item__header-title-front'>Mobiconnect Admin</strong>
          </div>
          <a
            className='work-item__view-website'
            href='#'
            onClick={alertCanNotAccess}
            target='_blank'
            rel='noopener noreferrer'
            title='View this Website'
          >
            View this Website
            <span>
              <i>→</i>
            </span>
          </a>
        </div>
        <p className='work-item__desc'>
          {title}
          <br />
          <ol>
            <li>{desc}</li>
          </ol>
        </p>
        <div className='work-item__ability'>
          {tags.map((item) => (
            <TagItem name={item} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default WorkItem;
