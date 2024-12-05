import { FC } from 'react';
import Image from 'next/image';

interface btnProps {
  image: any;
  heading: string;
  altHeading: string;
}

const IconBtn: FC<btnProps> = ({ image, heading, altHeading }) => {
  return (
    <>
      <div
        className={`flex items-center justify-start mb-4`}
        style={heading === 'WHY ?' ? { marginBottom: '60px' } : {}}
      >
        <Image
          alt={altHeading}
          src={image}
          className={'mr-2'}
          height={heading === 'WHY ?' ? 230 : 25}
          width={heading === 'WHY ?' ? 45 : 25}
        />{' '}
        <h1 className=" ml-2">{heading}</h1>
      </div>
    </>
  );
};

export default IconBtn;
