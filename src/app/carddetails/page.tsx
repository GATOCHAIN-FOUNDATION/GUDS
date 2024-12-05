'use client';
import { CardDetails } from '@/components/Cards/card-details';
import MobileLayout from '@/components/layout/mobile-layout';
import { Toaster } from 'react-hot-toast';
import { OrderProcessing } from '@/components/Cards/order-processing';
import React from 'react';
const page = () => {
  // const searchParams = useSearchParams();
  // const amount = searchParams!.get('amount');
  const trackTransaction = true;
  const amount = '';
  console.log(amount);
  return (
    <MobileLayout>
      <Toaster />
      <div className="flex flex-col items-center justify-center w-[100%]   ">
        <br />
        {trackTransaction ? (
          <OrderProcessing />
        ) : (
          <CardDetails amount={amount} />
        )}

        <br />
      </div>
    </MobileLayout>
  );
};

export default page;
