import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';

type ModalActionProps = {};

const ModalAction = ({}: ModalActionProps) => {
  return (
    <>
      <div className="modal-action">
        <ButtonCloseModal
          className="btn"
          content={'Close'}
          handleClick={() =>
            (document.getElementById('modal') as HTMLDialogElement).showModal()
          }
        />
      </div>
    </>
  );
};

export default ModalAction;
