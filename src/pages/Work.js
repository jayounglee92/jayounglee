import React, { useState } from 'react';
import { WorkItem, TagItem } from 'component';
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
      <div className={`modal-wrap ${targetData ? 'visible' : 'hidden'}`}>
        <div className='modal-mask' onClick={closeModal}></div>
        <div className='modal-con'>
          <div className='modal-img'>
            <img
              src={process.env.PUBLIC_URL + `/images/${targetData?.images[0]}`}
              alt={`${targetData?.title} 이미지`}
            />
            <spen onClick={closeModal}>x</spen>
          </div>
          <div className='modal-text'>
            <h3 className='modal-text__title'>{targetData?.title}</h3>
            <div className='modal-text__ability'>
              {targetData?.tags.map((item) => (
                <TagItem name={item} />
              ))}
            </div>
            <hr className='modal-text__hr' />
            <p className='modal-text__desc'>{targetData?.desc}</p>
          </div>
        </div>
      </div>
      <main className='work'>
        <div className='work-con'>
          <ul className='work-list'>
            {workData.data.map(({ id, title, images }) => (
              <WorkItem key={id} id={id} title={title} images={images} onClick={openModal} />
            ))}
          </ul>
          <span>이해를 돕기 위한 이미지로 이미지에 있는 데이터는 실제와 상이합니다.</span>
        </div>
      </main>
    </>
  );
};

export default Work;
