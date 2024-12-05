import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '@/assests/background_images/profile2.png';
import diamond from '@/assests/logo/Diamonds2.png';
import logo from '@/assests/dashboard/logo.png';
import walletconnect from '@/assests/dashboard/walletconnectButton.png';
import walletconnect1 from '@/assests/dashboard/walletconnectButtonYellow.png';
import gem from '@/assests/dashboard/gem.png';
import AddIcon from '@/assests/logo/Add.png';
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from '@web3modal/ethers/react';
import { LoginSignupBtn } from '@/utils/login-signup-button';
import ProcessRadioBtn from '@/utils/process-radio-button';
import dynamic from 'next/dynamic';

const DashboardHistory = dynamic(() => import('./dashboard-history'));
const DashboardGudsBuy = dynamic(() => import('./dashboard-guds-buy'));
const DashboardLinks = dynamic(() => import('./dashboard-links'));

import { Suspense } from 'react';
import { getTokenReservesAndPrices } from '@/utils/fetch-balance';
const DashboardCard = () => {
  const { open } = useWeb3Modal();

  const { isConnected } = useWeb3ModalAccount();
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
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="flex items-center justify-center tablet:items-start w-[100%] h-full overflow-auto scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded ">
        <div className="flex w-[71%] h-[100%] tablet:flex-col tablet:w-[50%]">
          <DashboardLinks />
          <div className="flex flex-col items-start justify-between gap-10 py-5 px-2 w-[50%] tablet:w-[100%] h-full tablet:h-auto">
            <DashboardGudsBuy />

            <div className="flex items-center justify-start  w-[98%]">
              <div className="w-[500px] flex items-center justify-center border p-1 rounded-[50px] mt-8">
                <h1 className="w-[40%] font-meul text-white text-xs text-center">
                  GATO PRICE INDEX
                </h1>
                <div className="w-[60%] border font-meul text-black rounded-[50px] text-xs text-center p-1 bg-[#C3F847]">
                  ${gudsPrice} USD / {3.57 * gudsPrice} AED
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between  w-[100%]">
              <div className="w-[25%] flex flex-col justify-between bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md rounded-[20px] h-[200px] p-3 font-meul text-white text-2xl">
                <div className="w-[100%]">
                  <h1>PRE</h1>
                  <h1>ORD</h1>
                  <h1>ER</h1>
                </div>
                <div className="flex w-[100%] items-center justify-end">
                  <Image
                    alt={''}
                    src={AddIcon}
                    className={'mx-2 cursor-pointer'}
                    height={60}
                    width={60}
                  />
                </div>
              </div>{' '}
              <div className=" flex flex-col w-[70%] rounded-[20px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl h-[200px] shadow-md p-3 font-meul text-white text-2xl ">
                <h1>Contract</h1>
                <h1>details</h1>{' '}
              </div>
            </div>

            <ProcessRadioBtn />
            <div className="flex items-center justify-between  w-[100%]">
              <div className="flex rounded-[20px]  items-center justify-center w-[50%] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md p-2 ">
                <Image
                  alt={''}
                  src={gem}
                  className={''}
                  height={70}
                  width={70}
                />
                <h1 className="font-meul text-white text-xs">Invite & Earn</h1>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center tablet:items-start justify-between gap-10 w-[28%] tablet:w-[50%] tablet:m-4 h-[100%]">
          <div className="flex items-center justify-end tablet:justify-start w-[98%]">
            <div className="flex w-[10%]"></div>
            <Link href="/profile" prefetch={true}>
              {' '}
              <Image
                alt={''}
                src={profile}
                className={'  ml-[80px] mt-[-30px]'}
                height={153}
                width={260}
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-end   w-[98%] cursor-pointer ">
            {isConnected ? (
              <Image
                alt={''}
                src={walletconnect1}
                className={'m-1 cursor-pointer'}
                height={80}
                width={106}
                onClick={() => open()}
              />
            ) : (
              <Image
                alt={''}
                src={walletconnect}
                className={'m-1 cursor-pointer'}
                height={80}
                width={106}
                onClick={() => open()}
              />
            )}
            <LoginSignupBtn />
          </div>
          <div className="flex items-center justify-end  w-[98%]">
            <Image
              alt={''}
              src={logo}
              className={'m-2 mr-4'}
              height={60}
              width={60}
            />
          </div>
          <div className="flex items-center justify-start  w-[98%]">
            <Image
              alt={''}
              src={diamond}
              className={'mx-2 mt-[-60px] w-[170px] aspect-auto'}
            />
          </div>

          <DashboardHistory />
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardCard;
