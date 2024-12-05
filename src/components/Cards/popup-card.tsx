import RoundButton from '@/utils/round-button-v2';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
interface CardProps {
  image: any;
  altHeading: string;
}

const PopupCard: FC<CardProps> = ({ image, altHeading }): JSX.Element => {
  return (
    <>
      <div className="relative flex justify-center">
        <div
          className={`absolute ${
            altHeading === 'diamonds'
              ? 'w-[150px] top-[-60px]'
              : 'w-[9rem] top-[-60px]'
          } aspect-square z-20`}
        >
          <Image src={image} alt={altHeading} />
        </div>

        <div className="flex flex-col relative rounded-[30px] justify-center items-center bg-[#0000003b] bg-opacity-100 backdrop-blur-[45px] z-10 h-[314px] w-[335px] gap-2 pt-5 shadow-2xl">
          <h2 className="text-[27px] text-center text-[#C3F847] font-meul">
            Welcome to <br />
            your Brilliant <br />
            Future!
          </h2>
          <p className="text-[#ffffff] text-[10px] mx-14 text-center font-meul">
            Exclusive Offer for Early Bird Investors Pass, valid from 27/10 to
            01/12 2023 for GUDS PreOrder.{' '}
            <b>Check it out now - register later.</b>
          </p>
          <Link href="/dashboard" prefetch={true}>
            <div className="absolute bottom-[-50px] right-9 ">
              <RoundButton />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopupCard;
