'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Redirect = dynamic(() => import('@/components/Cards/Redirect'));
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import PopUpLayout from '@/components/common/pop-up-layout';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace('/dashboard');
    }
  }, [session, router]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
      <head></head>
      {isMobile ? (
        <MobileLayout>
          <div className="my-[15%]">
            <Redirect />
          </div>{' '}
        </MobileLayout>
      ) : (
        <PopUpLayout>
          <Redirect />
        </PopUpLayout>
      )}
    </>
  );
};

export default Login;
