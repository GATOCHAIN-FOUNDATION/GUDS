'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import backgroundImage from '@/assests/background_images/background2.jpg';
import Logo2 from '@/assests/logo/logo2.png';
import Wallet from '@/assests/icons/Wallet.png';
import Transaction from '@/assests/icons/Transaction.png';
import History from '@/assests/icons/History.png';
import Rocket from '@/assests/logo/Rocketship.png';
import WalletConnect from '@/assests/icons/WalletConnect.png';
import catprofile from '@/assests/background_images/profile2.png';
import ELMAS from '@/assests/icons/ELMAS.png';
import NotifyBadge from '@/assests/icons/NotifyBadge.png';
import Profile from '@/assests/icons/footerIcons/profile.png';
import SloganText from '@/assests/icons/gudsSlogan.png';
import { useWeb3Modal } from '@web3modal/ethers/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
const Footer = dynamic(() => import('@/components/footer/footer-v1'));
const OvalTextButton = dynamic(() => import('@/utils/oval-text-button'));
const IconBtn = dynamic(() => import('@/utils/icon-button'));
const Search = dynamic(() => import('@/components/Search/Search'));
import { useTablet } from '@/utils/Resize';
const ExchangeCard = dynamic(() => import('@/components/Cards/exchange-card'));

const Swap = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  const { open } = useWeb3Modal();
  const [isMobile, setIsMobile] = useState(false);
  const [firstName, setFirstName] = useState('');
  const userEmail = session?.user?.email;

  console.log(userEmail);
  useEffect(() => {
    const fetchData = async () => {
      const resUserExists = await fetch('https://guds.vercel.app/api/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }),
      });
      const { user } = await resUserExists.json();
      setFirstName(user?._firstName);

      console.log('user', user);
    };
    fetchData();
  }, [userEmail]);

  const btnContent = [
    { heading: 'Stake', bgColor: 'rgb(255 255 255 / 0.2)', txtColor: 'white' },
    { heading: 'Swap', bgColor: 'rgb(255 255 255 / 0.2)', txtColor: 'white' },
    { heading: 'Buy', bgColor: 'rgb(255 255 255 / 0.2)', txtColor: 'white' },
    { heading: 'Pools', bgColor: 'rgb(255 255 255 / 0.2)', txtColor: 'white' },
  ];

  const [cardFlag, setCardFlag] = useState('Swap');

  const handleFloatingBtn = (heading: string) => {
    setCardFlag(heading);
  };

  const iconBtnContent = [
    { altHeading: 'Rocket', image: Rocket, heading: 'WHY ?', link: '' },
    {
      altHeading: 'History',
      image: History,
      heading: 'History',
      link: 'profile/history',
    },
    {
      altHeading: 'Transaction',
      image: Transaction,
      heading: 'Statistics',
      link: '',
    },
    { altHeading: 'Wallet', image: Wallet, heading: 'Wallet', link: '' },
    {
      altHeading: 'Profile',
      image: Profile,
      heading: 'Profile',
      link: '/profile',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="relative flex w-[100%] m-0 items-center justify-center bg-cover min-h-[100vh] z-[10] p-10 max-h-full">
      <div className="absolute inset-0 w-full min-h-[100vh] max-h-full">
        <Image
          src={backgroundImage}
          alt="Background"
          style={{
            zIndex: -2,
          }}
          className="w-full {isMobile ? h-full :min-h-[100vh]} max-h-full bg-cover"
        />
      </div>
      <div className="absolute inset-0 w-full min-h-[100vh] max-h-full backdrop-blur-[20px] z-[10]"></div>

      {useTablet() ? null : (
        <div
          className="absolute left-0 top-0 flex flex-col w-[355px] z-[20] items-center justify-between  h-full rounded-3xl "
          style={{
            background: `rgba(255, 255, 255, 0.06)`,
            backdropFilter: `blur(45px)`,
          }}
        >
          <div className="flex flex-col w-[100%] items-center justify-start ">
            <br />
            <div className="w-[90%] flex items-center justify-center border p-1 rounded-[50px]">
              <h1 className="w-[40%] font-meul text-white text-xs text-center">
                PRICE INDEX
              </h1>
              <div className="w-[60%] border font-meul text-black rounded-[50px] text-xs text-center p-1 bg-[#C3F847]">
                $52.223 USD /AED
              </div>
            </div>
            <br />
            <br />
            <Image
              alt="Logo2"
              src={Logo2}
              className={''}
              height={95}
              width={107}
            />
            <br />
            <br />
            <br />
            <div className="flex justify-start">
              <Image
                src={SloganText}
                alt={'slogan text'}
                className="w-[324px] h-[114px]"
              />
            </div>
          </div>
          <div className="flex justify-start w-full">
            <Footer />
          </div>
        </div>
      )}

      {/* {cardFlag === "Swap" ? <SwapCard /> : <StakeCard />} */}
      <ExchangeCard />
      {useTablet() ? null : (
        <>
          <div className="flex absolute bottom-5 right-[20%] z-[20] flex-col items-end justify-center mb-3 text-xl w-[100%] text-white/20">
            <h1 className="font-meul">Your Personal</h1>
            <h1 className="font-meb">DiamondDeFi</h1>
            <h1 className="font-mer ">Intelligence</h1>
          </div>

          <div className="flex gap-4 z-[20] absolute right-0 h-full">
            <div className=" flex flex-col w-auto items-center justify-start min-h-[100vh]  max-h-full z-[20]">
              <div className="flex items-center gap-4">
                <div>
                  <Search />
                </div>

                <div className="flex items-center justify-center  w-[100%]">
                  <Image
                    alt="catprofile"
                    src={catprofile}
                    className={''}
                    height={200}
                    width={200}
                  />
                  <div className="flex flex-col items-start justify-start  font-dmsans ">
                    <h1 className="text-white text-sm">
                      {`Hi`} {firstName}
                    </h1>
                    <div className="flex items-center justify-between mt-3">
                      <Image
                        alt="Logo2"
                        src={ELMAS}
                        className={'mr-2'}
                        height={20}
                        width={20}
                      />
                      <h1 className="text-white text-xs font-monl ">
                        192 ,120
                      </h1>
                    </div>
                    <Image
                      alt="Logo2"
                      src={NotifyBadge}
                      className={'mt-2'}
                      height={28}
                      width={38}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end z-[20] items-center gap-10">
                <div className="  flex flex-col gap-6 w-[126px] mr-[20%]">
                  <div className="flex flex-col items-center justify-between h-full">
                    <div className="flex flex-col gap-4  items-end justify-end w-[100%]">
                      {btnContent.map((item, index) => {
                        return (
                          <div
                            className="w-[100%]"
                            key={index}
                            onClick={() => handleFloatingBtn(item.heading)}
                          >
                            <OvalTextButton
                              heading={item.heading}
                              backgroundCol={
                                cardFlag === item.heading
                                  ? ' #C3F847'
                                  : item.bgColor
                              }
                              textColor={
                                cardFlag === item.heading
                                  ? 'black'
                                  : item.txtColor
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[230px] justify-end font-meul text-lg text-white ">
                  {iconBtnContent.map((item) => {
                    return (
                      <>
                        <Link href={item.link}>
                          <IconBtn
                            image={item.image}
                            heading={item.heading}
                            altHeading={item.altHeading}
                          />
                        </Link>
                        <br />
                      </>
                    );
                  })}
                  <br />
                  <Image
                    alt="WalletConnect"
                    src={WalletConnect}
                    className={' mr-2 cursor-pointer'}
                    height={48}
                    width={106}
                    onClick={() => open()}
                  />
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="text-[#C3F847] absolute bottom-5 right-7 z-[20] text-xs font-mel ">
            SUSTAIN / SCALE / SECURE
          </div>
        </>
      )}
    </div>
  );
};

export default Swap;
