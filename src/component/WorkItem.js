import React from 'react';
import './WorkItem.css';

const WorkItem = ({ id = null, title = '', images = [''], onClick }) => {
  const clickWorkItem = (e, id) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <li className='work-item'>
      <div className='work-item__screen'>
        <img src={process.env.PUBLIC_URL + `/images/${images[0]}`} alt={`${title} 이미지`} />
        <div className='work-item__text'>
          <strong className='work-item__header'>{title}</strong>
          <a
            className='work-item__view-website'
            href='#'
            onClick={(e) => clickWorkItem(e, id)}
            target='_blank'
            rel='noopener noreferrer'
            title={`${title}사이트 새창으로 이동`}
          >
            MORE DETAILS
            <span>
              <i>→</i>
            </span>
          </a>
          {/* <span className='work-item__source'>{source ? `이미지 출처 : ${source}` : ''}</span> */}
        </div>
      </div>
    </li>
  );
};

export default WorkItem;
