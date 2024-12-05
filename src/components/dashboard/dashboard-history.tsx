import React from 'react';
import Image from 'next/image';
import icon1 from '@/assests/dashboard/icon1.png';
import Link from 'next/link';

const DashboardHistory = () => {
  return (
    <div className="flex flex-col items-center justify-start  w-[98%] py-5 rounded-[20px] m-2 text-xs font-dmsans text-white bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md ">
      <div className="flex items-center justify-between  w-[90%] mx-3">
        <h1>HISTORY</h1>
        <Link href="/profile/history">
          {' '}
          <h1 className="text-blue-400 cursor-pointer">See All</h1>
        </Link>
      </div>
      <br />
      <div className="flex items-center justify-between  w-[90%] m-1">
        <div className="flex items-center justify-center">
          {' '}
          <Image
            alt={''}
            src={icon1}
            className={'m-1'}
            height={18}
            width={18}
          />{' '}
          <h1>Akhirnya Joko bayar</h1>
        </div>
        <h1 className="text-blue-400">+0.025</h1>
        <h1>08/26/2018</h1>
      </div>
      <div className="flex items-center justify-between  w-[90%] m-1">
        <div className="flex items-center justify-center">
          {' '}
          <Image
            alt={''}
            src={icon1}
            className={'m-1'}
            height={18}
            width={18}
          />{' '}
          <h1>Cicilan mobil</h1>
        </div>
        <h1 className="text-red-400">-5.23%</h1>
        <h1>08/26/2018</h1>
      </div>
      <div className="flex items-center justify-between  w-[90%] m-1">
        <div className="flex items-center justify-center">
          {' '}
          <Image
            alt={''}
            src={icon1}
            className={'m-1'}
            height={18}
            width={18}
          />{' '}
          <h1>Langganan odobe CCl</h1>
        </div>
        <h1 className="text-red-400">-5.23%</h1>
        <h1>08/26/2018</h1>
      </div>
    </div>
  );
};

export default DashboardHistory;
