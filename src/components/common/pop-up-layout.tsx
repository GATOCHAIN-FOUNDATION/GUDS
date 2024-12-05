import { FC, ReactNode } from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
import PlanetIcon from '@/assests/logo/planet.png';
import FileIcon from '@/assests/logo/file.png';
import GalaxyIcon from '@/assests/logo/galaxy.png';
import BlackHoleIcon from '@/assests/logo/bh.png';
import backgroundImage from '@/assests/webbg.jpg';

interface props {
  children: ReactNode;
}

const PopUpLayout: FC<props> = ({ children }) => {
  const settingIcons = [
    { source: GalaxyIcon, altHeading: 'galaxy icon - Setting icon' },
    { source: FileIcon, altHeading: 'File icon - Setting icon' },
    { source: BlackHoleIcon, altHeading: 'Black hole icon - Setting icon' },
    { source: PlanetIcon, altHeading: 'planet icon - Setting icon' },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="flex items-center justify-center w-[99%] py-3 h-screen mx-auto border    overflow-hidden">
          <div
            className="flex flex-col relative w-full h-full bg-cover rounded-lg justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          >
            <Navbar />
            <div className="absolute  h-full w-full flex justify-center items-center">
              {children}
            </div>
            <div className="w-[100%] h-[70%] flex items-center justify-center "></div>
            <div className="w-[100%] h-[20%] flex  justify-center  ">
              <div className="w-[100%] h-[20%] flex items-center justify-end">
                <div className="text-[#C3F847] text-xs font-mel mr-10">
                  SUSTAIN / SCALE / SECURE
                </div>
                <div className=" flex items-center justify-center font-mel mr-5">
                  {settingIcons.map((item,index) => {
                    return (
                      <Image
                        key={index}
                        alt={item.altHeading}
                        src={item.source}
                        className={'mx-2'}
                        height={30}
                        width={30}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpLayout;
