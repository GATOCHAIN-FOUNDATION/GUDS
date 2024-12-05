import Image from 'next/image';
import cardBg from '@/assests/background_images/cardBg.png';
import back_card from '@/assests/icons/back_card.png';
import Logo from '@/assests/logo/logo3.png';
import progress_diamond from '@/assests/icons/progress_diamond.png';

const CustomButton = ({
  action_name,
  image,
  backgroundColor,
}: {
  action_name: string;
  image: any;
  backgroundColor: string;
}) => {
  return (
    <button
      className="rounded-[30px] flex flex-col justify-center items-center relative w-[110px] h-[90px]"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className="absolute top-0 right-0 w-[28px] h-[28px] text-white italic text-[15px] rounded-full bg-[#614AD3] mt-[-20px] mr-[-5px]">
        {action_name === 'stake' ? 'i' : '?'}
      </div>

      <h3 className="text-[#000000] text-[14px] font-mer uppercase">
        {action_name}
      </h3>
      <Image
        src={image}
        alt={''}
        className="w-[35px] aspect-auto object-contain"
      />
    </button>
  );
};

export const StakingPlan = () => {
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
      <div className="w-[320px] mt-5 h-[200px] flex flex-col gap-3 px-7 justify-center items-center rounded-[15px] bg-[#000000] bg-opacity-20 backdrop-blur-md">
        <h1 className="text-[50px] text-[#ffffff] font-mer"> 11. 500 </h1>
        <h3 className="text-[15px] text-[#C3F847] font-mer">
          Your GUDS Staking Plan
        </h3>
        <div className="flex flex-col w-full items-start justify-center">
          <p className="text-white text-[14px] text-left">
            $31,50 / daily rewards
          </p>
          <p className="text-white text-[14px] text-left">+15% APY*</p>
          <p className="text-white text-[14px] text-left">10 000 Pending</p>
        </div>

        <div className="absolute right-4 bottom-0 mb-[-40px]">
          <CustomButton
            action_name={'stake'}
            image={back_card}
            backgroundColor={'#C3F847'}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative mt-12">
          <div className="absolute top-0 mt-[-31px] left-6">
            <Image
              src={progress_diamond}
              alt={''}
              className="w-[60px] aspect-auto"
            />
          </div>
          <div className="w-full h-[5px] rounded-full bg-gradient-to-r from-[#C3F847] via-[#D08F30] to-[#DF1414]"></div>
        </div>
        <p className="font-mel italic text-[#C3F847] text-[8px] text-left">
          Your GUDS are COMING SOON*
        </p>
      </div>

      <div className="flex flex-col gap-2 mb-[25%]">
        <div className="w-[320px] h-[130px] flex flex-col justify-center px-4 rounded-[15px] bg-[#000000] bg-opacity-20 backdrop-blur-md">
          <h1 className="text-[16px] text-[#ffffff] font-mer uppercase">
            GUDS Balance
          </h1>
          <h1 className="text-[60px] text-[#ffffff] opacity-10 italic">
            10 000
          </h1>
        </div>
        <p className="font-mel italic text-[#C3F847] text-[8px] text-left">
          or place it oun your digital balance for payments
        </p>
      </div>

      <div className="absolute right-5 bottom-0 mb-[-40px]">
        <CustomButton
          action_name={'claim'}
          image={back_card}
          backgroundColor={'#979797'}
        />
      </div>
    </div>
  );
};
