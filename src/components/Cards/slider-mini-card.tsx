import { FC } from 'react';
import Image from 'next/image';
import upArrow from '@/assests/icons/upArrow.png';
import downArrow from '@/assests/icons/downArrow.png';

interface props {
  image: any;
  heading: string;
  desc: string;
  order: number;
  headingColor: string;
}

const SliderMiniCard: FC<props> = ({
  image,
  heading,
  desc,
  order,
  headingColor,
}) => {
  return (
    <>
      <div className="relative w-[335px] h-[136px] bg-[#000000] bg-opacity-10 backdrop-blur-[12px] z-[2] rounded-[15px] flex">
        <div
          className={`w-[107px] m-4 flex flex-col gap-1 order-${order}`}
          style={{ order: `${order}` }}
        >
          <h3
            className={`text-[14px] text-[${headingColor}] text-left font-bold`}
            style={{ color: `${headingColor}` }}
          >
            {heading}
          </h3>
          <div className="text-[10px] text-[#ffffff] text-left">{desc}</div>
          <div className="flex justify-end text-right items-center gap-2">
            <div>
              <Image src={downArrow} alt={''} />
            </div>
            <div className="text-[#ffffff] text-[13px]">1</div>
            <div>
              <Image src={upArrow} alt={''} />
            </div>
          </div>
        </div>

        <div className="rounded-[15px] order-1 h-[136px]">
          <Image
            src={image}
            alt="slider image"
            width={192}
            height={136}
            className="w-[192px] h-[136px]"
          />
        </div>
      </div>
    </>
  );
};

export default SliderMiniCard;
