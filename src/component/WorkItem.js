import React from 'react';
import './WorkItem.css';
import { TagItem, Maybe } from 'component';

const WorkItem = ({ title = '', desc = '', images = [''], url = '', tags = [] }) => {
  const alertCanNotAccess = (e, url) => {
    e.preventDefault();
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <li className='work-item'>
      <div class='work-item__screen'>
        <img src={process.env.PUBLIC_URL + `/images/${images[0]}`} alt={''} />
      </div>
      <div class='work-item__text'>
        <div className='work-item__header'>
          <div className='work-item__header-title'>
            <strong className='work-item__header-title-back'>{title} </strong>
            <strong className='work-item__header-title-front'>{title}</strong>
          </div>
          <Maybe test={url}>
            <a
              className='work-item__view-website'
              href='#'
              onClick={(e) => alertCanNotAccess(e, url)}
              target='_blank'
              rel='noopener noreferrer'
              title={`${title}사이트 새창으로 이동`}
            >
              View this Website
              <span>
                <i>→</i>
              </span>
            </a>
          </Maybe>
        </div>
        <p className='work-item__desc'>{desc}</p>
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
