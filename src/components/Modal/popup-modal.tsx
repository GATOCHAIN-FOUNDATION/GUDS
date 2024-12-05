import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const PopupModal = ({ onClose, children }: any) => {
  return (
    <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-[5px] z-[9999]">
      {onClose && (
        <div
          className="absolute top-5 right-5 cursor-pointer text-[20px] text-white"
          onClick={onClose}
        >
          <AiOutlineClose />
        </div>
      )}
      <article className="relative">{children}</article>
    </section>
  );
};
