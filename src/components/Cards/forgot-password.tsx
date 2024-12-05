'use client';
import RoundButton from '@/utils/round-button-v2';
import Image from 'next/image';
import { FC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import Redirect from './Redirect';
import { nanoid } from 'nanoid';
interface CardProps {
  image: any;
  altHeading: string;
}

const ForgotPassword: FC<CardProps> = ({ image, altHeading }): JSX.Element => {
  const [email, setEmail] = useState('');
  const [redirectModal, setRedirectModal] = useState(false);
  const token = nanoid(25);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      toast('Please enter email', {
        style: { zIndex: 10000 },
        icon: '⚠️',
      });
      return;
    }
    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      if (user) {
        setRedirectModal(true);
        const Email = await fetch('api/sendPasswordToken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            token,
          }),
        });
      }
    } catch (error: any) {
      toast.error('Error ', {
        style: { zIndex: 10000 },
      });
    }
  };

  return (
    <>
      {redirectModal ? (
        <Redirect />
      ) : (
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
          <h2 className="text-[25px] pt-10 uppercase text-center text-[#C3F847] font-meul">
            Forgot <br />
            Password
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              placeholder={'Email'}
              type={'email'}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#ffffff] bg-opacity-[16%] z-30 rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff] outline-none text-white/80 "
            />

            <div className=" flex  gap-4"></div>

            <div className="flex flex-col justify-start gap-4 pl-3">
              <p className="text-[12px] text-[#CACACA]">
                Back to{' '}
                <span className="text-[#C3F847] underline">
                  <Link href="/login">Login</Link>
                </span>
              </p>
              <div className="pl-3 flex gap-6"></div>
              <button
                className="absolute bottom-[-50px] right-9 "
                type="submit"
              >
                <RoundButton />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
