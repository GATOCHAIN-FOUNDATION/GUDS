import React from 'react';
import Image from 'next/image';
import Cart from '@/assests/logo/Cart.png';

const cart = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  w-[345px] bg-white h-[700px] rounded-[10px]">
      <div className="w-[100%]  absolute top-0 mt-[10px] flex items-center justify-center font-dmsans">
        <div className="p-2 flex items-center justify-center w-[50%] border-b-[1px] border-black ">
          My Bag
        </div>
        <div className="flex p-2 items-center justify-center w-[50%] border-b-[1px] border-slate-200 ">
          Wishlist
        </div>
      </div>
      <div className="flex flex-col w-[60%] items-center justify-center ">
        <Image
          className="mb-5"
          src={Cart}
          alt="cart"
          height={100}
          width={100}
        />{' '}
        <h1 className="text-center text-slate-500 font-dmsans">
          Please continue shopping to see your product here
        </h1>
      </div>
      <div className="absolute bottom-0 w-[100%] bg-black rounded-br-[10px] rounded-bl-[10px] p-4 flex items-center justify-center text-white font-meul ">
        Buy Now
      </div>
    </div>
  );
};

export default cart;
