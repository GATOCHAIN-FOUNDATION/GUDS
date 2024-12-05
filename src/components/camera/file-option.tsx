'use client';

import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import cross from '@/assests/icons/cross.png';
import { FC } from 'react';

interface ModalProps {
  onClose: any;
  onModalOpen: any;
  onModalClose: any;
}
const FileOption: FC<ModalProps> = ({ onClose, onModalOpen, onModalClose }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  const [email, _setEmail] = useState(session?.user?.email);

  const [selectedFile, setSelectedFile] = useState<string>('');
  const { register, handleSubmit } = useForm();

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (result && typeof result === 'string') {
          setSelectedFile(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (event: any) => {
    const image = event.profile[0];
    console.log(image);
    const formData = new FormData();
    formData.append('file', selectedFile);
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
    <div className="flex items-center justify-center h-[500px] ">
      <div className="flex flex-col relative items-center justify-center text-white  shadow-lg bg-black/25 font-meul w-[300px] rounded-[20px] px-4 py-8  ">
        <Image
          alt="cross"
          src={cross}
          className={'top-10 absolute left-10 cursor-pointer'}
          height={10}
          width={10}
          onClick={() => onClose()}
        />
        <div className="mb-6">
          <h1>Gallery</h1>
        </div>

        <form
          className="flex flex-col items-center justify-center w-[100%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {selectedFile && (
            <Image
              src={selectedFile}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          )}
          <input
            {...register('profile')}
            type="file"
            accept="image/*"
            id="photo"
            className="hidden"
            onChange={handleFileInputChange}
          />
          {!selectedFile && (
            <label
              htmlFor="photo"
              className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2 border-none  cursor-pointer  text-center rounded-lg w-[90%]"
            >
              Choose photo
            </label>
          )}

          {selectedFile && (
            <button
              type="submit"
              className="font-meb text-xs bg-[#C3F847] text-purple py-4 text-purple-900 my-2  cursor-pointer  text-center rounded-lg w-[90%]"
            >
              SaveImage
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default FileOption;
