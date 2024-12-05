'use client';

import Link from 'next/link';
import Image from 'next/image';
import SwapNFTSlider from '@/utils/swap-nft-slider';
import ToggelButton from '@/utils/toggle-button';
import Back from '@/assests/icons/Back.png';
import Contract from '@/assests/background_images/contract.png';

const SwapNFTCardCloser = () => {
  return (
    <div>
      <div className="w-[350px]">
        {' '}
        <ToggelButton item1="GUDS to Invest" item2="GUDS in Wallet" />
      </div>
      <br />
      <div className="w-[350px] shadow-md max-w-full h-auto  flex flex-col justify-between drop-shadow-2xl gap-10 bg-[#614AD3]/20 rounded-[30px]">
        <div>
          <h1 className=" my-4 font-meul text-[12px] text-white text-center">
            Take a closer look
          </h1>{' '}
          <div className=" ml-5 p-2 rounded-[50px] bg-slate-50 w-[30px]  ">
            <Image
              src={Back}
              className={''}
              alt="back"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <SwapNFTSlider />
        </div>
        <h1 className=" ml-5 font-meb text-[#C3F847]">Early Bid Package</h1>

        <div className="flex items-center justify-center ml-5">
          <div className="w-[60%]">
            <h1 className="font-meb">BUY</h1>
            <h1 className="  font-meul text-white text-3xl">$10000/</h1>
          </div>
          <div className="w-[40%]">
            <h1 className="font-meb text-[#C3F847]">GET</h1>
            <h1 className="font-meul text-3xl text-[#C3F847] ">$300</h1>
          </div>
        </div>
        <div
          className=" flex flex-col items-center justify-between p-3   w-[100%] h-[200px]"
          style={{
            zIndex: -2,
            backgroundImage: `url(${Contract.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <div className="mt-[12px]">
            <h1 className="font-meul text-white text-[15px]">Buy 10000 GUDS</h1>
            <h1 className="font-meul text-white text-[15px]">Get 2500</h1>
            <h1 className="font-meul text-[#C3F847] text-xs">
              & REWARDS VALUES $300
            </h1>
          </div>
          <div className="w-[90%]">
            <h1 className="font-meul text-white text-[10px] italic">
              Your Contract Details
            </h1>
          </div>
        </div>

        <Link href="/checkout">
          {' '}
          <div
            className="w-[100%] bg-[#C3F847] text-center bottom-0 p-5 rounded-[10px]  "
            style={{ filter: 'drop-shadow(2px 2px 2px 2px #000000)' }}
          >
            <h1 className="font-meul">CONFIRM</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SwapNFTCardCloser;
