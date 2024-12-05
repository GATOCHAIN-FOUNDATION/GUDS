import React from 'react';
import Image from 'next/image';
import button1 from '@/assests/dashboard/button1.png';
import button2 from '@/assests/dashboard/button2.png';
import card1 from '@/assests/dashboard/card1.png';
import card2 from '@/assests/dashboard/card2.png';
import buybutton from '@/assests/icons/menu.png';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const SwapNFTSlider = dynamic(() => import('@/utils/swap-nft-slider'));

const DashboardLinks = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10  w-[50%] tablet:w-[100%] h-[100%] tablet:h-auto">
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
          <Link href={'/nftconnect/buy'} prefetch={true}>
            <Image
              alt={''}
              src={buybutton}
              className={'mx-2'}
              height={60}
              width={60}
            />
          </Link>
          <h1>Fast Buy</h1>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Link href={'/nftconnect/swap'} prefetch={true}>
            <Image
              alt={''}
              src={button1}
              className={'mx-2'}
              height={60}
              width={60}
            />
          </Link>
          <h1>Stake</h1>
        </div>
      </div>
      <div className="flex  items-center justify-center  w-[98%]">
        <Image
          alt={''}
          src={card1}
          className={'mx-2'}
          height={70}
          width={317}
        />
      </div>
      <div className="flex items-center justify-center  w-[98%]">
        <Link href="/swappingoffer" prefetch={true}>
          {' '}
          <SwapNFTSlider />{' '}
        </Link>
      </div>
      <div className="flex  items-center justify-center  w-[98%]">
        <Link href="/staking" prefetch={true}>
          {' '}
          <Image
            alt={''}
            src={card2}
            className={'mx-2 cursor-pointer'}
            height={203}
            width={315}
          />
        </Link>
      </div>
    </div>
  );
};

export default DashboardLinks;
