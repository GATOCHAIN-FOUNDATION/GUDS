import React from 'react';
import Image from 'next/image';
import Back from '@/assests/icons/Back.png';
import Creditcard from '@/assests/cards/CCard.png';

const checkout = () => {
  return (
    <div className="relative flex flex-col justify-start items-center  shadow-lg w-[345px] bg-white h-[700px] rounded-[10px]">
      <div className="flex mt-5 items-center justify-center  font-meb text-center">
        <div className=" ml-5 mb-[10px] p-2 rounded-[50px] bg-slate-100 w-[30px] left-1 absolute ">
          <Image
            src={Back}
            className={'  '}
            alt="back"
            width={30}
            height={30}
          />
        </div>
        <h1>Payment</h1>
      </div>
      <div>
        <Image
          alt="Credit card"
          width={300}
          src={Creditcard}
          height={200}
          className="my-3 shadow-lg "
        />
      </div>
      <form className="w-[100%] flex-col items-center justify-center flex ">
        <div className="flex w-[90%] rounded-lg items-center justify-center p-2 bg-[#9775FA]/20 font-dmsans text-[#9775FA] border border-[#9775FA] ">
          Add new card
        </div>
        <div className="flex flex-col  w-[90%] items-start my-2 justify-start font-dmsans ">
          <h1>Card Owner</h1>
          <input className="bg-slate-100 w-[100%] outline-none p-2 rounded-lg " />
        </div>
        <div className="flex flex-col  w-[90%] items-start my-2 justify-start font-dmsans ">
          <h1>Card Number</h1>
          <input className="bg-slate-100 w-[100%] outline-none p-2 rounded-lg " />
        </div>
        <div className="flex   w-[90%] items-start my-2 justify-start font-dmsans ">
          <div className="w-[50%]  mr-2 flex-col flex">
            <h1>EXP</h1>
            <input className="bg-slate-100 w-[100%] outline-none p-2 rounded-lg " />
          </div>
          <div className="w-[50%]  ml-2 flex-col flex">
            {' '}
            <h1>CVV</h1>
            <input className="bg-slate-100 w-[100%] outline-none p-2 rounded-lg " />
          </div>
        </div>
        <div className="w-[90] flex ">Save card Info </div>
      </form>
    </div>
  );
};

export default checkout;
