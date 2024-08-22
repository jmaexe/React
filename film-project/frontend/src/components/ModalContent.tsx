import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';
import { Types } from '../models/Types';
import { renderModalContent } from '../utils/renderModalContent';
type ModalContentProps = {
  data?: any;
  type: Types;
  closeModal: () => void; // This prop will be used to close the modal when clicked on 'X' button.  // eslint-disable-line @typescript-eslint/no-unused-vars-experimental
};

const ModalContent = ({ data, type, closeModal }: ModalContentProps) => {
  return (
    <div className="modal-box">
      <ButtonCloseModal
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        content={'✕'}
        handleClick={closeModal}
      />
      {renderModalContent(type, data)}
    </div>
  );
};

export default ModalContent;
