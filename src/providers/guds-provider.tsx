'use client';
import { getTokenReservesAndPrices } from '@/utils/fetch-balance';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useWeb3ModalProvider } from '@web3modal/ethers/react';

type GudsType = {
  trackTransaction: boolean;
  setTrackTransaction: React.Dispatch<React.SetStateAction<boolean>>;
  gudsPrice: number;
  setGudsPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const GudsContext = createContext<GudsType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(GudsContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export const GudsProvider = ({ children }: { children: React.ReactNode }) => {
  const [trackTransaction, setTrackTransaction] = useState(false);
  const [gudsPrice, setGudsPrice] = useState(0);
  const { walletProvider } = useWeb3ModalProvider();
  useEffect(() => {
    // Simulate fetching GUDS price from an API or contract
    const fetchGudsPrice = async () => {
      try {
        const { priceOfGUDS } = await getTokenReservesAndPrices(walletProvider);
        setGudsPrice(priceOfGUDS);
      } catch (error) {
        console.error('Error fetching GUDS price:', error);
      }
    };

    fetchGudsPrice();
  }, [gudsPrice,walletProvider]);

  return (
    <GudsContext.Provider
      value={{
        trackTransaction,
        setTrackTransaction,
        gudsPrice,
        setGudsPrice,
      }}
    >
      {children}
    </GudsContext.Provider>
  );
};
