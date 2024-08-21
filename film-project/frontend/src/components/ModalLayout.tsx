import React, { Children, useEffect } from 'react';

type ModalLayoutProps = {
  id: string;
  children?: React.ReactNode;
  showModal: boolean;
};

const ModalLayout = ({ id, showModal, children }: ModalLayoutProps) => {
  useEffect(() => {
    (document.getElementById(id) as HTMLDialogElement).showModal();
  }, []);

  return (
    showModal && (
      <dialog id={id} className="modal">
        {children}
      </dialog>
    )
  );
};

export default ModalLayout;
