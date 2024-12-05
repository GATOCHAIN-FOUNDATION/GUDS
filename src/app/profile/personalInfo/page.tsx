import dynamic from 'next/dynamic';
const MobileLayout = dynamic(() => import('@/components/layout/mobile-layout'));
const PersonalInformation = dynamic(
  () => import('@/components/Profile/personalInformation')
);

const PersonalInfo = () => {
  return (
    <>
      <MobileLayout>
        <PersonalInformation />
      </MobileLayout>
    </>
  );
};

export default PersonalInfo;
