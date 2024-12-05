import { FC, ReactNode, useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import PlanetIcon from '@/assests/logo/planet.png';
import FileIcon from '@/assests/logo/file.png';
import GalaxyIcon from '@/assests/logo/galaxy.png';
import BlackHoleIcon from '@/assests/logo/bh.png';
import backgroundImage from '@/assests/webbg.jpg';

interface props {
  children: ReactNode;
}

const Desktop: FC<props> = ({ children }) => {
  const settingIcons = [
    { source: GalaxyIcon, altHeading: 'galaxy icon - Setting icon' },
    { source: FileIcon, altHeading: 'File icon - Setting icon' },
    { source: BlackHoleIcon, altHeading: 'Black hole icon - Setting icon' },
    { source: PlanetIcon, altHeading: 'planet icon - Setting icon' },
  ];
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount

    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {!isMobile && (
        <div className="flex justify-center items-center w-full h-full overflow-hidden">
          <div className="flex items-center justify-center w-[99%] py-3 h-screen mx-auto border    overflow-hidden">
            <div
              className="flex flex-col relative w-full h-full bg-cover rounded-lg overflow-hidden"
            >
           
              <Image
                alt="Mountains"
                src={backgroundImage}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div
                className="absolute flex p-2 justify-center items-center top-0 left-0 2xl:w-[1300px] xl:w-[85%] rounded-2xl h-full bg-opacity-50  "
                style={{
                  background: `rgba(255, 255, 255, 0.06)`,
                  backdropFilter: `blur(45px)`,
                }}
              >
                <div className="h-full w-[100vw] overflow-auto flex justify-center items-center rounded-[20px]">
                  {children}
                </div>
              </div>
              <Navbar />
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
      )}
    </>
  );
};

export default Desktop;
