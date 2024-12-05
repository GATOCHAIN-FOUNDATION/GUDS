'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import catprofile from '@/assests/background_images/profile2.png';
import cross from '@/assests/icons/cross.png';
import { useSession } from 'next-auth/react';
import camera from '@/assests/icons/camera1.png';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-hot-toast';
interface FormData {
  firstName: string;
  lastName: string;
  birthday: string;
  telegramNick: string;
  linkedinLink: string;
  email: string;
  country: string;
}

const PersonalInformation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });

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
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setBirthday(user.birthday);
      setTelegramNick(user.telegramNick);
      setLinkedinLink(user.linkedinLink);
      setCountry(user.country);
      console.log('user', user);
    };
    fetchData();
  }, [userEmail]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [telegramNick, setTelegramNick] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [email, setEmail] = useState(session?.user?.email);
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isEditing, setIsEditing] = useState(false);

  console.log(email);
  const nameRegex = /^[A-Za-z\s]{2,30}$/;
  const birthdayRegex = /^\d{1,2}-\d{1,2}-\d{4}$/;
  const telegramRegex = /^[A-Za-z0-9_]{5,}$/;
  const linkedinRegex = /^https:\/\/www\.linkedin\.com\/.*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const countryRegex = /^[A-Za-z\s]{3,}$/;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const validationErrors: Partial<FormData> = {};

    // if (!nameRegex.test(firstName)) {
    //   validationErrors.firstName = 'Invalid first name';
    // }

    // if (!nameRegex.test(lastName)) {
    //   validationErrors.lastName = 'Invalid last name';
    // }

    // if (!birthdayRegex.test(birthday)) {
    //   validationErrors.birthday = 'Invalid birthday';
    // }

    // if (!telegramRegex.test(telegramNick)) {
    //   validationErrors.telegramNick = 'Invalid Telegram nick';
    // }

    // if (!linkedinRegex.test(linkedinLink)) {
    //   validationErrors.linkedinLink = 'Invalid LinkedIn link';
    // }

    // if (!emailRegex.test(email)) {
    //   validationErrors.email = 'Invalid email';
    // }

    // if (!countryRegex.test(country)) {
    //   validationErrors.country = 'Invalid country';
    // }

    if (Object.keys(validationErrors).length === 0) {
      const resUserExists = await fetch('/api/editProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          birthday,
          telegramNick,
          linkedinLink,
          country,
        }),
      });
      setIsEditing(false);
      const { res } = await resUserExists.json();
      toast.success('Profile updated sucessfully');

      console.log('Response', res);
    } else {
      setErrors(validationErrors);
      console.log(errors);
    }
  };

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  return (
    <div
      className={`flex  flex-col items-center justify-center ${
        isMobile ? 'w-[90%]' : 'w-[80%]'
      } font-monl rounded-[50px] ${isMobile && 'mt-[60px]'}`}
      style={{
        background: `rgba(0, 0, 0, 0.2)`,
        backdropFilter: `blur(75px)`,
      }}
    >
      <div className="w-[100%] flex items-center justify-center realtive ">
        <Link href="/profile/camera">
          {' '}
          <Image
            alt="camera1"
            src={camera}
            className={'mt-[70px]  '}
            height={20}
            width={20}
          />
        </Link>
        <Image
          alt="catprofile"
          src={catprofile}
          className={'mt-[-70px] '}
          height={230}
          width={230}
        />
        <Link href="/profile">
          {' '}
          <Image
            alt="cross"
            src={cross}
            className={'top-10 absolute right-10 cursor-pointer'}
            height={10}
            width={10}
          />
        </Link>
      </div>
      <form
        className="flex items-center justify-center w-[100%] "
        onSubmit={handleSubmit}
      >
        <div className="pb-8 w-[70%] ">
          <div className="w-[90%] flex items-center justify-end">
            {isEditing && (
              <button
                type="submit"
                className="cursor-pointer bg-black text-white m-2 p-2 rounded-[50px] text-sm"
              >
                Update Profile
              </button>
            )}
            <Image
            alt={""}
              onClick={handleEditClick}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAe0lEQVR4nO3QOwqAMBBF0fGzG12O4FIsk9J9WLlGiyuBBPzERmfAIrcJIXAeRKQkIoAHZks8pTsC9MDGOa+FV/Ec1UeACViBNt6Hy4j7iqdyI59wx70FaOJ7p40fR2qtb8k1/xb3Bf/dt7jXeByww0OmeMgUD5niJXloB4XGGRY1SJAvAAAAAElFTkSuQmCC"
            />
          </div>
          <div className=" flex items-center justify-center w-[100%] py-2 text-white ">
            <div className="w-[48%] flex flex-col items-center justify-center ">
              <div className="w-[90%] text-xs py-1">First Name</div>
              {isEditing ? (
                <input
                  className="w-[90%] h-[25px] outline-none text-sm border-b-[1px] bg-transparent p-1 "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              ) : (
                <div className=" w-[90%]  h-[25px] flex items-center justify-start text-sm border-b-[1px]">
                  {firstName}
                </div>
              )}
            </div>
            <div className="w-[48%] flex flex-col items-center justify-center ">
              <div className="w-[90%] text-xs py-1">Last Name</div>
              {isEditing ? (
                <input
                  className="w-[90%] h-[25px] outline-none text-sm border-b-[1px] bg-transparent p-1 "
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              ) : (
                <div className="  w-[90%]   h-[25px] flex items-center justify-start text-sm border-b-[1px]">
                  {lastName}
                </div>
              )}
            </div>
          </div>
          <div className=" flex items-center justify-center w-[100%] py-2 text-white ">
            <div className="w-[92%] flex flex-col items-center justify-start">
              <div className="w-[100%] text-xs py-1">Birthday</div>{' '}
              {isEditing ? (
                <div className="flex h-[25px] items-center justify-start w-full border-b-[1px] ">
                  <DatePicker
                    className=" bg-transparent w-full outline-none"
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                  />
                </div>
              ) : (
                <div className=" w-[100%]  h-[25px] flex items-center justify-start text-sm border-b-[1px]">
                  {startDate.toString()}
                </div>
              )}
            </div>
          </div>
          <div className=" flex items-center justify-center w-[100%] py-2 text-white ">
            <div className="w-[92%] flex flex-col items-center justify-center ">
              <div className="w-[100%] text-xs py-1">Telegram Nick</div>{' '}
              {isEditing ? (
                <input
                  className="w-[100%] h-[25px] outline-none text-sm border-b-[1px] bg-transparent p-1 "
                  value={telegramNick}
                  onChange={(e) => setTelegramNick(e.target.value)}
                />
              ) : (
                <div className=" w-[100%]  h-[25px] flex items-center justify-start text-sm border-b-[1px]">
                  {telegramNick}
                </div>
              )}
            </div>
          </div>
          <div className=" flex items-center justify-center w-[100%] py-2 text-white ">
            <div className="w-[92%] flex flex-col items-center justify-center ">
              <div className="w-[100%] text-xs py-1">Linkedin Link</div>
              {isEditing ? (
                <input
                  className="w-[100%] text-sm h-[25px] outline-none border-b-[1px] bg-transparent p-1 "
                  value={linkedinLink}
                  onChange={(e) => setLinkedinLink(e.target.value)}
                />
              ) : (
                <div className=" w-[100%]  h-[25px] flex items-center justify-start text-sm border-b-[1px]">
                  {linkedinLink}
                </div>
              )}
            </div>
          </div>
          <div className=" flex items-center justify-center w-[100%] py-2 text-white ">
            <div className="w-[92%] flex flex-col items-center justify-center ">
              <div className="w-[100%] text-xs py-1">Email</div>{' '}
              <div className=" w-[100%]  h-[25px] flex items-center justify-start text-sm border-b-[1px]">
                {email}
              </div>
            </div>
          </div>{' '}
          <div className=" flex items-center justify-center w-[100%] py-2 text-white ">
            <div className="w-[92%] flex flex-col items-center justify-center ">
              <div className="w-[100%] text-xs py-1">Country</div>

              <div className="  w-[100%]  h-[25px] flex items-center justify-start text-sm border-b-[1px]">
                {country}
              </div>
            </div>
          </div>
        </div>
      </form>
      <br /> <br />
    </div>
  );
};

export default PersonalInformation;
