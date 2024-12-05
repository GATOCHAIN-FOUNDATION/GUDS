import Image from 'next/image';
import cross from '@/assests/icons/cross.png';
import Roundbtn from '@/utils/round-button';
import diamond from '@/assests/icons/diamond.png';
import Link from 'next/link';

const Verified = () => {
  return (
    <>
      <div className="relative rounded-[30px] flex flex-col justify-center py-5 gap-4 max-w-[335px] min-w-full h-[488px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md px-3">
        <div className="absolute top-5 left-5 w-[12px]">
          <Image src={cross} alt="cross" />
        </div>

        <div className="flex justify-center -mt-[80px]">
          <Link href="/login">
            <div className="w-[86px] h-[86px] rounded-full cursor-pointer">
              <Roundbtn image={diamond} />
            </div>
          </Link>
        </div>
        <h2 className="text-[20px] pt-6 text-center uppercase text-[#C3F847] font-meul">
          Email Verified
        </h2>

        <h3 className="text-[12px] font-meul px-4 text-center text-[#ffffff]">
          Now you are entering the GUDS Diamond DeFi Intelligence Platform.
        </h3>

        <h4 className="text-[12px] px-5 py-10 uppercase text-[#ffffff] font-monl text-center">
          early bird & testers will enjoy special offer & rewards.
        </h4>

        <div className="flex flex-col gap-3 py-5 justify-center items-center rounded-[30px] bg-black bg-opacity-5  backdrop-blur-[32.5px]">
          <p className="text-[12px] text-[#C3F847] px-6 uppercase text-center font-monl ">
            Improving your app experience is our top priority!Improving your app
            experience is our top priority!
          </p>

          <div className="flex gap-4 justify-center px-3 items-center">
            <p className="text-[10px] text-[#ffffff]">
              Join the GUDS Testing Guild by ticking the box
            </p>
            <input
              type="checkbox"
              className="form-checkbox border-1 bg-purple-400 border-gray-100 rounded-5 accent-gray-700 p-1 w-6 h-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Verified;
