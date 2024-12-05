import Image from 'next/image';
import cross from '@/assests/icons/cross.png';
import Roundbtn from '@/utils/round-button';
import rocket from '@/assests/logo/RocketshipBlack.png';

const Redirect = () => {
  return (
    <>
      <div className="relative rounded-[30px] flex flex-col justify-center py-5 gap-4 w-[335px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md px-3">
        <div className="absolute top-5 left-5 w-[12px]">
          <Image src={cross} alt="cross" />
        </div>

        <div className="flex justify-center -mt-[65px]">
          <div className="w-[86px] h-[86px] ">
            <Roundbtn image={rocket} />
          </div>
        </div>
        <h2 className="text-[20px] pt-6 text-center uppercase text-[#C3F847] font-meul">
          YOU ARE BEING REDIRECTED
        </h2>

        <div className="flex justify-center items-center rounded-[30px] bg-black bg-opacity-5 px-14 backdrop-blur-[32.5px] h-[95px]">
          <p className="text-[12px] text-[#CACACA] uppercase text-center font-monl ">
            Verify your email to get started. Click the link in the email we
            HAVE sent you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Redirect;
