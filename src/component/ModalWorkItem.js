import React from 'react';
import { TagItem } from 'component';
import './ModalWorkItem.css';

const ModalWorkItem = ({ data, onClose }) => {
  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`modal-wrap ${data ? 'visible' : 'hidden'}`}>
      <div className='modal-mask' onClick={closeModal}></div>
      <div className='modal-con'>
        <div className='modal-img'>
          <img
            src={process.env.PUBLIC_URL + `/images/${data?.images[0]}`}
            alt={`${data?.title} 이미지`}
          />
        </div>
        <div className='modal-text'>
          <h3 className='modal-text__title'>{data?.title}</h3>
          <div className='modal-text__ability'>
            {data?.tags.map((item) => (
              <TagItem name={item} />
            ))}
          </div>
          <hr className='modal-text__hr' />
          <p className='modal-text__desc'>{data?.desc}</p>
        </div>
        <spen className='modal-button' onClick={closeModal}>
          <img src={process.env.PUBLIC_URL + `/images/ico_x.png`} alt={`모달창 닫기 버튼 이미지`} />
        </spen>
      </div>
    </div>
  );
};

export default ModalWorkItem;
