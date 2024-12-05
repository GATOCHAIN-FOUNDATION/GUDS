'use client';

import BuyGudsBtn from '@/utils/buy-guds-btn';
import SwapNFTSlider from '@/utils/swap-nft-slider';
import ToggelButton from '@/utils/toggle-button';
import cardBg from '@/assests/background_images/cardBg.png';
import Image from 'next/image';

const SwapNFTCard = () => {
  return (
    <div className="w-[350px] max-w-full h-auto p-4 flex flex-col justify-between drop-shadow-2xl gap-10 bg-transparent rounded-[30px]">
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

      <ToggelButton item1="GUDS to Invest" item2="GUDS in Wallet" />
      <div className="flex flex-col gap-10">
        <SwapNFTSlider />
        <div className="flex justify-center">
          <h3 className="text-center text-[#614AD3] text-[16px] font-mer">
            or
            <br />
            choose any amount
          </h3>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 relative">
        <div>
          <p className="text-[#EDEDED] italic font-meul text-[9px]">
            Enter how much GUDS you want to buy
          </p>
        </div>
        <div className="rounded-[15px] w-[100%] h-[70px] bg-black/50 backdrop-blur-lg flex justify-center items-center">
          <input
            type="text"
            className="text-[#ffffff] font-meul text-[20px] italic w-[90%] bg-transparent outline-none"
          />
        </div>
        <div className="flex justify-end mt-[-40px] pb-12">
          <BuyGudsBtn url={'/swappingoffer/nftcloserlook'} />
        </div>
      </div>
    </div>
  );
};

export default SwapNFTCard;
