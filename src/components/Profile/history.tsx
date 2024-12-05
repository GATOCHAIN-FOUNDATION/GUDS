'use client';
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import cross from '@/assests/icons/cross.png';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import GudsCoin from '@/assests/icons/bscscan-logo.png';

const shortenHash = (hash: any, startLength = 6, endLength = 4) => {
  return `${hash.substring(0, startLength)}...${hash.substring(
    hash.length - endLength
  )}`;
};

const History = () => {
  const [transaction, setTransaction] = useState([]);
  const { address, isConnected } = useWeb3ModalAccount();

  const fetchTransaction = useCallback(() => {
    axios
      .get(
        `https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0xE8DEcA18c1F09274B6ADb2510AE238bBcA9408aB&address=${address}&page=1&offset=5&sort=asc&apikey=ZQQCNVGMETDN77GCAXQ1P4RV3FGCN5VVA8`
      )
      .then(function (response) {
        console.log(response, 'Transaction res');
        setTransaction(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, [address]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetchTransaction();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [fetchTransaction]);

  return (
    <div
      className={`flex ${
        isMobile ? 'w-[90%]' : 'w-[70%]'
      } flex-col items-center justify-center p-5 h-[400px] border-purple-500 border realtive ${
        isMobile && 'rounded-[20px]'
      }`}
      style={{
        background: `rgba(0, 0, 0, 0.2)`,
        backdropFilter: `blur(75px)`,
      }}
    >
      <Link href={'/profile'}>
        {' '}
        <Image
          alt="cross"
          src={cross}
          className={'absolute right-5 cursor-pointer top-5'}
          height={15}
          width={15}
        />
      </Link>
      {isConnected ? (
        <h1 className={`font-meul text-white  ${isMobile && 'text-xs'}`}>
          YOUR TRANSACTION ARE THERE
        </h1>
      ) : (
        <h1 className={`font-meul text-white  ${isMobile && 'text-xs'}`}>
          CONNECT YOUR WALLET FIRST
        </h1>
      )}
      {isConnected &&
        transaction.map((item: any) => {
          return (
            <>
              <div className="flex w-[90%] items-center justify-between p-2">
                <div className="flex items-center ">
                  <Image
                    alt="coin2"
                    src={GudsCoin}
                    className={''}
                    height={30}
                    width={30}
                  />
                  <h1 className="flex items-center  font-monl ml-2 text-white">
                    {item.tokenName}
                  </h1>
                </div>
                <h1 className=" font-monl text-white ">
                  {shortenHash(item?.hash)}
                </h1>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default History;
