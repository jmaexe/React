import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';

const ModalFooter = () => {
  return (
    <>
      <div className="modal-action">
        <ButtonCloseModal className="btn" content={'Close'} />
      </div>
    </>
  );
};

export default ModalFooter;
