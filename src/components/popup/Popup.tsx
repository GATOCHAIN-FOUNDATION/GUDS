import background from '@/assests/background_images/popup_bg.png';
import PopupCard from '../Cards/popup-card';
import Logo from '@/assests/logo/3d_logo.png';
import type { NextPage } from 'next';

const Popup: NextPage = () => {
  return (
    <>
      <div
        className="flex relative w-[100vw] h-[100vh] bg-cover bg-center justify-center items-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="absolute flex justify-center items-center w-[100vw] h-[100vh] bg-[#000000] bg-opacity-5 backdrop-blur-[30px]">
          <div>
            <PopupCard image={Logo} altHeading="3d logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
