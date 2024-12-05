'use client';
import React from 'react';
import Image from 'next/image';
import Logo3 from '@/assests/logo/logo3.png';
import Roundbtn from '@/utils/round-button';
import diamond from '@/assests/logo/RocketshipBlack.png';
import Link from 'next/link';

const Success = () => {
  return (
    <div className=" z-[100] flex flex-col items-center rounded-bl-[20px] rounded-tr-[20px] rounded-br-[0px] rounded-tl-[20px] justify-start w-[345px] h-[469px]  my-7 bg-black/20 backdrop-blur-20 rounded-3xl  relative">
      <div className="w-[40%] flex items-center justify-center">
        {' '}
        <Link href="/dashboard">
          {' '}
          <Image
            alt="Logo3"
            src={Logo3}
            className={'mt-[-20px] cursor-pointer'}
            height={50}
            width={50}
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between py-3 w-[92%] bg-black/30 backdrop-blur-75  rounded-[20px] mt-[5px] h-[410px]">
        <h1 className="flex text-white text-[35px] font-bold">Brilliant!</h1>
        <h1 className="text-xs text-white">PAYMENT CONFIRMED</h1>
        <div className="flex w-[80%] font-meul text-[12px] text-center text-[#C3F847]">
          Your Journey to financial stability begins with GUDS!
        </div>
        <div className="flex w-[80%]  text-[12px] text-center text-white">
          The email will be sent to you shortly with further details to activate
          your preorder and choose your financial plan.
        </div>
        <Link href="/dashboard">
          {' '}
          <Roundbtn image={diamond} />
        </Link>
        <div className="flex w-[80%] text-center  justify-center items-center  text-[12px]  text-white">
          Share & Earn Rewards
        </div>
      </div>

      <div className="flex items-center justify-end z-0  w-[100%]">
        <div className="w-[200px] h-[60px] bottom-0 rounded-bl-[20px] rounded-br-[20px]  absolute mb-[-60px]  origin-center flex items-center justify-start">
          <div className="border-r-[30px]  border   w-[60px] h-[60px] flex items-center justify-end border-l-[30px] border-b-[30px] border-t-[30px] border-l-transparent border-r-black/20 border-b-transparent border-t-black/20 "></div>
          <div className="bg-black/20 backdrop-blur-20 w-[140px] h-[60px] rounded-br-[20px]">
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
