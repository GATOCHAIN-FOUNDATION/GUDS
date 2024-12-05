'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import googleIcon from '@/assests/icons/google.png';
import Image from 'next/image';
import RoundButton from '@/utils/round-button-v2';
import cross from '@/assests/icons/cross.png';
import toast from 'react-hot-toast';

const FormCard = () => {
  const [confirmPassword, setconfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');

  const router = useRouter();

  const icons = [
    { icon: googleIcon, to: '', altHeading: 'google icon', provider: 'google' },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('in handleSubmit');

    if (!confirmPassword || !email || !password || !firstName) {
      toast.error('All fields are necessary.', { position: 'top-center' });
      return;
    }

    if (confirmPassword !== password) {
      toast.error('Password not matched', { position: 'top-center' });
      return;
    }

    console.log('Adding Data into Database');

    try {
      toast.loading('Registering User ...', {
        id: 'register',

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

      if (user) {
        toast.dismiss('register');
        toast.error('User already exists.', { position: 'top-center' });

        return;
      }
      console.log('Adding Data into Database');

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
        }),
      });

      const { new_user } = await res.json();

      console.log('tuser', new_user);
      const token = await fetch('api/createToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: new_user?._id,
        }),
      });
      const { _token } = await token.json();
      console.log('Token:', _token);
      const link =
        process.env.NEXT_ENV === 'development'
          ? `http://localhost:3000/api/activate/${_token?.token}`
          : `https://guds.world/api/activate/${_token?.token}`;

      const Email = await fetch('api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          link,
        }),
      });
      console.log(Email);

      if (res.ok) {
        setEmail('');
        setPassword('');
        setconfirmPassword('');
        setFirstName('');
        toast.dismiss('register');
        toast.success(
          'Registration successful! Please check your email for verification.',
          { position: 'top-center' }
        );
        const form = e.target;
        form.reset();
        router.push('/login');
      } else {
        toast.dismiss('register');
        toast.error('User registration failed. Please try again.', {
          position: 'top-center',
        });
        console.log('User registration failed.');
      }
    } catch (error) {
      console.log('Error during registration: ', error);
      toast.error(
        'An error occurred during registration. Please try again later.',
        { position: 'top-center' }
      );
    }
  };

  return (
    <>
      <div className="relative rounded-[30px] flex flex-col justify-center py-5 gap-4 w-[335px] bg-[#000000] bg-opacity-20 backdrop-blur-2xl shadow-md px-3">
        <div className="absolute top-5 left-5 w-[12px]">
          <Image src={cross} alt="cross" />
        </div>

        <h2 className="text-[20px] pt-6 text-center uppercase text-[#C3F847] font-meul">
          register <br /> to proceed
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder={'Email'}
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#ffffff] outline-none text-white/80 bg-opacity-[16%] rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff]"
          />
          <input
            placeholder={'Password'}
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#ffffff] outline-none text-white/80 bg-opacity-[16%] rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff]"
          />
          <input
            placeholder={'Confirm Password'}
            type={'password'}
            onChange={(e) => setconfirmPassword(e.target.value)}
            className="bg-[#ffffff] outline-none text-white/80 bg-opacity-[16%] rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff]"
          />

          <input
            placeholder={'Name'}
            type={'name'}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#ffffff] outline-none text-white/80 bg-opacity-[16%] rounded-[30px] h-[63.8px] w-full px-4 placeholder:text-[12px] placeholder:text-[#ffffff]"
          />

          <button
            className="absolute right-3 bottom-9 cursor-pointer "
            type="submit"
          >
            <RoundButton />
          </button>
        </form>
        <div className="flex flex-col justify-start gap-4 pl-3">
          <p className="text-[12px] text-[#CACACA]">
            Already Registered ?{' '}
            <span className="text-[#C3F847] underline">
              <Link href="/login">Login</Link>
            </span>
          </p>
          <p className="text-[12px] text-[#CACACA]">Or login with</p>
          <div className="pl-3 flex gap-6">
            {icons.map((icon, index) => {
              return (
                <Image
                  key={index}
                  src={icon.icon}
                  alt={icon.altHeading}
                  width={20}
                  onClick={() => signIn(icon.provider)}
                  className="aspect-square"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCard;
