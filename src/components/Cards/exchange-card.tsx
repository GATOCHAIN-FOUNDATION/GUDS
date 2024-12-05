'use client';
import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import Logo3 from '@/assests/logo/logo3.png';
import MobileNav from '@/components/navbar/mobile-nav';
import Link from 'next/link';
import Footer from '../footer/footer-v1';
import { useWidth } from '@/utils/Resize';
import { useState } from 'react';
import refresh from '@/assests/icons/refresh.png';
import settings from '@/assests/icons/setting.png';
import axios from 'axios';
import CoinsDropdown from '@/utils/coins-dropdown';

const ExchangeCard = () => {
  const [amount, setAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('12');
  const [showNFT, setShowNFT] = useState('');
  const [loading, setLoading] = useState(false);
  const [metadata, setMetaData] = useState('');

  const fetchNFT = useCallback(() => {
    setLoading(true);
    axios
      .get(
        `https://ipfs.io/ipfs/${
          selectedOption === '12'
            ? 'QmWqNS7o57zKUVyvkQhwnoWmmy8AFZnxS9efMEPMPK5FgJ'
            : selectedOption === '15'
              ? 'Qmb5oHrqVxAtotAYu7H9Vzzu8uNTbagky2xNUuadNSWUu7'
              : selectedOption === '18' &&
                'QmVvaUHXSoPuXfmwLHpyUnFTjJ4gw79GXHCZPRyFmzoA7E'
        }`
      )
      .then(function (response) {
        console.log(response, 'NFT res');
        setShowNFT(response.data.image);
        setAmount(response.data.price);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [selectedOption]);

  useEffect(() => {
    fetchNFT();
    setMetaData(
      `https://ipfs.io/ipfs/${
        selectedOption === '12'
          ? 'QmWqNS7o57zKUVyvkQhwnoWmmy8AFZnxS9efMEPMPK5FgJ'
          : selectedOption === '15'
            ? 'Qmb5oHrqVxAtotAYu7H9Vzzu8uNTbagky2xNUuadNSWUu7'
            : selectedOption === '18' &&
              'QmVvaUHXSoPuXfmwLHpyUnFTjJ4gw79GXHCZPRyFmzoA7E'
      }`
    );
  }, [selectedOption, fetchNFT]);

  const stakePercentage = [
    { per: 25, name: '25' },
    { per: 50, name: '50' },
    { per: 75, name: '75' },
    { per: 100, name: '100' },
  ];
  const [stakePer, setStakePer] = useState('25');

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
        <br />
        <div
          className="flex flex-col items-center justify-center p-3   rounded-[20px] h-[80%]"
          style={{
            background: `rgba(0, 0, 0, 0.2)`,
            backdropFilter: `blur(75px)`,
          }}
        >
          <div
            className="flex flex-col items-center justify-between w-[98%] h-[38%] rounded-2xl  "
            style={{
              background: `rgba(0, 0, 0, 0.1)`,
              backdropFilter: `blur(12px)`,
            }}
          >
            <div className="flex items-center justify-center w-[90%] font-monl text-xs text-white mt-2">
              <div className="flex items-center justify-center">
                {' '}
                <Image
                  alt="Logo3"
                  src={Logo3}
                  className={'mt-[-50px]'}
                  height={80}
                  width={80}
                />
              </div>
            </div>
            <div className="flex justify-between w-[95%]">
              <div className="text-[#ffffff]">
                <CoinsDropdown />
              </div>
              <div className="flex items-center justify-end font-monl text-xs text-white mb-2">
                <h1>Availability: 0 USD</h1>
              </div>
            </div>

            <div className="flex items-center justify-center w-[90%] ">
              {' '}
              <input
                className="outline-none w-[98%] bg-transparent h-[100px] text-7xl text-[#ffffff] font-meul "
                value={amount}
                onChange={(e: any) => setAmount(e.target.value)}
                type="text"
              />
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
          </div>
          <br />
          <div className="flex items-center justify-start w-[90%] mb-3">
            {' '}
            <h1 className="font-meb text-3xl italic uppercase text-slate-400 ">
              exchange
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-between w-[98%] h-[40%] rounded-2xl  "
            style={{
              background: `rgba(0, 0, 0, 0.1)`,
              backdropFilter: `blur(12px)`,
            }}
          >
            <div className="flex justify-between w-[95%]">
              <div className="text-[#ffffff]">
                <CoinsDropdown />
              </div>
              <div className="flex items-center justify-end font-monl text-xs text-white mb-2">
                <h1>Availability: 0 USD</h1>
              </div>
            </div>
            <div className="flex items-center rounded-md justify-center w-[95%] py-3 h-[100%]"></div>
            <div className="flex items-center justify-center w-[90%] ">
              {' '}
              <input
                className="outline-none w-[98%] bg-transparent h-[100px] text-7xl text-[#ffffff] font-meul "
                value={amount}
                type="text"
              />
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
          </div>

          <section className="flex flex-col gap-2 w-[95%] m-4">
            <div className="flex justify-between">
              <h2 className=" text-[14px] text-[#ffffff] font-monl capitalize">
                price
              </h2>
              <p className="flex gap-1 text-[14px] text-[#ffffff] font-monl">
                49.9231 ETH per USDT{' '}
                <span>
                  <Image
                    src={refresh}
                    alt={'refresh icon'}
                    className="w-[20px] aspect-auto object-contain"
                  />
                </span>
              </p>
            </div>
            <div className="flex justify-between">
              <h2 className="flex gap-2 text-[14px] text-[#ffffff] font-monl capitalize">
                Slippage Tolerance{' '}
                <span className="text-[12px] border-[#ffffff] border rounded-full p-1 w-[20px] h-[20px] flex justify-center items-center">
                  ?
                </span>
                <span>
                  <Image
                    src={settings}
                    alt={'settings'}
                    className="w-[20px] aspect-auto object-contain"
                  />
                </span>
              </h2>
              <p className="text-[#335BE9] text-[14px] font-monl">0.5%</p>
            </div>
          </section>

          <Link href="/checkout/exchange">
            {' '}
            <div className="flex cursor-pointer  items-center justify-center w-[110%] bg-[#C3F847] mb-[-20px] font-meul  h-[55px] rounded-[50px]  p-3">
              {' '}
              <Image
                alt={''}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTUlEQVR4nO2aTU8UQRCGHwPCGoy4Cyse5Wgw6p9QQVGBG4o3DV5EsnpVOaMnExJ+h4YQNGpI1IgfqBcVgZPKwYg3FwiaMRXfSTpxv3d2ZpbwJp0sVE9113R1dfVbA9vYukgBfcBtYAr4BPwENtTs90fJrM9ZIElMkAAuAA+AP4BXZvsNzABDQHMUBuwCrgErzqTWgcfADa3MQb3xnWpJ/c9kN4EnesZ//huQ0csJBaeAZWcCr4CLQGsFuvYCl4DXjr4loIcawt7UpDPgG+B4gPq7gbeO/olarM5+TdwG+AVcARqCHoR/Oq8CWWe1O4JS3qnl9hR1DlF7HAYWNOai5lAV0o7Cl0A74SEJPNXYy/KKipBw3Ok50EL4aAFeOG5W0Z6ZdNzJDruo0OZ4hQWAskOsv7HD2BOl7Jms5mTRreTDzj8nLDpVCz+cVotRZ/OX5GLXnXOiIUaGNALvpMuMKohmpQrW+RjBIChDDCela6XYqgw5EYIYGrLDiaTnCnV8qE6WO8XREMOw9E2TByml1esVJoBhGZLU/WYz3zz7NeAjgkXQhhhmpfM0OXBHQrtPxN2QMekczyWckvBMHRjSL533cgk/S2i3uLgb0iWdxgv8h1UJU3VgSLt0fs8l3JCwqYzJ1aqVcnD7PMHWNWS1jlwrXci1tsxmn5LQGMC4GzJQKPz6B6KRZ3V9IPZJaGxhvaQovfmSMT9pNAYwroaknKRxT75OMxrUaMy4GnJZ+mxP58V5dTIuNq4Xq3npGyx20HxVxxMxNKRXur6UUobIqPN8DMmH99I1UsoDCYfrNUI5LoZkpGehnKJQjx7KihyLGkeBNc2p7FLGhPMGjLaMCmmRcjaXu5UoSIgW8kQkR0Fi7wbmNIe5auqMaSVmflnB/g4LKeCZxl4KouDT6SytudkRwtkTixrTsvIDQSnucNwsK+7VwmHQaFR0WnPcaV/QgyScAOCJUO4J8MS2UoZ/Tvgbu6a1925n2T1xscMVfsWQUu7kpx2eXCnIanHR1Rl10hlPGaml17fEO3UpbDeptaloNKA+sw5P4KcdI1F9AdEsVnxaV4BySYZNZbGDURmQC63iYu3Wdl+1xx/ORzX2+4Oup+Pqm/c+sQ3qHH8BO95tuSa+KVIAAAAASUVORK5CYII="
              />
              <h1 className="ml-2 cursor-pointer uppercase">Convert</h1>
            </div>{' '}
          </Link>
        </div>
        <br /> <br />
        {useWidth() ? <Footer /> : null}
      </div>
    </>
  );
};

export default ExchangeCard;
