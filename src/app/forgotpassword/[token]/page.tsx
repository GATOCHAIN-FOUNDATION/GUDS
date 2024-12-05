'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Diamonds2 from '@/assests/logo/Diamonds2.png';
const LoginCard = dynamic(() => import('@/components/Cards/login-card'));
const ResetPasswordCard = dynamic(
  () => import('@/components/Cards/reset-password')
);
const Desktop = dynamic(() => import('@/components/common/Desktop'));
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';

import { Toaster } from 'react-hot-toast';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));

const ForgotPassword = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { token } = useParams();

  useEffect(() => {
    if (session) {
      router.replace('/dashboard');
    }
  }, [session, router]);

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
        position={isMobile ? 'bottom-center' : 'top-center'}
        containerStyle={{ zIndex: 10000000000 }}
      />
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Prata&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      {isMobile && (
        <MobileLayout>
          <div className="my-[15%]">
            <ResetPasswordCard
              image={Diamonds2}
              altHeading="diamonds"
              token={token}
            />
          </div>
        </MobileLayout>
      )}
      {isDesktop && (
        <>
          <Desktop>
            <ResetPasswordCard
              image={Diamonds2}
              altHeading="diamonds"
              token={token}
            />
          </Desktop>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
