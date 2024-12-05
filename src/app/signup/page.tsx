'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
const Signup = dynamic(() => import('@/components/Signup/Signup'));
const Desktop = dynamic(() => import('@/components/common/Desktop'));

const SignupPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace('/nftconnect/swap');
    } else {
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
      {isMobile && <Signup />}{' '}
      {isDesktop && (
        <Desktop>
          <Signup />
        </Desktop>
      )}
      <Toaster
        position={isMobile ? 'bottom-center' : 'top-center'}
        containerStyle={{ zIndex: 10000000000 }}
      />
    </>
  );
};

export default SignupPage;
