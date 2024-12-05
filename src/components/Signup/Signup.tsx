import background from '@/assests/background_images/popup_bg.png';
import FormCard from '@/components/Cards/form-card';
import SliderImage from '@/assests/background_images/SliderImage.png';
import SliderImage2 from '@/assests/background_images/SliderImage2.png';
import Image from 'next/image';

const Signup = () => {
  const SliderContent = [
    {
      image: SliderImage,
      heading: 'Very GUDS Catch',
      description: '$ 10 000  = 10K GUDS GET 2500 GL TOKEN /  USD 300',
      color: '#C3F847',
      order: 1,
    },
    {
      image: SliderImage2,
      heading: 'Royal Investors Pass #12',
      description: '$ 5000 = 12% APY* GUDS 5600 per year',
      color: '#B384FF',
      order: 2,
    },
  ];

  return (
    <>
      <div className="flex flex-col relative min-h-[100vh] min-w-[370px] max-w-full max-h-full p-3 bg-cover bg-center justify-center items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={background}
            alt="Background"
            style={{
              zIndex: -2,
            }}
            className="w-full h-full bg-cover aspect-auto"
          />
        </div>

        <div className="absolute inset-0 w-full h-full backdrop-blur-2xl z-[10]"></div>
        <div className="flex flex-col justify-center z-[20] ">
          <div className="flex flex-col gap-4 justify-center p-3 rounded-[30px] w-[357px] bg-[#000000] bg-opacity-20 backdrop-blur-[75px] z-[1]">
            {/* <ToggelButton item1="GUDS to Invest" item2="GUDS in Wallet" /> */}

            <FormCard />
            {/* <Redirect /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
