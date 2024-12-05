'use client';
import Image from 'next/image';
import profile from '@/assests/icons/footerIcons/profile.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const [flag, setFlag] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname, 'Path');
    if (pathname === '/login' || pathname === '/signup') {
      setFlag(true);
    }
  }, [pathname]);

  return (
    <>
      <div className="flex flex-col z-20 w-[320px] items-center justify-start text-xs font-dmsans">
        {flag && (
          <>
            <div className="flex items-center justify-between w-[80%] border-b-[1px] mb-2 py-2"></div>
            <div className="flex items-center justify-start w-[80%] mb-2 ">
              <h1 className="text-white ml-2"></h1>
            </div>
          </>
        )}
        <br />
        <div className="flex flex-col items-start justify-start w-[80%] mb-2">
          <div className="flex gap-4 items-center py-7">
            <h3 className="text-[12px] text-[#B384FF] font-dmsans"></h3>
            <div className="border-b border-[#B384FF] w-[47px]"></div>
            <div className="flex gap-3 items-center">
              <Link href="/profile">
                {' '}
                <Image
                  src={profile}
                  alt=""
                  className="aspect-square h-[22.03px] w-[18.47px] mb-2  cursor-pointer "
                />
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Footer;
