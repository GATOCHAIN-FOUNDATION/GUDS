'use client';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import stakecard from '@/assests/background_images/stakecard.png';
import axios from 'axios';
import { Loader } from '@/utils/Loader';

const divData = [
  {
    bgcolor: 'bg-[#FFFFFF]',
    textcolor: 'text-black',
    content: '12%',
    border: 'border',
    bordercolor: 'border-black',
    balance: 5000,
  },
  {
    bgcolor: 'bg-[#AF7DFF]',
    textcolor: 'text-black',
    content: '15%',
    border: '',
    bordercolor: '',
    balance: 10000,
  },
  {
    bgcolor: 'bg-[#C3F847]',
    textcolor: 'text-black',
    content: '18%',
    border: '',
    bordercolor: '',
    balance: 50000,
  },
  {
    bgcolor: 'bg-[#AF7DFF]',
    textcolor: 'text-black',
    content: '20%',
    border: '',
    bordercolor: '',
    balance: 100000,
  },
  {
    bgcolor: 'bg-[#000000]',
    textcolor: 'text-purple-900',
    content: 'VIP',
    border: '',
    bordercolor: '',
    balance: 0,
  },
];

const StakingCard = () => {
  const [stakeBalance, setStakeBalance] = useState(5000);
  const [amount, setAmount] = useState(5000);
  const [selectedOption, setSelectedOption] = useState('12%');
  const [loading, setLoading] = useState(false);

  const nonActiveTab = { bgcolor: 'bg-[#EDEDED]', textcolor: 'text-black' };

  const fetchNFT = useCallback(() => {
    setLoading(true);

    axios
      .get(
        `https://ipfs.io/ipfs/${
          selectedOption === '12%'
            ? 'QmWqNS7o57zKUVyvkQhwnoWmmy8AFZnxS9efMEPMPK5FgJ'
            : selectedOption === '15%'
              ? 'Qmb5oHrqVxAtotAYu7H9Vzzu8uNTbagky2xNUuadNSWUu7'
              : selectedOption === '18%'
                ? 'QmVvaUHXSoPuXfmwLHpyUnFTjJ4gw79GXHCZPRyFmzoA7E'
                : selectedOption === '20%' &&
                  'Qme8s7U6KtxSgR4FQgENNmqfknZgDwBtX1KgquMj5594Fn'
        }`
      )
      .then(function (response) {
        console.log(response, 'NFT res');
        // setShowNFT(response.data.image);
        setAmount(response.data.price);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
        // always executed
      });
  }, [selectedOption]);

  useEffect(() => {
    fetchNFT();
    if (selectedOption === 'VIP') {
      setAmount(0);
    }
  }, [selectedOption, fetchNFT]);

  return (
    <div className="w-[400px] h-[750px] mx-10 my-10 bg-[#FEFEFE] rounded-[20px]  flex flex-col relative">
      <div className="font-meul flex items-center justify-center py-4 text-xs">
        Magnify your choice
      </div>
      <div className="font-meul flex items-center justify-start p-4 text-7xl text-black/20 ">
        Earn
      </div>
      <div className="flex w-[100%] items-center justify-center  mt-[-100px]">
        {' '}
        <Image
          src={stakecard}
          alt="Image A"
          width={350}
          height={150}
          className={'z-[100]'}
        />
      </div>
      <div className="font-meul flex items-center justify-start p-4 text-5xl text-black/20 mt-[-20px]">
        Fundraise
      </div>
      <div className="font-meul flex items-center justify-start px-4 text-xs text-[#C3F847] ">
        Early Bids limited offer
      </div>
      <div className="font-meb flex items-center justify-start px-4 text-base  ">
        Investor pass #112
      </div>
      <div className="font-meul flex items-center justify-start px-4 text-3xl ">
        $ {loading ? <Loader /> : ` ${amount}`}
      </div>
      <div className="font-meul flex items-center justify-start px-8 text-[9px] my-2 ">
        Explore Early Bird Packages for Staking
      </div>
      <div className="flex items-center justify-center w-[100%]">
        <div className="flex items-center justify-between w-[95%]">
          {divData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setStakeBalance(item.balance);
                setSelectedOption(item.content);
              }}
              className={`w-[18%] py-5 px-2 cursor-pointer ${
                stakeBalance === item.balance
                  ? `${item.bgcolor} ${item.textcolor} ${item.bordercolor} ${item.border}`
                  : `${nonActiveTab.bgcolor} ${nonActiveTab.textcolor}`
              }  text-xs text-center mx-2 rounded-[10px] font-meul`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="font-meul flex items-center justify-start p-4 text-xs ">
        Your Contract Details
      </div>
      <div className="font-meul flex items-center justify-start px-4 w-[100%]   text-xs ">
        <span className="text-base underline">$1534</span> /daily claiming &{' '}
        <span className="text-[#C3F847]"> rewards</span>{' '}
      </div>
      <div className="font-meul flex items-center justify-start px-4 w-[100%]   text-xs">
        <span className="text-base text-[#C3F847]/90">
          +12 <span className="underline">%</span>
        </span>{' '}
        APY*{' '}
      </div>
      <div className="font-meul flex items-center justify-start px-4 w-[100%]   text-base ">
        = {stakeBalance} GUDS{' '}
      </div>
      <Link href={`/checkout/stake/${stakeBalance}`}>
        <div className="font-meul flex items-center justify-center p-4 w-[100%] rounded-[20px]  cursor-pointer text-base absolute bottom-0 bg-[#C3F847]">
          CONFIRM
        </div>
      </Link>
    </div>
  );
};

export default StakingCard;
