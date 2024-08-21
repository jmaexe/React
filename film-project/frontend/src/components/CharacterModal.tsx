import React, { memo, useEffect } from 'react';
import { Character } from '../models/Character';

type ModalProps = {
  character: Character | undefined;
  closeModal: () => void;
};

const CharacterModal = ({ character, closeModal }: ModalProps) => {
  useEffect(() => {
    character !== undefined &&
      (document.getElementById('modal') as HTMLDialogElement).showModal();
  }, [character]);
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h2>Character Details : {character?.id}</h2>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default memo(CharacterModal);
