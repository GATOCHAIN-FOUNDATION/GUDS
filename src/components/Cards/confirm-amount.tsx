import React, { useState } from 'react';
import RoundButton from '@/utils/round-button-v2';
import { useRouter } from 'next/navigation';

export const ConfirmAmount = ({ amount }: { amount: any }) => {
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount === 2) {
      router.push(`/checkout/buy/${amount}`);
    }
  };

  return (
    <article className="relative flex flex-col justify-center p-2 w-[300px] h-[300px] items-center border border-[#C3F847] rounded-[30px] bg-[#000000] bg-opacity-30 backdrop-blur-sm">
      <h1 className="font-mer text-[#C3F847] text-center text-[24px]">
        PLEASE
        <br /> CONFIRM
        <br /> THE AMOUNT
      </h1>
      <p className="text-white text-[12px]">
        TAP 3 TIMES FOR SECURITY REASONS.
      </p>
      <div
        className="absolute bottom-0 mb-[-50px]"
        onClick={() => handleButtonClick()}
      >
        <RoundButton />
      </div>
    </article>
  );
};
