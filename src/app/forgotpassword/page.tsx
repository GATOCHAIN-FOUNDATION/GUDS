'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Diamonds2 from '@/assests/logo/Diamonds2.png';
const LoginCard = dynamic(() => import('@/components/Cards/login-card'));
import { nanoid } from 'nanoid';

import toast, { Toaster } from 'react-hot-toast';
const ForgotPasswordCard = dynamic(
  () => import('@/components/Cards/forgot-password')
);
const Desktop = dynamic(() => import('@/components/common/Desktop'));
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));

const ForgotPassword = () => {
  const router = useRouter();

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

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, isDesktop]);
  return (
    <>
      <Toaster
        position={isMobile ? 'bottom-center' : 'top-right'}
        containerStyle={{ zIndex: 10000000000 }}
      />
      <head></head>
      {isMobile && (
        <MobileLayout>
          <div className="my-[15%]">
            <ForgotPasswordCard image={Diamonds2} altHeading="diamonds" />
          </div>
        </MobileLayout>
      )}
      {isDesktop && (
        <>
          <Desktop>
            <ForgotPasswordCard image={Diamonds2} altHeading="diamonds" />
          </Desktop>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
