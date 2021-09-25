import React from 'react';
import { WorkItem } from 'component';
import './Work.css';
import workData from 'data/workData';
const Work = () => {
  return (
    <main className='work'>
      <div className='work-con'>
        <ul className='work-list'>
          {workData.data.map(({ title, desc, images, url, tags }) => (
            <WorkItem title={title} desc={desc} images={images} url={url} tags={tags} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Work;
