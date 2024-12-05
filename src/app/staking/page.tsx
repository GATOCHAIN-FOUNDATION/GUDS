import React from 'react';
import dynamic from 'next/dynamic';
const StakingCard = dynamic(() => import('@/components/staking/staking-card'));
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));

const Staking = () => {
  return (
    <MobileLayout>
      <div className="flex items-center justify-center h-full w-full ">
        <StakingCard />
        <br />
      </div>
    </MobileLayout>
  );
};

export default Staking;
