'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import RoundButton from '@/utils/round-button-v2';

interface CardProps {
  image: any;
  altHeading: string;
  token: any;
}

const ForgotPassword: FC<CardProps> = ({
  image,
  altHeading,
  token,
}): JSX.Element => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirectModal, setRedirectModal] = useState(false);
  const router = useRouter();
  console.log(token, 'token');
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   toast.error("Passwords do not match");
    //   return;
    // }

    try {
      const response = await fetch('guds.world/api/updatePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          token,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update password');
      }

      toast.success('Password updated successfully');
      router.replace('/login');
    } catch (error: any) {
      console.error('Error updating password:', error);
      toast.error(
        error.message || 'An error occurred while updating the password'
      );
    }
  };

  return (
    <>
      <div className="relative rounded-[30px] flex flex-col justify-center py-5 gap-4 w-[335px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md px-3">
        <div
          className={`absolute ${
            altHeading === 'diamonds'
              ? 'w-[150px] left-[25%] top-[-60px] '
              : 'w-[9rem] top-[-60px]'
          } aspect-auto z-20`}
        >
          <Image src={image} alt={altHeading} />
        </div>

        {/* <div className="flex flex-col relative rounded-[30px] justify-center items-center bg-[#0000003b] bg-opacity-100 backdrop-blur-[45px] z-10 h-[314px] w-[335px] gap-2 pt-5 shadow-2xl"> */}
        <h2 className="text-[25px] pt-10 uppercase text-center text-[#C3F847] font-meul">
          Reset <br />
          Password
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            placeholder={'Password'}
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#ffffff] bg-opacity-[16%] z-30 rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff] outline-none text-white/80 "
          />

          <div className=" flex  gap-4"></div>

          <input
            placeholder={'Re-Enter Password'}
            type={'password'}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-[#ffffff] bg-opacity-[16%] z-30 rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff] outline-none text-white/80 "
          />

          <div className="flex flex-col justify-start gap-4 pl-3">
            <div className="pl-3 flex gap-6"></div>
            <button className="absolute bottom-[-50px] right-9 " type="submit">
              <RoundButton />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
