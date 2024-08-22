import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';
import { Types } from '../models/Types';
type ModalContentProps = {
  children: React.ReactNode;
};

const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className="modal-box">
      <ButtonCloseModal
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        content={'✕'}
        handleClick={() =>
          (document.getElementById('modal') as HTMLDialogElement).showModal()
        }
      />
      {children}
    </div>
  );
};

export default ModalContent;
