'use client';
import React, { useState, useEffect } from 'react';
import background from '@/assests/background_images/popup_bg.png';
import Footer from '../footer/footer-v1';
import Footer2 from '../footer/footer-v2';
import Image from 'next/image';
import MobileNav from '../navbar/mobile-nav';
import { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const MobileLayout: FC<layoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col relative min-h-[100vh] max-h-full bg-cover bg-center justify-between items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={background}
            alt="Background"
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="absolute inset-0 w-full h-full backdrop-blur-2xl"></div>

        <div className="flex items-center justify-center w-[100%] top-0 z-[9999]">
          {isMobile && <MobileNav />}
        </div>

        <div className="pt-[10px] my-2 z-[20] w-[100%] flex items-center justify-center ">
          {children}
        </div>

        {isMobile ? (
          <div className="  top-[100%] flex justify-center w-full z-[20]">
            <Footer />
          </div>
        ) : (
          <div className="  top-[100%] flex justify-center w-[70%] z-[20]">
            <Footer2 />
          </div>
        )}
      </div>
    </>
  );
};

export default MobileLayout;
