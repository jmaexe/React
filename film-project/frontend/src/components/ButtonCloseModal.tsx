import React from 'react';

type ButtonCloseModalProps = {
  className: string;
  content: any;
};

const ButtonCloseModal = ({ className, content }: ButtonCloseModalProps) => {
  return (
    <form method="dialog">
      <button className={className}>{content}</button>
    </form>
  );
};

export default ButtonCloseModal;
