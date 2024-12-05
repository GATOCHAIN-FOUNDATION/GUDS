'use client';

import React from 'react';
import RocketLogo from '@/assests/logo/Rocketship.png';
import Logo from '@/assests/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-[100%]  h-[10%] ">
      <div className="flex items-center justify-end w-[50%]  ">
        <Image
          alt="Logo Icon Pic"
          src={Logo}
          className={'mr-2'}
          height={50}
          width={50}
        />
      </div>
      <div className="flex items-center justify-end w-[50%]  ">
        <h1 className="font-semibold mr-3 text-white font-meul ">WHY ?</h1>
        <Link href="/nftconnect/swap">
          {' '}
          <h1 className="font-semibold text-[#C3F847] mr-3 font-meul">BUY</h1>
        </Link>
        <Link href="/profile">
          {' '}
          <Image
            alt="Setting Icon Pic"
            src={RocketLogo}
            className={'mr-2'}
            height={50}
            width={50}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
