'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Diamonds2 from '@/assests/logo/Diamonds2.png';

const PopupCard = dynamic(() => import('@/components/Cards/popup-card'));

const LandingMob = dynamic(
  () => import('@/components/landing-mobile/landing-mobile')
);
const Desktop = dynamic(() => import('@/components/common/Desktop'));

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setIsMobile(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsDesktop(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, isDesktop]);

  return (
    <>
      <head></head>
      {isMobile && <LandingMob />}
      {isDesktop && (
        <Desktop>
          <PopupCard image={Diamonds2} altHeading="diamonds" />{' '}
        </Desktop>
      )}
    </>
  );
};

export default Home;
