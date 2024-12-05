import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import cardBg from '@/assests/background_images/cardBg.png';
import Logo from '@/assests/logo/logo3.png';
import heart from '@/assests/icons/heart.png';
import share from '@/assests/icons/share.png';
import WalletConnectIcon from '@/assests/icons/WalletConnectBlue.png';
import copyIcon from '@/assests/icons/copy.png';
import RocketshipBlack from '@/assests/logo/RocketshipBlack.png';

const BuyButton = () => {
  return (
    <button className="w-[155px] p-1 flex justify-between items-center border-[2px] border-[#C3F847] rounded-full">
      <div className="w-[42px] h-[42px] rounded-full flex justify-center items-center border-[2px] border-[#FFFFFF] text-[20px] text-white">
        <AiOutlinePlus />
      </div>
      <h3 className="text-[14px] text-white font-mer uppercase">BUY MORE</h3>
    </button>
  );
};

export const DigitalContractConfirmation = () => {
  return (
    <div className="w-[350px] z-[20] relative max-w-full h-auto p-4 flex flex-col justify-center drop-shadow-2xl gap-10 bg-transparent rounded-[30px]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: -2,
        }}
      >
        <Image
          src={cardBg}
          alt="Background"
          className="w-full h-full bg-contain"
          style={{ filter: 'drop-shadow(2px 2px 2px #000000)' }}
        />
      </div>

      <div className="absolute top-0 left-[40%] mt-[-20px] w-full z-20">
        <Image src={Logo} alt={''} className="w-[60px] aspect-auto" />
      </div>

      <div className="flex flex-col gap-2 items-center mt-5">
        <div className="w-[320px] h-[200px] flex flex-col justify-between p-3 rounded-[15px] bg-[#000000] bg-opacity-20 backdrop-blur-md">
          <h1 className="text-[16px] p-4 text-[#ffffff] font-mer uppercase">
            GUDS Balance
          </h1>
          <h1 className="text-[60px] text-[#ffffff] opacity-10 italic font-mer">
            10 000
          </h1>
        </div>
        <p className="font-mel italic text-[#EDEDED] text-[9px] text-left">
          Enter how much GUDS you want ot buy
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center p-1 bg-[#000000] bg-opacity-20 rounded-[20px] w-[170px] h-[30px]">
          <Image
            src={WalletConnectIcon}
            alt={''}
            className="w-[20px] aspect-auto object-contain"
          />
          <p className="text-[16px] text-white font-sans">0x8689...cA88</p>
          <Image
            src={copyIcon}
            alt={''}
            className="w-[14px] h-[14px] aspect-auto object-contain"
          />
        </div>
        <div className="bg-[#000000] bg-opacity-20 rounded-[20px] w-[60px] h-[30px]"></div>
      </div>

      <div className="w-[320px] h-[100px] flex flex-col justify-between p-3 rounded-[15px] bg-[#000000] bg-opacity-20 backdrop-blur-md">
        <div className="flex justify-between items-start">
          <Image
            src={heart}
            alt={''}
            className="w-[20px] h-[20px] aspect-auto object-contain"
          />
          <Image
            src={share}
            alt={''}
            className="w-[20px] h-[20px] aspect-auto object-contain"
          />
        </div>

        <h1 className="text-[30px] text-white font-sacra">
          Thank you, Mr. Berts!
        </h1>
      </div>

      <div className="flex gap-3 items-center justify-center mb-20">
        <div className="w-[43px] h-[43px] flex justify-center items-center bg-[#C3F847] rounded-full">
          <Image
            src={RocketshipBlack}
            alt={''}
            className="w-[20px] aspect-auto rotate-45"
          />
        </div>
        <p className="font-mel italic text-[#C3F847] text-[8px] text-left">
          Digital Contract is sent to your email.
        </p>
      </div>

      <div className="absolute right-2 bottom-3">
        <BuyButton />
      </div>
    </div>
  );
};
