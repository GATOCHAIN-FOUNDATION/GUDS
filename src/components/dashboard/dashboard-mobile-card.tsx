import React from 'react';
import Image from 'next/image';
import button1 from '@/assests/logo/logo.png';
import button2 from '@/assests/dashboard/button2.png';
import diamond from '@/assests/logo/Diamonds2.png';
import buybutton from '@/assests/icons/menu.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SwapNFTSlider from '@/utils/swap-nft-slider';
import BuyGudsBtn from '@/utils/buy-guds-btn';
import { LoginSignupBtn } from '@/utils/login-signup-button';

const DashboardMobileCard = () => {
  const router = useRouter();
  const navigateToGitbook = () => {
    router.replace('https://foundationblockchain.gitbook.io/gusd-protocol');
  };

  return (
    <div className="flex flex-col gap-3 p-3 items-center justify-center   w-[100%] h-auto">
      <div className="flex  items-center justify-center text-white">
        <div className="flex items-center flex-col justify-center">
          <a
            href="https://foundationblockchain.gitbook.io/gusd-protocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt={''}
              src={button2}
              className={'mx-2 cursor-pointer'}
              height={60}
              width={60}
            />
          </a>
          <h1>Docs</h1>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Link href={'/nftconnect/buy'}>
            <Image
              alt={''}
              src={buybutton}
              className={'mx-2 cursor-pointer'}
              height={60}
              width={60}
            />
          </Link>
          <h1>Fast Buy</h1>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Link href={'/nftconnect/swap'}>
            <Image
              alt={''}
              src={button1}
              className={'mx-2 cursor-pointer'}
              height={60}
              width={60}
            />
          </Link>
          <h1>Stake</h1>
        </div>
      </div>
      <div className="pb-10">
        <SwapNFTSlider />
      </div>
      <div className="flex gap-1">
        <div className="flex flex-col gap-12 w-full">
          <div className="relative h-[200px]">
            <Image src={diamond} alt="diamond" className="w-[150px]" />
            <div className="absolute top-[40%] right-0">
              <BuyGudsBtn url={'/nftconnect/swap'} />
            </div>
          </div>
          <div>
            <LoginSignupBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMobileCard;
