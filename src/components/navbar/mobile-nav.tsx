'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/assests/logo/logoMobile.png';
import WalletBtn from '@/assests/buttons/walletButton.png';
import WalletBtn1 from '@/assests/dashboard/walletconnectButtonYellow.png';
import Link from 'next/link';
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from '@web3modal/ethers/react';
import { usePathname } from 'next/navigation';
import { getTokenReservesAndPrices } from '@/utils/fetch-balance';

const MobileNav = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const pathname = usePathname();
  const [gudsPrice, setGudsPrice] = React.useState(0);
  const { walletProvider } = useWeb3ModalProvider();
  React.useEffect(() => {
    // Simulate fetching GUDS price from an API or contract
    const fetchGudsPrice = async () => {
      try {
        // Replace this with the actual fetch logic, such as calling an API or smart contract
        const { priceOfGUDS } = await getTokenReservesAndPrices(walletProvider); // Placeholder function
        console.log('Guds Price', priceOfGUDS);
        setGudsPrice(priceOfGUDS);
      } catch (error) {
        console.error('Error fetching GUDS price:', error);
      }
    };

    fetchGudsPrice();
  }, [gudsPrice,walletProvider]);
  console.log('Pathname:', pathname);
  return (
    <>
      <div className="flex flex-col z-0 justify-center  items-center gap-4 h-[128px] rounded-[30px] p-4 bg-[#000000] bg-opacity-25 backdrop-blur-[40px] shadow-md w-[99%]">
        <div className="flex justify-center items-center relative gap-10 w-full -mt-8">
          <Link href="/nftconnect/buy">
            {' '}
            {pathname == '/login' || pathname == '/signup' ? (
              <button className="flex justify-center items-center h-[24px] w-[103px] bg-transparent rounded-[20px] text-[12px] font-meul uppercase"></button>
            ) : (
              <button className="flex justify-center items-center h-[24px] w-[103px] bg-[#C3F847] rounded-[20px] text-[12px] font-meul uppercase">
                buy guds
              </button>
            )}
          </Link>
          <div className="h-[60.15px] z-20 w-[67.6px] mt-[38px] mr-5">
            <Link href="/dashboard">
              {' '}
              <Image src={Logo} alt={'logo'} />
            </Link>
          </div>
          <button className="h-[30px] w-[65px]">
            {isConnected ? (
              <Image src={WalletBtn1} alt="wallet btn" onClick={() => open()} />
            ) : (
              <Image src={WalletBtn} alt="wallet btn" onClick={() => open()} />
            )}
          </button>
        </div>

        <div className="flex items-center border -mt-8 z-10 border-[#ffffff] relative px-2 rounded-[20px] w-full h-[27px]">
          <div className="font-meul italic text-[#ffffff] text-[12px] uppercase">
            guds price
          </div>

          <div className="flex justify-center absolute right-1 w-[140px] h-[19px] text-[7px] font-meul bg-[#C3F847] rounded-[20px] items-center uppercase">
            ${gudsPrice} USD / {3.57 * gudsPrice} AED
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
