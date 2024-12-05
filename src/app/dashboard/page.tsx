'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Desktop from '@/components/common/Desktop2';
const DashboardCard = dynamic(
  () => import('@/components/dashboard/dashboard-card')
);
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
const DashboardMobileCard = dynamic(
  () => import('@/components/dashboard/dashboard-mobile-card')
);
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Home = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

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
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Prata&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      {isMobile && (
        <MobileLayout>
          <DashboardMobileCard />
        </MobileLayout>
      )}
      {isDesktop && (
        <Desktop>
          <DashboardCard />
        </Desktop>
      )}
    </>
  );
};

export default Home;
