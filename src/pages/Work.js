import React, { useState } from 'react';
import { WorkItem, ModalWorkItem, Maybe } from 'component';
import './Work.css';
import workData from 'data/workData';

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
          <ul className='work-list'>
            {workData.data.map(({ id, title, images }) => (
              <WorkItem key={id} id={id} title={title} images={images} onClick={openModal} />
            ))}
          </ul>
          <span>이해를 돕기 위한 이미지로 실제와 상이합니다.</span>
        </div>
      </main>
    </>
  );
};

export default Work;
