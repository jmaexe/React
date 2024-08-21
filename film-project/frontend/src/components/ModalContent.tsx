import React from 'react';
import ButtonCloseModal from './ButtonCloseModal';
import { Types } from '../models/Types';
import { renderModalContent } from '../utils/renderModalContent';
type ModalContentProps = {
  data?: any;
  type: Types;
};

const ModalContent = ({ data, type }: ModalContentProps) => {
  return (
    <div className="modal-box">
      <ButtonCloseModal
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        content={'✕'}
      />
      {renderModalContent(type, data)}
    </div>
  );
};

export default ModalContent;
