'use client';
import React, { FC, Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import CameraContainer from '@/components/camera/camera-container';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
import { AiOutlineClose } from 'react-icons/ai';
import RoundButton from '@/utils/round-button-v2';
interface ModalProps {
  onClose: any;
  onOpen: any;
}
const SuccessModal: FC<ModalProps> = ({ onClose, onOpen }) => {
  return (
    <div className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-[1000] ">
      <div className="w-[350px] relative border border-[#C3F847] h-[250px] flex  items-center justify-center flex-col bg-black bg-opacity-25  rounded-[40px] shadow-md">
        <span className="text-[#C3F847] font-meul   font-bold ">
          Image Saved Successfully
        </span>
        <div
          className="absolute top-5 right-5 cursor-pointer text-[20px] text-white"
          onClick={onClose}
        >
          <AiOutlineClose />
        </div>
        <div
          className="absolute bottom-0 right-5 mb-[-20px] cursor-pointer text-[20px] text-white"
          onClick={onClose}
        >
          <RoundButton />
        </div>
      </div>
    </div>
  );
};
const Camera = () => {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <MobileLayout>
        <CameraContainer
          onClose={() => {
            setModal(false);
          }}
          onOpen={() => {
            setModal(true);
          }}
        />
      </MobileLayout>
      {modal && (
        <SuccessModal
          onClose={() => {
            setModal(false);
          }}
          onOpen={() => {
            setModal(true);
          }}
        />
      )}
    </Fragment>
  );
};

export default Camera;
