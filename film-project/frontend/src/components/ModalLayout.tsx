import React from 'react';

type ModalLayoutProps = {
  id: string;
  children?: React.ReactNode;
};

const ModalLayout = ({ id, children }: ModalLayoutProps) => {
  return (
    <dialog id={id} className="modal">
      {children}
    </dialog>
  );
};

export default ModalLayout;
