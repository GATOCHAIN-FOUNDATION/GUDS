'use client';

import React from 'react';
import btc from '@/assests/coins/btc.png';
import eth from '@/assests/coins/eth.png';
import bnb from '@/assests/coins/bnb.png';
import usdt from '@/assests/coins/usdt.png';
import sol from '@/assests/coins/sol.png';
import xrp from '@/assests/coins/xrp.png';
import usdc from '@/assests/coins/usdc.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const divData = [
  {
    bgcolor: 'bg-white',
    textcolor: 'text-black/80',
    content: 'Popular',
    border: 'border',
    bordercolor: '',
  },
  {
    bgcolor: 'bg-black/20',
    textcolor: 'text-white/80',
    content: 'Metaverse',
    border: '',
    bordercolor: 'bg-white/20',
  },
  {
    bgcolor: 'bg-black/20',
    textcolor: 'text-white/80',
    content: 'NFT',
    border: '',
    bordercolor: 'bg-white/20',
  },
  {
    bgcolor: 'bg-black/20',
    textcolor: 'text-white/80',
    content: 'ReFi',
    border: '',
    bordercolor: 'bg-white/20',
  },
  {
    bgcolor: 'bg-black/20',
    textcolor: 'text-white/80',
    content: 'Gaming',
    border: '',
    bordercolor: 'bg-white/20',
  },
  {
    bgcolor: 'bg-black/20',
    textcolor: 'text-white/80',
    content: 'Music',
    border: '',
    bordercolor: 'bg-white/20',
  },
  {
    bgcolor: 'bg-black/20',
    textcolor: 'text-white/80',
    content: 'See All 12+',
    border: '',
    bordercolor: 'bg-white/20',
  },
];
const divData1 = [
  {
    no: '1',
    name: 'Bitcoin ',
    symbol: 'BTC',
    change: '1.41%',
    lp: '$56,623.54',
    image: btc,
  },
  {
    no: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    change: '2.22%',
    lp: '$4,267.90',
    image: eth,
  },
  {
    no: '3',
    name: 'Binance ',
    symbol: 'BNB',
    change: '-0.82%',
    lp: '$587.74',
    image: bnb,
  },
  {
    no: '4',
    name: 'Tether',
    symbol: 'USDT',
    change: '-0.03%',
    lp: '$0.9998',
    image: usdt,
  },
  {
    no: '5',
    name: 'Solana ',
    symbol: 'SOL',
    change: '-0.53%',
    lp: '$213.67',
    image: sol,
  },
  {
    no: '6',
    name: 'XRP',
    symbol: 'XRP',
    change: '-0.44%',
    lp: '$1.04',
    image: xrp,
  },
  {
    no: '7',
    name: 'USD Coin',
    symbol: ' USDC',
    change: '-0.3%',
    lp: '$1.00',
    image: usdc,
  },
];

const PoolsContainer = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="flex w-[100%] flex-col items-center justify-center ">
      <div className="w-[90%] flex ">
        <h1 className="font-meb text-3xl text-white/40 my-2 ">POOLS</h1>
      </div>
      {isMobile ? (
        ''
      ) : (
        <div className="w-[90%] flex items-center  justify-end my-4 ">
          {' '}
          {divData.map((item, index) => (
            <div
              key={index}
              className={` p-2 ${item.bgcolor} ${item.textcolor} ${item.bordercolor} ${item.border} text-black text-base text-center mx-2 rounded-[5px] font-dmsans `}
            >
              {item.content}
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center flex-col w-[90%] text-[#B6B6B6] bg-black/20 font-dmsans p-4">
        <div className="flex  w-[100%] items-center justify-between ">
          {isMobile ? (
            <div className="w-[0%] hidden"></div>
          ) : (
            <div className="w-[8%] ">NO</div>
          )}
          {isMobile && <div className="w-[10%]">Coin</div>}
          <div className="w-[28%]">NAME</div>
          {isMobile ? (
            <div className="w-[50%]">LAST PRICE</div>
          ) : (
            <div className="w-[18%]">LAST PRICE</div>
          )}
          {isMobile ? (
            <div className="w-[0%] hidden"></div>
          ) : (
            <div className="w-[18%]">CHANGE</div>
          )}
          {isMobile ? (
            <div className="w-[0%] hidden"></div>
          ) : (
            <div className="w-[18%]">MARKET STATS</div>
          )}
          {isMobile ? (
            <div className="w-[0%] hidden"></div>
          ) : (
            <div className="w-[18%] ">TRADE</div>
          )}
        </div>
        {divData1.map((item, index) => (
          <div
            key={index}
            className={`flex  w-[100%] items-center justify-between`}
          >
            {isMobile ? (
              <div className="w-[0%] hidden"></div>
            ) : (
              <div className="w-[8%] ">{item.no}</div>
            )}
            {isMobile && (
              <div className="w-[10%]">
                <Image alt={'coins'} src={item.image} height={20} width={20} />
              </div>
            )}
            {isMobile ? (
              <div className="w-[30%] flex items-center justify-start">
                <div></div>
                <div className="mx-3">{item.name}</div>
              </div>
            ) : (
              <div className="w-[28%] flex items-center justify-start">
                <div>
                  <Image
                    alt={'coins'}
                    src={item.image}
                    height={40}
                    width={40}
                  />
                </div>
                <div className="mx-3">{item.name}</div>
                <h1>|</h1>
                <div className="mx-3">{item.symbol}</div>
              </div>
            )}
            {isMobile ? (
              <div className="w-[50%] ">{item.lp}</div>
            ) : (
              <div className="w-[18%] ">{item.lp}</div>
            )}
            {isMobile ? (
              <div className="w-[0%] hidden"></div>
            ) : (
              <div className="w-[18%]">{item.change}</div>
            )}
            {isMobile ? (
              <div className="w-[0%] hidden"></div>
            ) : (
              <div className="w-[18%]">{item.change}</div>
            )}
            {isMobile ? (
              <div className="w-[0%] hidden"></div>
            ) : (
              <div className="w-[18%]">
                <div className="p-2 my-2 bg-[#0FAE96] rounded-[5px] text-center text-white w-[120px] cursor-pointer ">
                  Trade
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div></div>
      <div className="w-[90%] font-dmsans my-2 text-[#0FAE96] underline">
        <h1>See All Coins</h1>
      </div>
    </div>
  );
};

export default PoolsContainer;
