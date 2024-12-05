import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import cardBg from '@/assests/background_images/cardBg.png';
import astraunout_bg from '@/assests/background_images/astrounaut_bg.png';
import diamond from '@/assests/logo/Diamonds2.png';
import { Loader } from '@/utils/Loader';

const BuyButton = () => {
  return (
    <button className="w-[110px] p-1 flex justify-between items-center border-[1px] border-[#C3F847] rounded-full">
      <div className="w-[42px] h-[42px] rounded-full flex justify-center items-center border-[2px] border-[#FFFFFF] text-[20px] text-white">
        <AiOutlinePlus />
      </div>
      <h3 className="text-[8px] text-white font-mer uppercase">CONFIRM</h3>
    </button>
  );
};

export const OrderProcessing = () => {
  return (
    <div className="w-[350px] z-[20] relative max-w-full h-auto p-4 mt-[10px] flex flex-col justify-center drop-shadow-2xl gap-10 bg-transparent rounded-[30px]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: -2,
        }}
      >
        <Image
          src={cardBg}
          alt="Background"
          className="w-full h-full bg-contain"
          style={{ filter: 'drop-shadow(2px 2px 2px #000000)' }}
        />
      </div>

      <div className="w-[320px] h-[250px] relative rounded-[15px]">
        <div>
          <Image
            src={astraunout_bg}
            alt=""
            className="w-[320px] h-[250px] rounded-[15px]"
          />
        </div>
        <div className="absolute w-[200px] h-[130px] top-[20%] left-[8%]">
          <div className="relative w-[200px] h-[130px] rounded-[15px] bg-gradient-to-tr from-[#B384FF] to-[#c4c4c400] bg-opacity-[5%] shadow-lg z-20 top-[20%] left-[18%]">
            <Image
              src={diamond}
              alt={''}
              className="absolute w-[200px] aspect-auto z-30 bottom-3"
            />
          </div>
        </div>
      </div>
      <div className="w-[320px] flex items-center justify-center">
        <Loader />
      </div>
      <div className="w-[320px] h-[100px] flex justify-center items-center p-3 mb-[25%] rounded-[15px] bg-[#000000] bg-opacity-20 backdrop-blur-md">
        <h1 className="text-[20px] text-[#C3F847] font-mer ">
          Order Processing
        </h1>
      </div>
      <Link href="/success">
        <div className="absolute right-2 bottom-3">
          <BuyButton />
        </div>
      </Link>
    </div>
  );
};
