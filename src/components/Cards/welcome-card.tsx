import Logo from '@/assests/logo/3d_logo.png';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

interface props {
  setShowPopup: any;
}

const WelcomeCard: FC<props> = ({ setShowPopup }) => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="absolute w-[7rem] aspect-square top-[-50px] z-20 shadow-md">
          <Image src={Logo} alt={'logo'} />
        </div>

        <div className="flex flex-col rounded-[30px] justify-center items-center bg-[#000000] bg-opacity-20 backdrop-blur-lg z-10 h-[170px] w-[256px] gap-2 pt-5 shadow-md">
          <h2 className="text-[20px] text-center text-[#ffffff] font-meul">
            The Diamond <br />
            Defi Intelligence
          </h2>
          <Link href="/dashboard" prefetch={true}>
            <button
              // onClick={() => setShowPopup(true)}
              className="rounded-[15px] text-[20px] bg-[#C3F847] font-prata flex justify-center items-center w-[177px] h-[52px]"
            >
               Let&apos;s start
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomeCard;
