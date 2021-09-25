import React from 'react';
import './TagItem.css';

const TagItem = ({ name = '' }) => {
  return <span className='tag'># {name}</span>;
};

export default TagItem;
