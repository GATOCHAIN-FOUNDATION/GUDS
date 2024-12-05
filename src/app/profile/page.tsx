'use client';
import dynamic from 'next/dynamic';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
const Profile = dynamic(() => import('@/components/Profile/Profile'));

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const ProfilePage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  return (
    <>
      {status === 'authenticated' && (
        <MobileLayout>
          <Profile />
        </MobileLayout>
      )}
    </>
  );
};

export default ProfilePage;
