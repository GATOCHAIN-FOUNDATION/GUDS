import React from 'react';
import BuyGudsBtn from '@/utils/buy-guds-btn';

const DashboardGudsBuy = () => {
  return (
    <div className="flex flex-col items-start justify-between relative  w-[320px] rounded-[20px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md h-[230px] px-6 py-6">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-meb text-white ">
          GU<span className="font-meul">D</span>S
        </h1>{' '}
        <h1 className=" text-white font-meul mt-2 ml-2 text-xs">balance</h1>
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-meul  text-white">0.0000.0</h1>
      </div>
      <div className="absolute right-[-100px] top-[40%]">
        <BuyGudsBtn url="/nftconnect/buy" />
      </div>
    </div>
  );
};

export default DashboardGudsBuy;
