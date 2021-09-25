import React from 'react';
import './SkillItem.css';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillItem = ({ name = '', color = '#000', volume = 0 }) => {
  const renderSkillIcon = (skill) => {
    switch (skill) {
      case 'HTML':
        return <FontAwesomeIcon icon={faHtml5} size='2x' />;
      case 'CSS':
        return <FontAwesomeIcon icon={faCss3} size='2x' />;
      case 'JAVASCRIPT':
        return <FontAwesomeIcon icon={faJs} size='2x' />;
      case 'REACT':
        return <FontAwesomeIcon icon={faReact} size='2x' />;
      case 'jQuery':
        return (
          <img
            src={process.env.PUBLIC_URL + '/images/jquery-vertical.svg'}
            alt='profile'
            style={{ width: '33px' }}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className='skill'>
      <div className='skill-title'>
        {renderSkillIcon(name)}
        <div className='skill-name'>{name}</div>
      </div>
      <div className='skill-bar'>
        {[...Array(volume)].map((el, index) => (
          <div style={{ background: color }}></div>
        ))}
        {[...Array(10 - volume)].map((el, index) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
