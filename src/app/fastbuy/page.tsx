import React from 'react';
import dynamic from 'next/dynamic';
const FastBuyCard = dynamic(
  () => import('@/components/fast-buy/fast-buy-card')
);
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
const FastBuy = () => {
  return (
    <div>
      <MobileLayout>
        <div className="flex items-center justify-center w-[100%] h-screen ">
          <FastBuyCard />
        </div>
      </MobileLayout>
    </div>
  );
};

export default FastBuy;
