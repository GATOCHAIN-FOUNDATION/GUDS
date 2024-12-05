'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MobileLayout from '@/components/layout/mobile-layout';
import { Thankyou } from '@/components/Cards/thank-you';

const ThankyouPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('dashboard'); // Redirect after a successful login
    }, 5000);
  });
  return (
    <MobileLayout>
      <Thankyou />
    </MobileLayout>
  );
};

export default ThankyouPage;
