'use client';
import { AuthProvider } from './session-provider';
import { Web3Modal } from './web3-provider';
import { FC, ReactNode } from 'react';
import React from 'react';
import { GudsProvider } from './guds-provider';
interface props {
  children: ReactNode;
}

const Providers: FC<props> = ({ children }) => {
  return (
    <GudsProvider>
      <AuthProvider>
        <Web3Modal>{children}</Web3Modal>
      </AuthProvider>
    </GudsProvider>
  );
};

export default Providers;
