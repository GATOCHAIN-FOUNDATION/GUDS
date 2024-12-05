'use client';
import React from 'react';
import { useState } from 'react';
import camera from '@/assests/icons/camera.png';
import Image from 'next/image';
import Webcam from 'react-webcam';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import cross from '@/assests/icons/cross.png';
const videoConstraints = {
  width: 380,
  height: 420,
  facingMode: 'user',
};
interface ModalProps {
  onModalClose: any;
  onModalOpen: any;
  onClose: any;
}
const CameraOption: FC<ModalProps> = ({
  onClose,
  onModalOpen,
  onModalClose,
}) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  const [email, setEmail] = useState(session?.user?.email);

  const submitImage = (e: any) => {
    e.preventDefault();
  };
  const [image, setImage] = useState('');
  const onInputChange = (e: any) => {
    setImage(e.target.value[0]);
    console.log(e.target);
  };

  const [cameraOpen, setCameraOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [imageUri, setImageUri] = useState('');
  const webcamRef = React.useRef<any>(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImageOpen(false);
    setCameraOpen(false);
    setImage(imageSrc);
    setImageOpen(true);
  }, [webcamRef]);
  const onSubmit = async (event: any) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'zwobvcxz');
    const uploadResponse = await fetch(
      'https://api.cloudinary.com/v1_1/djfltoxam/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const uploadedImageData = await uploadResponse.json();
    const imageUrl = uploadedImageData.secure_url;
    console.log(imageUrl);
    setImageUri(imageUrl);
    console.log(email);
    const userRes = await fetch('/api/setProfilePicture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, imageUrl }),
    });

    const { message } = await userRes.json();
    console.log('Response:', message);
    onModalOpen();
  };

  return (
    <div className="flex  relative flex-col items-center justify-center text-white  shadow-lg bg-black/25 font-meul w-[300px] rounded-[20px] px-4 py-8  ">
      <Image
        alt="cross"
        src={cross}
        className={'top-10 absolute left-10 cursor-pointer'}
        height={10}
        width={10}
        onClick={() => onClose()}
      />
      <div className="mb-6">
        <h1>camera</h1>
      </div>

      {!cameraOpen && (
        <div>
          <Image
            alt={'camera'}
            className={'my-6'}
            src={camera}
            height={184}
            width={294}
          />
        </div>
      )}
      <div className="font-dmsans flex text-center text-[12px] my-2  w-[160px]">
        {!cameraOpen && (
          <h1>
            We need permission to access your camera photos for profile
            customization
          </h1>
        )}
      </div>
      {imageOpen && (
        <div>
          <Image alt={""} src={image} width={380} height={420} />
        </div>
      )}
      <div>
        {cameraOpen && (
          <Webcam
            audio={false}
            height={420}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={380}
            videoConstraints={videoConstraints}
          />
        )}
      </div>
      <div className="font-ad text-[#C3F847] my-2 ">
        Finanical Stability Awaits
      </div>
      {cameraOpen ? (
        <div
          onClick={capture}
          className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2 cursor-pointer   text-center rounded-lg w-[250px]"
        >
          Capture photo
        </div>
      ) : (
        <div
          onClick={() => {
            setCameraOpen(true);
          }}
          className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2  cursor-pointer  text-center rounded-lg w-[250px]"
        >
          Accept
        </div>
      )}

      {imageOpen && (
        <button
          onClick={onSubmit}
          className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2  cursor-pointer  text-center rounded-lg w-[250px]"
        >
          SaveImage
        </button>
      )}
    </div>
  );
};

export default CameraOption;
