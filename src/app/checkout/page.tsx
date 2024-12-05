'use client';
import React, { useState, Suspense, FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
  useSwitchNetwork,
} from '@web3modal/ethers/react';
import { BrowserProvider, Contract, formatUnits, parseUnits } from 'ethers';
import toast, { Toaster } from 'react-hot-toast';
import {
  GUDS_SWAP_CONTRACT_ADDRESS,
  GUDS_SWAP_CONTRACT_ABI,
} from '@/constants/contract/contract';
import { getCurrentDate } from '@/utils/current-date';
import CheckoutButton from '@/components/stripe-checkout-button/checkout-button';
import Unchecked from '@/assests/icons/Uncheck.png';
import GreenTick from '@/assests/icons/GreenCheck.png';
import WalletConnectBlue from '@/assests/icons/WalletConnectBlue.png';
import CreditCard from '@/assests/icons/CreditCard.png';
import TransferBank from '@/assests/icons/TransferBank.png';

const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));

interface pageProps {
  params: { slug: string[] };
}

const Page: FC<pageProps> = () => {
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { switchNetwork } = useSwitchNetwork();
  // const searchParams = useSearchParams();
  // const amount = searchParams!.get('balance') || '';
  // const mode = searchParams!.get('mode');
  const amount = '';
  const mode = '';
  console.log('Mode:', mode);
  console.log('Amount:', amount);

  const [selectedOption, setSelectedOption] = useState('crypto');

  const handleOptionChange = (option: string) => () => {
    setSelectedOption(option);
  };

  const handleOptionRemove = () => {
    setSelectedOption('');
  };

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
        // Ensure amount is a valid number

        if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
          throw new Error('Invalid amount specified.');
        }

        // Example: Assuming the token has 18 decimals
        const decimals = 18; // Replace with the actual decimals of your token
        const formattedAmount = formatAmount(amount, decimals);

        const ethersProvider = new BrowserProvider(walletProvider!);
        const signer = await ethersProvider.getSigner();

        // The Contract object
        const SwapContract = new Contract(
          GUDS_SWAP_CONTRACT_ADDRESS,
          GUDS_SWAP_CONTRACT_ABI,
          signer
        );

        // Execute the contract method with the formatted amount
        const tx = await SwapContract.swapTokenAToB(formattedAmount);

        // Wait for the transaction to be mined
        await tx.wait();

        // Show success message
        toast.success('Transaction successful!');
      } catch (error: any) {
        console.error('Error executing contract write:', error.message);
        console.error('Error details:', error);

        if (error.message.includes('BEP20: transfer amount exceeds balance')) {
          toast.error('Transfer amount exceeds balance.');
        }
        // Determine if the error is due to insufficient funds
        else if (
          error.code === 'ACTION_REJECTED' ||
          error.message.includes('user rejected transaction')
        ) {
          // Handle user rejection
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
        // Remove the loading message
        toast.dismiss(loadingToast);
      }
    }
  };

  return (
    <MobileLayout>
      <Toaster />
      <div className="flex relative flex-col w-[350px] rounded-[20px] shadow-lg h-[500px] items-center justify bg-[#000000] bg-opacity-20 backdrop-blur-2xl">
        <h1 className="font-meul text-white my-4">Check out</h1>

        <div className="flex flex-col h-[350px] shadow-lg font-dmsans items-center p-3 justify-between w-[90%] bg-[#000000] rounded-[20px] bg-opacity-20 backdrop-blur-2xl">
          <div className="flex flex-col items-start justify-start w-[100%] text-white">
            <h1>Proceed with payment</h1>
            <div className="flex w-[100%] items-center justify-between my-1">
              <div className="flex items-center justify-start">
                <div className="flex items-center justify-center w-[40px] h-[40px] mr-2 rounded-lg bg-slate-200">
                  <Image
                    src={WalletConnectBlue}
                    width={25}
                    height={25}
                    alt="WalletConnect"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>Add Crypto Wallet</h1>
                  <h1 className="text-[10px] text-[#C3F847]">
                    Connect your crypto wallet
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-end">
                {selectedOption === 'crypto' ? (
                  <Image
                    src={GreenTick}
                    width={25}
                    height={25}
                    alt="Check"
                    onClick={handleOptionRemove}
                  />
                ) : (
                  <Image
                    src={Unchecked}
                    width={25}
                    height={25}
                    alt="Uncheck"
                    onClick={handleOptionChange('crypto')}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[100%] my-1 text-white">
            <h1>Change payment method</h1>
          </div>
          <div className="flex w-[100%] items-center justify-between my-1">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-center w-[40px] h-[40px] mr-2 rounded-lg bg-slate-200">
                <Image
                  src={CreditCard}
                  width={25}
                  height={25}
                  alt="CreditCard"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white">Add Credit/Debit Card</h1>
                <h1 className="text-[10px] text-[#C3F847]">Add your Card</h1>
              </div>
            </div>
            <div className="flex items-center justify-end">
              {selectedOption === 'credit' ? (
                <Image
                  src={GreenTick}
                  width={25}
                  height={25}
                  alt="Check"
                  onClick={handleOptionRemove}
                />
              ) : (
                <Image
                  src={Unchecked}
                  width={25}
                  height={25}
                  alt="Uncheck"
                  onClick={handleOptionChange('credit')}
                />
              )}
            </div>
          </div>
          <div className="flex w-[100%] items-center justify-between my-1">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-center w-[40px] h-[40px] mr-2 rounded-lg bg-slate-200">
                <Image
                  src={TransferBank}
                  width={25}
                  height={25}
                  alt="BankTransfer"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white">Add Bank Transfer</h1>
                <h1 className="text-[10px] text-[#C3F847]">
                  Bank Transfer (P2P)
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-end">
              {selectedOption === 'card' ? (
                <Image
                  src={GreenTick}
                  width={25}
                  height={25}
                  alt="Check"
                  onClick={handleOptionRemove}
                />
              ) : (
                <Image
                  src={Unchecked}
                  width={25}
                  height={25}
                  alt="Uncheck"
                  onClick={handleOptionChange('card')}
                />
              )}
            </div>
          </div>

          <div className="flex w-[100%] border-b-[1px]">
            <h1 className="text-[#B384FF]">Guds Preorder Info</h1>
          </div>
          <div className="flex w-[100%] items-center justify-between text-white">
            <h1>Subtotal</h1> <h1>${amount}</h1>
          </div>
          <div className="flex w-[100%] items-center justify-between text-white text-[10px]">
            <h1>Estimated Time of Activation</h1>
            <h1>{getCurrentDate()}</h1>
          </div>
        </div>

        {selectedOption === 'crypto' &&
          (isConnected ? (
            <button
              className="flex items-center justify-center font-meul absolute bottom-0 p-5 cursor-pointer rounded-[20px] bg-[#C3F847] text-black w-[100%]"
              onClick={() => handleWrite()}
            >
              CONFIRM
            </button>
          ) : (
            <button
              className="flex items-center justify-center font-meul absolute bottom-0 p-5 cursor-pointer rounded-[20px] bg-[#C3F847] text-black w-[100%]"
              onClick={() => open()}
            >
              CONNECT WALLET
            </button>
          ))}

        {selectedOption === 'credit' && <CheckoutButton amount={amount} />}
        {selectedOption === 'card' && (
          <button className="flex items-center justify-center font-meul absolute bottom-0 p-5 cursor-pointer rounded-[20px] bg-[#C3F847] text-black w-[100%] ">
            <Link
              href={{ pathname: '/carddetails', query: amount }}
              prefetch={true}
            >
              CONFIRM
            </Link>
          </button>
        )}
      </div>
    </MobileLayout>
  );
};

export default Page;
