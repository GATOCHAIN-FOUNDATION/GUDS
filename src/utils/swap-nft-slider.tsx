'use client';
import cardBg from '@/assests/background_images/swapNFTSlide.png';
import diamonds from '@/assests/logo/Diamonds2.png';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './swapslider.css';
import React from 'react';

interface cardProps {
  heading: string;
  subHeading: string;
  logo: any;
  bgColor: any;
  amount: string;
  offerAmount: string;
}

const SwapCard = ({
  heading,
  subHeading,
  logo,
  bgColor,
  amount,
  offerAmount,
}: cardProps) => {
  return (
    <div className="w-[300px] h-[200px] p-4 bg-opacity-30 flex items-end rounded-[20px] drop-shadow-md relative">
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -2 }}>
        <Image
          src={cardBg}
          alt="Background"
          className="w-[300px] h-[200px] object-cover rounded-[20px] aspect-auto"
        />
      </div>

      <div
        className="absolute inset-0 w-full h-full rounded-[20px]"
        style={{
          background: bgColor ? `${bgColor}` : 'transparent',
          opacity: '60%',
          zIndex: -1,
        }}
      ></div>

      {/* <div className="absolute w-[140px] top-4 right-5"> */}
      {logo ? (
        <div
          className="absolute w-[250px] flex"
          style={{ top: '0px', right: '20px' }}
        >
          <Image
            src={logo}
            alt={'diamonds'}
            className="w-[150px] absolute left-[30%] aspect-auto"
            style={{
              width: '150px',
              position: 'absolute',
              left: '30%',
              top: '10px',
            }}
          />
        </div>
      ) : (
        ''
      )}
      {/* </div> */}

      <div className="flex justify-between z-[30] w-full">
        <div className="flex flex-col justify-start">
          <h2
            className={`font-meb text-[25px] font-extrabold italic ${
              bgColor ? 'text-black' : 'text-white'
            }`}
            style={{ lineHeight: 1 }}
          >
            {heading.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                {word}
                {index < heading.split(' ').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <h4
            className={`font-meul ${
              bgColor ? 'text-black' : 'text-white'
            } text-[13px]`}
          >
            {subHeading}
          </h4>
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="font-mer text-right">{amount}</h2>
          <h3 className="text-[#C3F847] font-mer text-right">{offerAmount}</h3>
        </div>
      </div>
    </div>
  );
};

const SwapNFTSlider = () => {
  var settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 400,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,
  };

  const swapcards = [
    // {
    //   heading: "EXCLUSIVE SWAP OFFER",
    //   subHeading: "Limited Amount",
    //   logo: null,
    //   bgColor: null,
    //   amount: "",
    //   offerAmount: "",
    // },
    {
      heading: 'FIRST STABLE COIN',
      subHeading: 'BACKED BY DIAMOND',
      logo: diamonds,
      bgColor: 'linear-gradient(to bottom right, #B384FF, transparent)',
      amount: '$ 50 000',
      offerAmount: '+$2000',
    },
    // {
    //   heading: "VERY GUDS CATCH",
    //   subHeading: "Limited Offer",
    //   logo: diamonds,
    //   bgColor: "linear-gradient(to bottom right, #C3F847, transparent)",
    //   amount: "$ 50 000",
    //   offerAmount: "+$2000",
    // },
  ];

  return (
    <div className="block w-[300px] mx-auto my-auto">
      <Slider {...settings}>
        {swapcards.map((card, index) => (
          <SwapCard
            key={index}
            heading={card.heading}
            subHeading={card.subHeading}
            logo={card.logo}
            bgColor={card.bgColor}
            amount={card.amount}
            offerAmount={card.offerAmount}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SwapNFTSlider;
