'use client';

import Image from 'next/image';
import { useState } from 'react';
import Logo from '@/assests/logo/logoBlank.png';
import Link from 'next/link';
import { useWidth } from '@/utils/Resize';
import Footer from '../footer/footer-v1';
import MobileNav from '../navbar/mobile-nav';
import greenOutlineLogo from '@/assests/logo/logoMobile.png';

const StakeCard = () => {
  const durationDays = [
    { days: 10, name: '10' },
    { days: 30, name: '30' },
    { days: 60, name: '60' },
    { days: 90, name: '90' },
  ];

  const stakePercentage = [
    { per: 25, name: '25' },
    { per: 50, name: '50' },
    { per: 75, name: '75' },
    { per: 100, name: '100' },
  ];

  const [duration, setDuration] = useState('10');
  const [stakePer, setStakePer] = useState('25');

  const handleDurationDays = (name: string) => {
    setDuration(name);
  };

  const handleStakePercentage = (name: string) => {
    setStakePer(name);
  };

  return (
    <>
      <div
        className={` flex flex-col w-[350px]  ${
          useWidth() ? 'items-between' : 'items-center'
        } justify-end z-[20]  h-[100%]`}
      >
        {useWidth() ? <MobileNav /> : null}
        <article className={`${useWidth() ? 'my-[15%]' : ''}`}>
          <div className="w-[360px] h-[560px] p-6 z-[20] relative flex items-center justify-center rounded-[30px] bg-[#353535] bg-opacity-10 backdrop-blur-3xl">
            <div className="absolute top-[-30px]">
              <Image
                src={Logo}
                alt={'logo'}
                className="w-[60px] aspect-auto object-contain"
              />
            </div>

            <section className="absolute bottom-10 border border-[#ffffff] w-[90%] rounded-[30px] p-3 flex flex-col gap-7">
              <div className="flex relative items-center">
                <div className="flex gap-2 items-center">
                  <div>
                    <Image
                      src={greenOutlineLogo}
                      alt={'logo'}
                      className="w-[42px] aspect-auto"
                    />
                  </div>
                  <h1 className="text-[16px] uppercase text-[#ffffff] ">
                    GUDS
                  </h1>
                </div>

                <div className="flex absolute right-2 flex-col gap-2 justify-end">
                  <h3 className="text-[12px] text-[#DFDFDF] font-monl text-right">
                    Amount available
                  </h3>
                  <h3 className="text-[14px] text-[#D5FA7E] font-bold font-monl text-right">
                    0.00 GUDS
                  </h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[12px] text-[#DFDFDF] font-monl text-left">
                    Est. APY
                  </h3>
                  <p className="text-[14px] text-[#DFDFDF] font-monl font-semibold text-left">
                    38.9%
                  </p>
                </div>

                <div className="flex flex-col gap-2 justify-end">
                  <div className="flex gap-1 items-center justify-end">
                    <h3 className="text-[12px] font-monl text-[#ffffff]">
                      Duration (days)
                    </h3>
                    <button className="border border-[#ffffff] text-[#ffffff] text-[10px] rounded-full flex justify-center items-center w-[15px] h-[15px] ">
                      i
                    </button>
                  </div>
                  <div className="flex justify-end gap-2 items-center">
                    {durationDays.map((days, index) => (
                      <button
                        key={index}
                        className={`${
                          days.name === duration
                            ? 'bg-[#D5FA7E] text-[#000000]'
                            : 'bg-transparent text-[#ffffff]'
                        } w-[41px] h-[34px] rounded-[30px] border border-[#ffffff] text-[16px] flex justify-center items-center font-monl`}
                        onClick={() => handleDurationDays(days.name)}
                      >
                        {days.days}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-start flex-col gap-4">
                  <h3 className="text-[#ffffff] text-[14px] font-monl font-semibold text-left">
                    Amount
                  </h3>
                  <h3 className="text-[#ffffff] text-[14px] font-monl font-semibold text-left">
                    GUDS
                  </h3>
                </div>

                <div className="w-[70%] bg-[#D4B9FF] bg-opacity-20 border border-[#ffffff] rounded-[30px] h-[46px] flex justify-between items-center p-3">
                  <p className="flex justify-start text-[16px] text-[#DFDFDF] font-monl font-semibold">
                    0.0
                  </p>
                  <h2 className="flex justify-end text-[16px] text-[#DFDFDF] font-monl font-bold">
                    MAX
                  </h2>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[100%] h-[41px] flex justify-between items-center p-1 border border-[#ffffff] rounded-[30px]">
                  {stakePercentage.map((per, index) => (
                    <button
                      key={index}
                      className={`${
                        per.name === stakePer
                          ? 'bg-[#D5FA7E] rounded-[30px] h-[33px] text-[#000000]'
                          : 'bg-transparent text-[#ffffff] '
                      }outline-none w-[70px]`}
                      onClick={() => handleStakePercentage(per.name)}
                    >
                      {per.per}%
                    </button>
                  ))}
                </div>
              </div>
              <Link href="/checkout/stakeit">
                {' '}
                <div className="flex justify-center items-center">
                  <button className="rounded-[30px] flex justify-center items-center text-[14px] bg-[#D5FA7E] h-[39px] w-[150px] text-[#000000] font-monl font-bold">
                    Stake it
                  </button>
                </div>{' '}
              </Link>
            </section>
          </div>
        </article>
        {useWidth() ? <Footer /> : null}
      </div>
    </>
  );
};

export default StakeCard;
