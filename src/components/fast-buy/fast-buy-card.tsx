'use client';
import React from 'react';
import { useState } from 'react';
import { useWidth } from '@/utils/Resize';
import Footer from '../footer/footer-v1';
import MobileNav from '../navbar/mobile-nav';
import { getTokenReservesAndPrices } from '@/utils/fetch-balance';
import { BrowserProvider, Contract, parseUnits } from 'ethers';
import toast from 'react-hot-toast';
import {
  GUDS_SWAP_CONTRACT_ABI,
  GUDS_SWAP_CONTRACT_ADDRESS,
} from '@/constants/contract/contract';
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
  useSwitchNetwork,
} from '@web3modal/ethers/react';
import Image from 'next/image';

const FastBuyCard = () => {
  const [balance1, setBalance1] = useState('1');
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [amount, setAmount] = useState<string | undefined>('0');
  const [amountUsdt, setUsdtAmount] = useState<string | undefined>('0');
  const { open } = useWeb3Modal();
  const { walletProvider } = useWeb3ModalProvider();
  const { switchNetwork } = useSwitchNetwork();
  const [gudsPrice, setGudsPrice] = useState(0);

  React.useEffect(() => {
    const fetchGudsPrice = async () => {
      try {
        const { priceOfGUDS } = await getTokenReservesAndPrices(walletProvider);
        setGudsPrice(priceOfGUDS);
      } catch (error) {
        console.error('Error fetching GUDS price:', error);
      }
    };

    fetchGudsPrice();
  }, [gudsPrice, walletProvider]);

  React.useEffect(() => {
    const fetchBalances = async () => {
      if (isConnected) {
        try {
        } catch (error) {
          console.error('Error fetching balances:', error);
        }
      } else {
        console.log('Please connect wallet');
      }
    };

    fetchBalances();
  }, [address, amount, isConnected]);

  const formatAmount = (amount: string, decimals: number): string => {
    const parsedAmount = parseUnits(amount, decimals);
    return parsedAmount.toString();
  };

  const handleWrite = async () => {
    // Show a loading message

    if (chainId !== 56) {
      const swtichingToast = toast.loading('Switching Network...');
      // toast.error("Invlaid chain id ,Please switch to BSC ");
      switchNetwork(56);
      toast.dismiss(swtichingToast);
      return;
    } else {
      const loadingToast = toast.loading('Transaction in progress...');
      try {
        if (isNaN(parseFloat(balance1)) || parseFloat(balance1) <= 0) {
          throw new Error('Invalid amount specified.');
        }
        const decimals = 18;
        const formattedAmount = formatAmount(balance1, decimals);

        const ethersProvider = new BrowserProvider(walletProvider!);
        const signer = await ethersProvider.getSigner();
        const SwapContract = new Contract(
          GUDS_SWAP_CONTRACT_ADDRESS,
          GUDS_SWAP_CONTRACT_ABI,
          signer
        );
        const tx = await SwapContract.swapTokenAToB(formattedAmount);
        await tx.wait();
        toast.success('Transaction successful!');
      } catch (error: any) {
        console.error('Error executing contract write:', error.message);
        console.error('Error details:', error);

        if (error.message.includes('BEP20: transfer amount exceeds balance')) {
          toast.error('Insufficient USDT .');
        } else if (
          error.code === 'ACTION_REJECTED' ||
          error.message.includes('user rejected transaction')
        ) {
          toast.error('Transaction rejected by the user.');
        } else if (
          error.code === 'INSUFFICIENT_FUNDS' ||
          error.message.includes('insufficient funds')
        ) {
          toast.error('Insufficient funds for the transaction.');
        } else {
          toast.error(`Transaction failed ${error.message}`);
        }
      } finally {
        toast.dismiss(loadingToast);
      }
    }
  };

  const handleSubmit = async () => {
    if (!isConnected) {
      console.log('Please connect your wallet');
      toast.error('Connect Wallet');
      return;
    }
    console.log(amountUsdt);

    console.log('Balance to swap:', balance1);
    console.log('USDT Balance:', amountUsdt);
    await handleWrite();
  };

  return (
    <div className="flex items-center z-[20] justify-between flex-col">
      {' '}
      {useWidth() ? <MobileNav /> : null}
      <br />
      <div className=" z-[100] flex flex-col items-center rounded-bl-[20px] rounded-tr-[20px] rounded-br-[0px] rounded-tl-[20px] justify-start w-[345px] h-[469px]   bg-black/20 backdrop-blur-20 rounded-3xl  relative">
        <div className="w-[40%] flex items-center justify-center"> </div>
        <div className="flex flex-col items-center justify-between py-3 w-[92%] bg-black/30 backdrop-blur-75  rounded-[20px] mt-[35px] h-[235px]">
          <h1 className="flex text-white text-[20px] font-meb">
            GU<span className="font-meul">D</span>S BALANCE
          </h1>
          {isConnected ? (
            <h1 className="flex text-white text-[20px] font-meb">{amount}</h1>
          ) : (
            <h1 className="flex text-white text-[10px] mx-[10px] font-meul">
              Please Connect Wallet To Check Balance
            </h1>
          )}
          <input
            className="bg-transparent w-[90%] outline-none text-[60px] italic text-[#C3F847] font-meul "
            value={balance1}
            inputMode="numeric"
            onChange={(e) => {
              const inputValue = e.target.value.replace(/[^1-9]/g, '');
              setBalance1(inputValue);
            }}
          />
        </div>
        <div className="flex w-[90%] justify-start items-center   rounded-[20px] font-meul italic font-thin text-white/90 text-[10px] my-2 ">
          <h1 className="text-[20px] font-meb"> Amount to Swap</h1>
        </div>
        <div className="flex flex-col items-start justify-between p-4 w-[90%] bg-black/20 backdrop-blur-75  mt-1 rounded-[20px]  h-[100px]">
          <input
            className="bg-transparent w-[90%] outline-none text-xl text-[#C3F847] font-meul italic "
            value={balance1}
          />
          <div className="flex w-[98%] items-center justify-end font-dmsans text-white"></div>
        </div>
        <div className="flex items-center justify-end z-0  w-[100%]">
          <div className="w-[200px] h-[60px] bottom-0 rounded-bl-[20px] rounded-br-[20px]  absolute mb-[-60px]  origin-center flex items-center justify-start">
            <div className="border-r-[30px]  border   w-[60px] h-[60px] flex items-center justify-end border-l-[30px] border-b-[30px] border-t-[30px] border-l-transparent border-r-black/20 border-b-transparent border-t-black/20 "></div>
            <div className="bg-black/20 backdrop-blur-20 w-[140px] h-[60px] rounded-br-[20px]">
              <div
                onClick={() => handleSubmit()}
                className="px-4 py-1 z-0 cursor-pointer bg-[#C3F847] rounded-[50px] font-meul mt-[-12px] flex items-center justify-between w-[95%] "
              >
                {' '}
                <Image
                  alt={''}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTUlEQVR4nO2aTU8UQRCGHwPCGoy4Cyse5Wgw6p9QQVGBG4o3DV5EsnpVOaMnExJ+h4YQNGpI1IgfqBcVgZPKwYg3FwiaMRXfSTpxv3d2ZpbwJp0sVE9113R1dfVbA9vYukgBfcBtYAr4BPwENtTs90fJrM9ZIElMkAAuAA+AP4BXZvsNzABDQHMUBuwCrgErzqTWgcfADa3MQb3xnWpJ/c9kN4EnesZ//huQ0csJBaeAZWcCr4CLQGsFuvYCl4DXjr4loIcawt7UpDPgG+B4gPq7gbeO/olarM5+TdwG+AVcARqCHoR/Oq8CWWe1O4JS3qnl9hR1DlF7HAYWNOai5lAV0o7Cl0A74SEJPNXYy/KKipBw3Ok50EL4aAFeOG5W0Z6ZdNzJDruo0OZ4hQWAskOsv7HD2BOl7Jms5mTRreTDzj8nLDpVCz+cVotRZ/OX5GLXnXOiIUaGNALvpMuMKohmpQrW+RjBIChDDCela6XYqgw5EYIYGrLDiaTnCnV8qE6WO8XREMOw9E2TByml1esVJoBhGZLU/WYz3zz7NeAjgkXQhhhmpfM0OXBHQrtPxN2QMekczyWckvBMHRjSL533cgk/S2i3uLgb0iWdxgv8h1UJU3VgSLt0fs8l3JCwqYzJ1aqVcnD7PMHWNWS1jlwrXci1tsxmn5LQGMC4GzJQKPz6B6KRZ3V9IPZJaGxhvaQovfmSMT9pNAYwroaknKRxT75OMxrUaMy4GnJZ+mxP58V5dTIuNq4Xq3npGyx20HxVxxMxNKRXur6UUobIqPN8DMmH99I1UsoDCYfrNUI5LoZkpGehnKJQjx7KihyLGkeBNc2p7FLGhPMGjLaMCmmRcjaXu5UoSIgW8kQkR0Fi7wbmNIe5auqMaSVmflnB/g4LKeCZxl4KouDT6SytudkRwtkTixrTsvIDQSnucNwsK+7VwmHQaFR0WnPcaV/QgyScAOCJUO4J8MS2UoZ/Tvgbu6a1925n2T1xscMVfsWQUu7kpx2eXCnIanHR1Rl10hlPGaml17fEO3UpbDeptaloNKA+sw5P4KcdI1F9AdEsVnxaV4BySYZNZbGDURmQC63iYu3Wdl+1xx/ORzX2+4Oup+Pqm/c+sQ3qHH8BO95tuSa+KVIAAAAASUVORK5CYII="
                />
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {useWidth() ? <Footer /> : null}
    </div>
  );
};

export default FastBuyCard;
