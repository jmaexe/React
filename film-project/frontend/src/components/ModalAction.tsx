import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';

type ModalActionProps = {
  closeModal: () => void;
};

const ModalAction = ({ closeModal }: ModalActionProps) => {
  return (
    <>
      <div className="modal-action">
        <ButtonCloseModal
          className="btn"
          content={'Close'}
          handleClick={closeModal}
        />
      </div>
    </>
  );
};

export default ModalAction;
