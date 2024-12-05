'use client';

import getStipePromise from '@/lib/stripe';
import { FC } from 'react';

interface props {
  amount: any;
}

const StripeCheckOutButton: FC<props> = ({ amount }) => {
  const products = [
    {
      product: 1,
      name: 'Stripe Product',
      price: amount,
      image:
        'https://images.unsplash.com/photo-1574226516831-e1dff420e562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=225&q=80',
      quantity: 1,
    },
  ];
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch('/api/stripe-session/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div
      className="flex items-center justify-center font-meul absolute bottom-0 p-5 cursor-pointer rounded-[20px] bg-[#C3F847] text-black w-[100%] "
      onClick={handleCheckout}
    >
      {' '}
      CONFIRM
    </div>
  );
};

export default StripeCheckOutButton;
