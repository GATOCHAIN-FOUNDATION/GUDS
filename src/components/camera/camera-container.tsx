'use client';
import React from 'react';
import { useState, FC } from 'react';
import CameraOption from './camera-option';
import FileOption from './file-option';
import cross from '@/assests/icons/cross.png';
import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
  onClose: any;
  onOpen: any;
}

const CameraContainer: FC<ModalProps> = ({ onOpen, onClose }) => {
  const [cameraOption, setCameraOption] = useState(false);
  const [fileOption, setFileOption] = useState(false);

  const showCameraOption = () => {
    setCameraOption(true);
    setFileOption(false);
  };

  const showFileOption = () => {
    setFileOption(true);
    setCameraOption(false);
  };

  return (
    <div>
      {fileOption && (
        <FileOption
          onModalClose={onClose}
          onModalOpen={onOpen}
          onClose={() => {
            setFileOption(false);
          }}
        />
      )}
      {cameraOption && (
        <CameraOption
          onModalClose={onClose}
          onModalOpen={onOpen}
          onClose={() => {
            setCameraOption(false);
          }}
        />
      )}
      {!fileOption && !cameraOption && (
        <div className="flex items-center justify-center">
          <div className="flex flex-col relative items-center justify-center text-white  shadow-lg bg-black/25 font-meul w-[300px] rounded-[20px] px-4 py-8  ">
            <div className="mb-6">
              <h1>camera</h1>
            </div>
            <Link href="/profile">
              {' '}
              <Image
                alt="cross"
                src={cross}
                className={'top-10 absolute left-10 cursor-pointer'}
                height={10}
                width={10}
              />
            </Link>

            <button
              type="submit"
              className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2  cursor-pointer  text-center rounded-lg w-[90%]"
              onClick={showCameraOption}
            >
              Take a photo
            </button>

            <button
              type="submit"
              className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2  cursor-pointer  text-center rounded-lg w-[90%]"
              onClick={showFileOption}
            >
              Choose from gallery
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraContainer;
