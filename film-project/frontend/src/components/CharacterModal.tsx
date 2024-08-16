import React, { memo } from 'react';
import { Character } from './models/Character';

type ModalProps = {
  character: Character | undefined;
};

const CharacterModal = ({ character }: ModalProps) => {
  console.log('rendered modal: ', character);
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h2>Character Details : {character?.id}</h2>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default memo(CharacterModal);
