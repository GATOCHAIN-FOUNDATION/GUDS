'use client';
import RoundButton from '@/utils/round-button-v2';
import { FC } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import googleIcon from '@/assests/icons/google.png';
import toast from 'react-hot-toast';
import React from 'react';
import { routes } from '@/constants/route';
import Image, { StaticImageData } from 'next/image';
import { LuEyeOff, LuEye } from 'react-icons/lu';

interface LoginCardProps {
  image: StaticImageData;
  altHeading: string;
}
const icons = [
  { icon: googleIcon, to: '', altHeading: 'google icon', provider: 'google' },
];

const LoginCard: FC<LoginCardProps> = ({ image, altHeading }): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setIsChecked(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(error);
    if (!email || !password) {
      toast.error('Please enter both email and password.', {
        style: { zIndex: 10000 },
      });
      return;
    }

    try {
      setLoading(true);
      toast.loading('Logging in...', {
        id: 'login',
        style: { zIndex: 10000 },
      });
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();
      if (user?.active === false) {
        router.replace('/redirect');
        toast.dismiss('login');
        setLoading(false);
        return;
      }
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError('Invalid Credentials');
        toast.error('Login failed. Please check your credentials.', {
          style: { zIndex: 10000 },
        });
        toast.dismiss('login');
        setPassword('');
        setEmail('');
        setLoading(false);
        return;
      }
      toast.dismiss('login');
      setPassword('');
      setEmail('');
      toast.success('Login successful!', {
        style: { zIndex: 10000 },
      });

      if (isChecked) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

      router.push(routes.DASHBOARD);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative rounded-[30px] flex flex-col justify-center py-5 gap-4 w-[335px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md px-3">
        <div
          className={`absolute ${
            altHeading === 'diamonds'
              ? 'w-[150px] left-[25%] top-[-60px] '
              : 'w-[9rem] top-[-60px]'
          } aspect-auto z-20`}
        >
          <Image src={image} alt={altHeading} />
        </div>
        <h2 className="text-[25px] pt-10 uppercase text-center text-[#C3F847] font-meul">
          Welcome to <br />
          Back!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder={'Email'}
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-[#ffffff] bg-opacity-[16%] z-30 rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff] outline-none text-white/80 "
          />
          <div className=" flex items-center justify-between bg-[#ffffff]/10 bg-opacity-[16%] rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff] outline-none text-white/80">
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder={'Password'}
              type={showPassword ? 'text' : 'password'}
              value={password}
              className="bg-transparent outline-none placeholder:text-[12px] placeholder:text-[#ffffff]"
            />
            {showPassword ? (
              <LuEyeOff
                className="cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <LuEye
                className="cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <p className="text-red-700  pl-3 ">{error}</p>
          <p className="text-[12px] text-[#CACACA] pl-3">
            Do you have an account ?{' '}
            <span className="text-[#C3F847] underline">
              <Link href="/signup">Register</Link>
            </span>
          </p>
          <div className=" flex items-center gap-4">
            <label className="font-monl text-[10px] text-left pl-3 text-[#ffffff]">
              Remember Me
            </label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <Link href="/forgotpassword">
              <label className="font-monl text-[10px] text-left pl-3 cursor-pointer text-[#C3F847] underline">
                Forgot Password
              </label>
            </Link>
          </div>

          <div className="flex flex-col justify-start gap-4 pl-3">
            <p className="text-[12px] text-[#CACACA]">Or login with</p>
            <div className="pl-3 flex gap-6">
              {icons.map((icon, index) => {
                return (
                  <Image
                    key={index}
                    src={icon.icon}
                    alt={icon.altHeading}
                    width={20}
                    className="aspect-square cursor-pointer"
                    onClick={() => signIn(icon.provider)}
                  />
                );
              })}
            </div>
            <button
              className="absolute bottom-[-50px] right-9 "
              type="submit"
              disabled={loading}
            >
              <RoundButton />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginCard;
