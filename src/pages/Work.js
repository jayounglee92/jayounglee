import React, { useState } from 'react';
import { WorkItem, ModalWorkItem, Maybe } from 'component';
import './Work.css';
import workData from 'data/workData';
import experienceData from 'data/experienceData';

const Work = () => {
  const [targetData, setTargetData] = useState(null);

  const openModal = (id) => {
    setTargetData(workData.data.find((item) => item.id === id));
  };

  const closeModal = () => {
    setTargetData(null);
  };

  return (
    <>
      <Maybe test={!!targetData}>
        <ModalWorkItem data={targetData} onClose={closeModal} />
      </Maybe>
      <main className='work'>
        <div className='work-con'>
          <section>
            <h1>Experience</h1>
            <div className='ex-con'>
              <ul className='ex-list'>
                {experienceData.data.map(({ id, name, type, startDate, endDate, position }) => (
                  <li key={id}>
                    <strong>{name}</strong>
                    <span className='type'>&nbsp;|&nbsp;{type}</span>
                    <span>
                      {startDate} - {endDate}
                    </span>
                    <p>{position}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            <h1>Recent Project</h1>
            <div className='project-con'>
              <ul className='project-list'>
                {workData.data.map(({ id, title, images }) => (
                  <WorkItem key={id} id={id} title={title} images={images} onClick={openModal} />
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Work;
