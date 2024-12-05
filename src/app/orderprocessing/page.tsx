import React from 'react';
import { OrderProcessing } from '@/components/Cards/order-processing';
import MobileLayout from '@/components/layout/mobile-layout';
const page = () => {
  return (
    <div>
      <MobileLayout>
        <OrderProcessing />
        {/* < OrderProcessing/> */}
      </MobileLayout>
    </div>
  );
};

export default page;
