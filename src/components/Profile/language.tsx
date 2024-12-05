'use client';
import React from 'react';
import Image from 'next/image';
import { Fragment, FC } from 'react';
import { useState, useEffect } from 'react';
import CheckIcon from '@/assests/icons/Check.png';
import BackIcon from '@/assests/icons/Back.png';
import Link from 'next/link';
import countryData from '@/assests/counteries.json';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { AiOutlineClose } from 'react-icons/ai';
import RoundButton from '@/utils/round-button-v2';
interface ModalProps {
  country: string;
  email: any;
  onClose: any;
}
const SuccessModal: FC<ModalProps> = ({ country, email, onClose }) => {
  console.log(country, email);
  const handleCountryClick = async () => {
    const resUserExists = await fetch('/api/updateCountry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, country }),
    });

    const { res } = await resUserExists.json();
    console.log('Response', res);
    onClose();
  };
  return (
    <div className="fixed inset-0  backdrop-blur-sm flex justify-center items-center">
      <div className="w-[350px] relative border border-[#C3F847] h-[250px] flex  items-center justify-center flex-col bg-black bg-opacity-25  rounded-[40px] shadow-md">
        <span className="text-[#C3F847] font-meul   font-bold ">
          Please confirm
        </span>
        <div
          className="absolute top-5 right-5 cursor-pointer text-[20px] text-white"
          onClick={onClose}
        >
          <AiOutlineClose />
        </div>
        <div
          className="absolute bottom-0 right-5 mb-[-20px] cursor-pointer text-[20px] text-white"
          onClick={handleCountryClick}
        >
          <RoundButton />
        </div>
      </div>
    </div>
  );
};
const Language = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

  const [selectedCountry, setSelectedCountry] = useState('');
  const [email, setEmail] = useState(session?.user?.email);
  const [modal, setModal] = useState(false);
  const userEmail = session?.user?.email;
  useEffect(() => {
    const fetchData = async () => {
      const resUserExists = await fetch('/api/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }),
      });

      const { user } = await resUserExists.json();
      setSelectedCountry(user.country);

      console.log('user', user);
    };
    fetchData();
  }, [userEmail]);
  const handleCountryClick = async (country: any) => {
    setSelectedCountry(country);
    setModal(true);
  };
  return (
    <Fragment>
      <div className="w-[100%]  flex flex-col items-center justify-center bg-white mx-5 overflow-auto">
        <div className=" w-[100%] flex items-center justify-start border-b-[2px] border-zinc-200 p-3 uppercase ">
          <Link href="/profile">
            {' '}
            <Image
              alt="BackIcon"
              src={BackIcon}
              className={'mr-2 cursor-pointer'}
              height={20}
              width={20}
            />{' '}
          </Link>
          <h1 className="  font-mol  ">Country and Language</h1>
        </div>

        {countryData.map((country, index) => (
          <div
          key={index}
            className={`w-[100%] flex items-center justify-between  ${
              selectedCountry === country.name
                ? ' border-black border-[2px]'
                : 'border-zinc-200 border-b-[2px]'
            }  p-3 `}
            onClick={() => handleCountryClick(country.name)}
          >
            <div className="w-[100%] flex items-center justify-start">
              {/* <Image
            alt="FlagIcon1"
            src={FlagIcon1}
            className={"mr-4"}
            height={20}
            width={20}
          /> */}
              <Image
                src={`https://flagsapi.com/${country.code}/flat/64.png `}
                width={30}
                height={30}
                alt={''}
              />

              <h1 className=" font-mol  ml-2 font-semibold ">{country.name}</h1>
            </div>
            {selectedCountry === country.name && (
              <Image
                alt="CheckIcon"
                src={CheckIcon}
                className={''}
                height={20}
                width={20}
              />
            )}
          </div>
        ))}
      </div>
      {modal && (
        <SuccessModal
          country={selectedCountry}
          email={email}
          onClose={() => {
            setModal(false);
          }}
        />
      )}
    </Fragment>
  );
};

export default Language;
