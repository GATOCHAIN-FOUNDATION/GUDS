import { FC } from 'react';
import RocketIcon from '@/assests/logo/RocketshipBlack.png';
import Image from 'next/image';

interface props {
  image: any;
}

const Roundbtn: FC<props> = ({ image }) => {
  return (
    <>
      {/* <div className=""> */}
      <div className="flex justify-center w-[86px] h-[86px] rounded-[50px] shadow-[20px] p-4 bg-[#C3F847]">
        <Image src={image} alt="button icon" className="bg-transparent" />
      </div>
      {/* </div> */}
    </>
  );
};

export default Roundbtn;
