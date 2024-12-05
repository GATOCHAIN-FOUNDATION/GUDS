'use client';
import RoundButton from '@/utils/round-button-v2';
import { useRouter } from 'next/navigation';

export const Thankyou = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/dashboard');
  };

  return (
    <article className="relative flex flex-col justify-center p-2 w-[300px] h-[200px] items-center rounded-[30px] bg-[#000000] bg-opacity-30 backdrop-blur-sm">
      <h1 className="font-mer text-white text-center text-[24px]">
        THANK YOU !
      </h1>

      <div
        className="absolute bottom-0 right-3 mb-[-50px]"
        onClick={() => handleButtonClick()}
      >
        <RoundButton />
      </div>
    </article>
  );
};
