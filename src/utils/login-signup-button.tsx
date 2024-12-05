import background from '@/assests/webbg.jpg';
import profileImage from '@/assests/icons/footerIcons/profile.png';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

export const LoginSignupBtn = () => {
  return (
    <div className="w-[150px] h-[120px] items-center justify-center relative rounded-[20px] flex p-2">
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -2 }}>
        <Image
          src={background}
          alt="Background"
          className="w-[193px] h-[132px] object-contain rounded-[20px] aspect-auto"
        />
      </div>

      <div className="flex items-center justify-between z-[20] w-full h-full">
        <p
          className="text-[20px] font-meul text-[#ffffff]"
          style={{ fontSize: '20px', lineHeight: 1 }}
        >
          Log out
        </p>
        <div className="flex w-[10px] items-end">
          <Image
            src={profileImage}
            alt={'profile logo'}
            className="w-[10px] aspect-auto"
            style={{ width: '25px' }}
            onClick={() => signOut()}
          />
        </div>
      </div>
    </div>
  );
};
