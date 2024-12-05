import React, { useState } from 'react';
import Image from 'next/image';
import 'animate.css';
import bnb from '@/assests/coins/bnb.png';
import btc from '@assests/coins/btc.png';
import eth from '@/assests/coins/eth.png';
// import sol from "../../public/assests/coins/sol.png";
import usdc from '@/assests/coins/usdc.png';
import usdt from '@/assests/coins/usdt.png';
import wbtc from '@/assests/coins/wbtc.png';
const CoinsDropdown = () => {
  const coinDropdownList = [
    { id: 1, text: 'usdt', icon: usdt },
    { id: 2, text: 'wbtc', icon: wbtc },
    { id: 3, text: 'eth', icon: eth },
    { id: 4, text: 'usdc', icon: usdc },
  ];
  const [show, setShow] = useState<boolean>(false);
  const [selectCoin, setSelectCoin] = useState<{ text: string; icon: any }>({
    text: 'wbtc',
    icon: wbtc,
  });

  const handleCoinChange = (text: string, icon: any) => {
    setSelectCoin({ text, icon });
    setShow(false);
  };

  return (
    <div className="relative flex flex-col items-center   ">
      <div
        onClick={() => setShow(!show)}
        className="flex relative w-[90px] items-center justify-center rounded-[50px] border px-2 m-2  "
      >
        <Image
          alt=""
          src={selectCoin.icon}
          className={'m-1 cursor-pointer'}
          height={25}
          width={25}
        />{' '}
        <h1 className="uppercase"> {selectCoin.text}</h1>{' '}
        <Image
          alt={''}
          className="cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdUlEQVR4nO3PQQrCMBBA0dRFUfCW3Xm6ouBGQTzZK4Mt1BCkRMFN/nIm8/lJqdH4HdjV7IpgwAPHwu6AG07l6wx0OHtxD0Emi5n5TZe2gB7jfPiM0lVZcMV+kyyTXlalS1nM+lSD99K6sg/S72WZtO6bjf8zAZ6opZyGq6T+AAAAAElFTkSuQmCC"
        />
      </div>
      {show && (
        <ul
          className="absolute  bg-black rounded-[10px] border overflow-auto h-[150px] animate__animated animate__animate__backInDown animate__delay-2s  "
          style={{ top: '47px', zIndex: 30 }}
        >
          {coinDropdownList.map((icon, index) => (
            <li
              onClick={() => handleCoinChange(icon.text, icon.icon)}
              className={`flex hover:bg-white cursor-pointer w-[90px] items-center justify-start   ${
                index === coinDropdownList.length - 1
                  ? 'border-b-0'
                  : 'border-b '
              }  m-2 `}
              style={{ borderColor: '#6e6e6e' }}
              key={icon.id}
            >
              <Image
                alt=""
                src={icon.icon}
                className={'m-1 cursor-pointer'}
                height={25}
                width={25}
              />{' '}
              <h1 className="uppercase"> {icon.text}</h1>{' '}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoinsDropdown;
