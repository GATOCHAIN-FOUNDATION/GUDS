'use client';
import Image from 'next/image';
import RightArrow from '@/assests/icons/rightArrow.png';
import profile from '@/assests/icons/footerIcons/profile.png';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Footer2 = () => {
  const { data: session } = useSession();

  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    if (!session) {
      setFlag(true);
    }
  }, [session]);

  return (
    <>
      <div className="flex  w-[100%] z-20 items-center   text-xs font-dmsans ">
        <div className="flex flex-col justify-between  w-[100%]">
          {flag && (
            <>
              <div className="flex items-center justify-between w-[80%] border-b-[1px] mb-2 py-2">
                <h1 className="text-white">
                  Subscribe to Gato Legacy Passport
                </h1>
                <Image
                  alt="RightArrow"
                  src={RightArrow}
                  className={''}
                  height={15}
                  width={15}
                />
              </div>
              <div className="flex items-center justify-start w-[80%] mb-2 ">
                <input
                  type="checkbox"
                  className="form-checkbox border-1 bg-transparent border-gray-100 rounded-5 accent-gray-700 p-1 w-4 h-4"
                  style={{ backgroundColor: `black` }}
                />

                <h1 className="text-white ml-2">
                  I agree to term and conditions{' '}
                </h1>
              </div>
            </>
          )}
        </div>
        <br />
        <div className="flex flex-col items-end justify-end  w-[80%] mb-2">
          <div className="flex gap-4 items-center py-7">
            <div className="border-b border-[#B384FF] w-[47px]"></div>

            <div className="flex gap-3 items-center">
              <Link href="/profile">
                {' '}
                <Image
                  src={profile}
                  alt=""
                  className="aspect-square h-[22.03px] w-[18.47px] mb-2 cursor-pointer"
                />{' '}
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Footer2;
