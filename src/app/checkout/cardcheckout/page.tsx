'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Checkout from '@/components/Checkout/checkout';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
const page = () => {
  return (
    <MobileLayout>
      <Checkout />
    </MobileLayout>
  );
};

export default page;
