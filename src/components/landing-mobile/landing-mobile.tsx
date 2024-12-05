import { useState } from 'react';
import background from '@/assests/background_images/landing_mobile_bg.png';
import WelcomeCard from '../Cards/welcome-card';
import Image from 'next/image';
const LandingMob = () => {
  const [showPopUp, setShowPopup] = useState(false);

  return (
    <>
      <div
        className="flex w-[100vw] h-[100vh] bg-cover bg-center justify-center items-center"
        // style={{ backgroundImage: `url(${background.src})` }}
      >
        <Image
          alt="Mountains"
          src={background}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <WelcomeCard setShowPopup={setShowPopup} />
      </div>
    </>
  );
};

export default LandingMob;
